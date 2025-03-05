import { houseService } from "../services/HousesServce.js";
import { Pop } from "../utils/Pop.js";


export class HousesController {
  constructor() {
    console.log('Houses Controller is Loaded!');
    this.getHouses()
  }

  async getHouses() {
    try {
      await houseService.getHouses()
    } catch (error) {
      console.error('COULD NOT GET HOUSES', error)
      Pop.error(error, 'could not get houses')
    }

  }
}