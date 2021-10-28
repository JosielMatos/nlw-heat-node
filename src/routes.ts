import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ensureAuth } from "./middlewares/ensureAuth";

const router = Router();

//post routes
router.post("/auth", new AuthenticateUserController().handle)
router.post("/messages", ensureAuth, new CreateMessageController().handle)

//get last 3 messages
router.get("/messages/last3", new GetLast3MessagesController().execute)

export { router };
