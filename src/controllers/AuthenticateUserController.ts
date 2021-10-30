import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

const AuthenticateUserController = async (req: Request, res: Response) => {
  //get user code from the body query
  const { code } = req.body;

  try {
    //pass in the code from the body to the service function
    const result = await AuthenticateUserService(code);
    //return the result as json
    return res.json(result);
  } catch (error) {
    return res.json(error.message);
  }
};

export { AuthenticateUserController };
