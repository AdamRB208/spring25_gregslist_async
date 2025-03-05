import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { jobsService } from "../services/JobsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";


export class JobsController {
  constructor() {
    AppState.on('jobs', this.drawJobs)
    AppState.on('identity', this.drawJobs)
    AppState.on('identity', this.drawJobForm)
    console.log('Jobs Controller is Loaded');
    this.getJobs()
  }

  drawJobs() {
    const jobs = AppState.jobs
    let content = ''
    jobs.forEach(job => content += job.card)
    const jobsElem = document.getElementById('jobListings')
    jobsElem.innerHTML = content
  }


  drawJobForm() {
    document.getElementById('jobFormPlaceholder').classList.add('d-none')
    document.getElementById('jobForm').classList.remove('d-none')
  }

  async getJobs() {
    try {
      await jobsService.getJobs()
    } catch (error) {
      console.error('Could Not Get Jobs', error)
      Pop.error(error, 'could not get the jobs')

    }
  }

  async createJobListing() {
    try {
      event.preventDefault()
      const formElem = event.target
      const rawJobData = getFormData(formElem)
      console.log('job data from form', rawJobData);
      await jobsService.createJob(rawJobData)
    } catch (error) {
      console.error('COULD NOT CREATE JOB', error);
      Pop.error(error, 'could not create job!')
    }

  }

  async deleteJob(jobId) {
    try {
      const confirmed = await Pop.confirm('Are you sure you want to delete this job?', 'It will be gone forever', 'Yes I am sure', 'No I have changed my mind')

      if (!confirmed) {
        return
      }

      await jobsService.deleteJob(jobId)

    } catch (error) {
      console.error('COULD NOT DELETE JOB', error);
      Pop.error(error, 'Could not delete job!')
    }
  }

}