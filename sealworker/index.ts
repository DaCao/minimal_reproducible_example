import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { workerExec } from "./services/worker";

const sealWorkerFunction: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const responseMessage = "test message";
  context.log(`Http function processed req for url "${req.url}"`);

  const message = req.body;
  context.log("type of message: ", typeof message);
  context.log("message: ", message);

  const result = await workerExec(req, context);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};

export { sealWorkerFunction };
