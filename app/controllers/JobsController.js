import { AppState } from "../AppState.js";
import { jobService } from "../services/JobsService.js";
import { Pop } from "../utils/Pop.js";


export class JobsController {
  constructor() {
    AppState.on('jobs', this.drawJobs)
    AppState.on('identity', this.drawJobs)
    // AppState.on('identity', )
    console.log('Jobs Controller is Loaded');
    this.getJobs()
  }

  drawJobs() {
    const jobs = AppState.jobs
    let content = ''
    jobs.forEach(job => content += job.card)
    const jobsElem = document.getElementById('jobsListing')
    jobsElem.innerHTML = content
  }

  drawJobForm() {
    document.getElementById('jobFormPlaceHolder').classList.add('d-none')
    document.getElementById('carForm').classList.remove('d-none')
  }

  async getJobs() {
    try {
      await jobService.getJobs()
    } catch (error) {
      console.error('Could Not Get Jobs', error);
      Pop.error(error, 'could not get the jobs')

    }
  }
}