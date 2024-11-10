export enum JobStatusEnum {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export type JobType = {
  id: string
  name?: string
  status: JobStatusEnum
  result?: string
}
