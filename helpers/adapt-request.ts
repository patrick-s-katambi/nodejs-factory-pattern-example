import { Request } from "express";

export default function adaptRequest({ req }: { req: Request }) {
  return Object.freeze({
    path: req.path,
    method: req.method,
    pathParams: req.params,
    queryParams: req.query,
    body: req.body,
  });
}

export type TadaptRequest = ReturnType<typeof adaptRequest>;
