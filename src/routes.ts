import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAuth } from "./middlewares/ensureAuth";

const router = Router();

//post routes
router.post("/auth", new AuthenticateUserController().handle)
router.post("/messages", ensureAuth, new CreateMessageController().handle)

export { router };
