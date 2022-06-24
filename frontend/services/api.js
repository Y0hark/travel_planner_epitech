import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/'

const TOKEN_KEY = ''

class Http {
  constructor() {}

  static async get(url, params = {}) {
    return await axios.get(API_BASE_URL + url, { params: params })
  }

  static async post(url, params = {}) {
    return await axios.post(API_BASE_URL + url, params)
  }
}

export default class Api {
  constructor() {}

  // get ???
  static async local() {
    return await Http.get('local')
  }

  // get activities available arround the location
  static async enjoy() {
    return await Http.get('enjoy')
  }

  // get hotels arround the location
  static async sleep() {
    return await Http.get('hotel')
  }

  // get ???
  static async travel() {
    return await Http.get('travel')
  }

  // get restaurants arround the location
  static async eat() {
    return await Http.get('eat')
  }

  // get bars arround the location
  static async drink() {
    return await Http.get('drink')
  }
}
