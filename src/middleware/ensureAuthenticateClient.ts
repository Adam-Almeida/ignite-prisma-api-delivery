import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}


export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing.",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "81cfe098837986ac78539762f5b1b87f") as IPayload;

    request.id_client = sub;

    return next();

  } catch (err) {
    return response.status(401).json({
      message: "Invalid token.",
    });
  }
}
