import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { UserProfileController } from "./controllers/UserProfileController";
import { ensureAuth } from "./middlewares/ensureAuth";

const router = Router();

//post routes
router.post("/auth", AuthenticateUserController);
router.post("/messages", ensureAuth, CreateMessageController);

//get routes
router.get("/messages/last3", GetLast3MessagesController);
router.get("/profile", ensureAuth, UserProfileController);

export { router };
