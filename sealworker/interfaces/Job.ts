export interface Job {
  messageHead: string;
  callbackUrl: string; // this is the callback url for the asset service to send the job progress reprot to;
  [key: string]: any; // this is to allow any other properties to be added to the object
}

export interface JobProgress extends Job {
  state: string; // downloading || parsing || uploading || completed;
  message: string; // any additional message;
  totalTimeSpent: number; // the total time that the worker has spent on this task;
  downloadTime: number; // the time that the worker has spent on downloading file(s) from S3;
  uploadTime: number; // the time that the worker has spent on uploading file(s) to S3;
  processTime: number; // the time that the worker has spent on parsing the file(s);
}
