import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  //specify token code as a string
  sub: string;
}

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
  //get token from the headers
  const authToken = req.headers.authorization;

  //if there's no token, return error
  if (!authToken) {
    return res.status(401).json({ error: "Invalid Token" });
  }

  //split the code from bearer
  const [, token] = authToken.split(" ");

  try {
    //verify token
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;
    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).json({ Error: error.message });
  }
}
