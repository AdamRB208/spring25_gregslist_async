import { AppState } from "../AppState.js"
import { Houses } from "../models/Houses.js"
import { api } from "../utils/Axios.js"


class HousesService {

  async deleteHouse(houseId) {
    const response = await api.delete(`api/house/${houseId}`)
    console.log('DELETED HOUSE', response.data);

    const houses = AppState.houses
    const houseIndex = houses.findIndex(house => house.id == houseId)
    houses.splice(houseIndex, 1)
  }

  async createHouse(houseData) {
    const response = await api.post('api/house', houseData)
    console.log('CREATED HOUSE', response.data);
    const house = new Houses(response.data)
    AppState.houses.push(house)
  }

  async getHouses() {
    const response = await api.get('api/houses')
    console.log('Got Houses', response.data)
    const houses = response.data.map(pojo => new Houses(pojo))
    AppState.houses = houses
  }

}

export const houseService = new HousesService()