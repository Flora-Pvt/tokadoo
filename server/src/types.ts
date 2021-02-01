import { Request, Response } from "express";
import { Session } from "inspector";

export type MyContext = {
  req: Request & { session: Session };
  res: Response;
}