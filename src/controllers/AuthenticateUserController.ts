import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    //get user code from the body query
    const { code } = req.body;

    //instance of auth user service
    const service = new AuthenticateUserService();

    //pass in the code from the body to the service function
    const result = await service.execute(code)

    //return the result as json
    return res.json(result)
  }
}

export { AuthenticateUserController };
