
class weatherList {
  constructor(parentSelector) {
    this.parent = document.querySelector(parentSelector)
  }
  // addWeather(message) {
  //   const msg = document.createElement('li')
  //   msg.textContent = message
  //   msg.classList.add('weather-message')
  //   this.parent.appendChild(msg)
  // }
  addCondition(parent, className, word) {
    let newLi = document.createElement('li')
    newLi.classList.add('conditions')
    newLi.textContent = 'the ' + className + ' is ' + word
    parent.appendChild(newLi)
  }
}

class weatherAPI {
  constructor(json) {
    this.json = json
  }
  doTheThing(json) {
    let WeatherList = new weatherList('.weatherconditions')
    WeatherList.addCondition(parent, 'humidity', json.main.humidity)
    WeatherList.addCondition(parent, 'temp', json.main.temp)
    WeatherList.addCondition(parent, 'Dailyhigh', json.main.temp_max)
    WeatherList.addCondition(parent, 'Dailylow', json.main.temp_min)
  }
}

let parent = document.querySelector('.weatherconditions')
const main = () => {
  let button = document.querySelector('.search-button')
  let searchInput = document.querySelector('.search')
  button.addEventListener('click', event => {
    let searchInputValue = searchInput.value

    // 5 get the value from the input field and request that data be 'fetched' by the API
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + `${searchInputValue}` + '&units=imperial&APPID=fc44c2946ba0817cb79fc8eb3a06b9d2')
      .then(
        response => {
          return response.json()
        }
      )
      .then(
        json => {
          let WAPI = new weatherAPI(json)
          WAPI.doTheThing(json)
        }
      )
  })
}

document.addEventListener('DOMContentLoaded', main)
