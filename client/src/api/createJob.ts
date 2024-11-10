import { createJobEndpoint } from "../constants"

export const createJob = async (name: string): Promise<string> => {
  const response = await fetch(`${createJobEndpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || "Something went wrong")
  }

  const data: { jobId: string } = await response.json()
  return data.jobId
}
