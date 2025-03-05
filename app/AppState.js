import { Identity } from './Auth/Identity.js'
import { Car } from './models/Car.js'
import { Houses } from './models/Houses.js'
import { Jobs } from './models/Jobs.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  // NOTE the logged in user
  /** @type {Identity} */
  identity = null
  account = null

  /** @type {Car[]} */
  cars = []

  /**@type {Jobs[]} */
  jobs = []

  /**@type {Houses[]} */
  houses = []
}

export const AppState = createObservableProxy(new ObservableAppState())