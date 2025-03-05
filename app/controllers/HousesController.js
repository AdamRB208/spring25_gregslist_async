import { AppState } from "../AppState.js";
import { houseService } from "../services/HousesServce.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";


export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    AppState.on('identity', this.drawHouses)
    AppState.on('identity', this.drawHouseForm)
    console.log('Houses Controller is Loaded!');
    this.getHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.card)
    const housesElem = document.getElementById('houseListings')
    housesElem.innerHTML = content
  }

  drawHouseForm() {
    document.getElementById('houseFormPlaceholder').classList.add('d-none')
    document.getElementById('houseForm').classList.remove('d-none')
  }

  async getHouses() {
    try {
      await houseService.getHouses()
    } catch (error) {
      console.error('COULD NOT GET HOUSES', error)
      Pop.error(error, 'could not get houses')
    }
  }

  async createHouseListing() {
    try {
      event.preventDefault()
      const formElem = event.target
      const rawHouseData = getFormData(formElem)
      console.log('House data from from', rawHouseData);
      await houseService.createHouse(rawHouseData)
    } catch (error) {
      console.error('COULD NOT CREATE HOUSE', error);
      Pop.error(error, 'Could not create car!')
    }
  }

  async deleteHouse(houseId) {
    try {
      const confirmed = await Pop.confirm('Are you sure you want to delete this house?', 'It will be gone forever', 'Yes I am sure', 'No I have changed my mind')

      if (!confirmed) {
        return
      }

      await houseService.deleteHouse(houseId)

    } catch (error) {
      console.error('COULD NOT DELETE HOUSE', error);
      Pop.error(error, 'Could not delete house!')
    }
  }

}