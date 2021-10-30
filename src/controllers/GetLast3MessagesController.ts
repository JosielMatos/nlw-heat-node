import { Request, Response } from "express";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

const GetLast3MessagesController = async (req: Request, res: Response) => {

  const result = await GetLast3MessagesService();

  res.json(result);
};

export { GetLast3MessagesController };
