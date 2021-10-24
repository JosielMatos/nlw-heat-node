import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

//Post auth route with user credentials
router.post("/auth", new AuthenticateUserController().handle)

export { router };
