import { Request, Response } from "express";
import adaptRequest from "../../../helpers/adapt-request";
import { TuserRouteHandler } from "../route-handler";

export default function makeUserController(handler: TuserRouteHandler) {
  return function userController(request: Request, response: Response) {
    const httpRequest = adaptRequest({ req: request });
    handler(httpRequest)
      .then(({ headers, statusCode, data }) => response.set(headers).status(statusCode).send(data))
      .catch((e) => response.status(500).end());
  };
}
