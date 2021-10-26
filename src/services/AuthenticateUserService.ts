import axios from "axios";

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

    //return axios response
    return response.data;
  }
}

export { AuthenticateUserService };
