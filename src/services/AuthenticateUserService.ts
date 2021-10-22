import axios from "axios";

class AuthenticateUserService {
  async execute(code: string) {
    //get access token
    const url = "https://github.com/login/oauth/access_token"

    //use axios to do a post req with the credentials
    const response = axios.post(url, null, {
        params: {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
        },
        headers: {
            "Accept": "application/json"
        }
    })

    //return axios response
    return (await response).data
  }
}

export { AuthenticateUserService };
