import { HttpRequest, Context } from "@azure/functions";

import { processJob } from "services/JobProcessor";
import { Job } from "interfaces/Job";
import { getMachineInfo } from "utils/machineInfo";

export const workerExec = async (req: HttpRequest, context: Context) => {
  const machineInfo = getMachineInfo();
  context.log(`machineInfo: ${JSON.stringify(machineInfo)}`);

  const message = req.body;
  // const job: Job = message.job;
  const job: Job = message.body;
  const jobProgress = await processJob(job, context);
  return jobProgress;
  // return { result: "dummy" };
};
