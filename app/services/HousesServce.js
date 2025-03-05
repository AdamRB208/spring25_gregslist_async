import { AppState } from "../AppState.js"
import { Houses } from "../models/Houses.js"
import { api } from "../utils/Axios.js"


class HousesService {
  async getHouses() {
    const response = await api.get('api/houses')
    console.log('Got Houses', response.data)
    const houses = response.data.map(pojo => new Houses(pojo))
    AppState.houses = houses
  }

}

export const houseService = new HousesService()