/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright bassu 2023 All rights reserved
 * @author bassu <basavarajakj16@gmail.com>
 */

'use strict'

const api_key = '08f28497bb35a0675b5a77c0f4c63780';

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {*} callback callback
 */


export const fetchData = function(URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data))
}

export const url = {
  currentWeather(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  reverseGeo(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },
  /**
   * @param {string} query Search query e.g.: "Bangaluru", "New Delhi" 
   */
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  }
}

