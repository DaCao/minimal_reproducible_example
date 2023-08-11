/**
 * @file: TaskProcessor.ts
 *
 * Description:
 *  Main functions that will be called by the worker;
 *  The job processing logic goes here;
 *
 * @author: Da Cao
 * @date: 2023-02-13
 */
import { Context } from "@azure/functions";
import { Job, JobProgress } from "interfaces/Job";
/**
 * This is the main function to process a job;
 * @param {object} job - the job to be processed;
 * @returns {void}
 */
export const processJob = async (job: Job, context: Context) => {
  let jobProgress: JobProgress;
  let stats = {
    downloadTime: 0,
    uploadTime: 0,
    processTime: 0,
  };

  try {
    // record the start time;
    const startTime = new Date().getTime();
    // record the end time;
    const endTime = new Date().getTime();
    const totalTimeSpent = (endTime - startTime) / 1000;

    // create the JobProgress object;
    jobProgress = {
      ...job,
      ...stats,
      state: "completed",
      message: `Job is successfully processed by Azure Function App;`,
      totalTimeSpent: totalTimeSpent,
    };
  } catch (error) {
    throw error;
  }

  return jobProgress;
};
