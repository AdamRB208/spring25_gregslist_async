import { AppState } from "../AppState.js"
import { Jobs } from "../models/Jobs.js"
import { api } from "../utils/Axios.js"


class JobsService {

  async deleteJob(jobId) {
    const response = await api.delete(`api/jobs/${jobId}`)
    console.log('DELETED CAR', response.data);

    const jobs = AppState.jobs
    const jobIndex = jobs.findIndex(job => job.id == jobId)
    jobs.splice(jobIndex, 1)
  }

  async createJob(jobData) {
    const response = await api.post('api/jobs', jobData)
    console.log('CREATED JOB', response.data);
    const job = new Jobs(response.data)
    AppState.jobs.push(job)
  }

  async getJobs() {
    const response = await api.get('api/jobs')
    console.log('got jobs', response.data)
    const jobs = response.data.map(pojo => new Jobs(pojo))
    AppState.jobs = jobs
  }
}

export const jobsService = new JobsService()