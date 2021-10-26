import axios from "axios";
import prismaClient from "../prisma"

//set interface to get only the access token from github's response
interface IAccessTokenResponse {
  access_token: string;
}

//set interface to filter user info
interface IUserResponse {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
}

class AuthenticateUserService {
  async execute(code: string) {
    //get access token
    const url = "https://github.com/login/oauth/access_token";

    //use axios to do a post req with the credentials
    const { data: accessTokenResponse } =
      await axios.post<IAccessTokenResponse>(url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: "application/json",
        },
      });

    //get user data
    const response = await axios.get<IUserResponse>(
      "https://api.github.com/user",
      {
        headers: {
          authorization: `bearer ${accessTokenResponse.access_token}`,
        },
      }
    );

    const { login, avatar_url, name, id } = response.data;

    //find user in db
    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id,
      }
    })

    //if user doensn't exist, create one
    if (!user) {
      user = await prismaClient.user.create({
        data: {
          github_id: id,
          login,
          avatar_url,
          name
        }
      })
    }

    //return axios response
    return response.data;
  }
}

export { AuthenticateUserService };
