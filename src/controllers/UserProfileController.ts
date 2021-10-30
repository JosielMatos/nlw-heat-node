import { Request, Response } from "express";
import { UserProfileService } from "../services/UserProfileService";

const UserProfileController = async (req: Request, res: Response) => {
  const { user_id } = req;

  const result = await UserProfileService(user_id);

  return res.json(result);
};

export { UserProfileController };
