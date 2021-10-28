import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { UserProfileController } from "./controllers/UserProfileController";
import { ensureAuth } from "./middlewares/ensureAuth";

const router = Router();

//post routes
router.post("/auth", new AuthenticateUserController().handle)
router.post("/messages", ensureAuth, new CreateMessageController().handle)

//get routes
router.get("/messages/last3", new GetLast3MessagesController().execute)
router.get("/profile", ensureAuth, new UserProfileController().handle)

export { router };
