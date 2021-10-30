import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

const CreateMessageController = async (req: Request, res: Response) => {
  const { message } = req.body;
  const { user_id } = req;

  const result = await CreateMessageService(message, user_id);

  res.json(result);
};

export { CreateMessageController };
