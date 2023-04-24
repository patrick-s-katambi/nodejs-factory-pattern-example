import { color } from "console-log-colors";
import { NextFunction, Request, Response } from "express";
import adaptRequest from "../helpers/adapt-request";

export default function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const PORT = process.env.PORT;

  const httpRequest = adaptRequest({ req });
  const method = httpRequest.method.toUpperCase();
  const path = httpRequest.path;
  const fullPathUrl = `http://localhost:${PORT}${path}`;

  console.log(`${color.yellow.bgBlueBright.bold.underline(method)} ${color.yellow(fullPathUrl)}`);

  next();
}
