import { Tdatabase } from "../../../db";
import { TadaptRequest } from "../../../helpers/adapt-request";
import adaptResponse, { TadaptResponse } from "../../../helpers/adapt-response";

export default function makeUserRouteHandler({ database }: { database: Tdatabase }) {
  return async function handler(httpRequest: TadaptRequest): Promise<TadaptResponse> {
    switch (httpRequest.method) {
      case "GET":
        return getUsers(httpRequest, database);

      default:
        return adaptResponse<any>({ data: {}, headers: {}, message: "", statusCode: 200 });
    }
  };

  async function getUsers(httpRequest: TadaptRequest, database: Tdatabase) {
    const users = await database.user.findMany();
    return adaptResponse<typeof users>({
      data: users,
      headers: { "Content-Type": "application/json" },
      message: "success",
      statusCode: 200,
    });
  }
}
