import { jobService } from "../services/JobsService.js";
import { Pop } from "../utils/Pop.js";


export class JobsController {
  constructor() {
    console.log('Jobs Controller is Loaded');
    this.getJobs()
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