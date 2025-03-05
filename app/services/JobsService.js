import { AppState } from "../AppState.js"
import { Jobs } from "../models/Jobs.js"
import { api } from "../utils/Axios.js"


class JobsService {

  async getJobs() {
    const response = await api.get('api/jobs')
    console.log('got jobs', response.data)
    const jobs = response.data.map(pojo => new Jobs(pojo))
    AppState.jobs = jobs
  }
}

export const jobService = new JobsService()