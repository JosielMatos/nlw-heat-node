import { Request, Response } from "express";

class CreateMessageController {
    async handle(req: Request, res: Response) {
        const { text } = req.body;
    }
}

export { CreateMessageController }