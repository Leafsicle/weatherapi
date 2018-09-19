// class WeatherList {
//   constructor(parentSelector) {
//     this.parent = document.querySelector(parentSelector)
//   }

//   addWeather(message) {
//     const msg = document.createElement('li')
//     msg.textContent = message
//     msg.classList.add('weather-message')
//     this.parent.appendChild(msg)
//   }
// }


const addCondition = (parent, className, word) => {
  let newLi = document.createElement('li')
  newLi.classList.add(className)
  newLi.textContent = word
  parent.appendChild(newLi)
}

// const conditions = (humidity, temp, dayHigh, dayLow) => {
//   let tempLI = document.createElement('li')
//   tempLI.textContent = `it is currently ${temp}°F`
//   weather.appendChild(tempLI)

//   let conditionsLI = document.createElement('li')
//   conditionsLI.textContent = `with a humidity of ${humidity}% `
//   weather.appendChild(conditionsLI)

//   let highLI = document.createElement('li')
//   highLI.textContent = `today's high is ${dayHigh}°F`
//   weather.appendChild(highLI)

//   let lowLI = document.createElement('li')
//   lowLI.textContent = `today's low is ${dayLow}°F`
//   weather.appendChild(lowLI)
// }

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
        }).then(
          json => {
            let parent = document.querySelector('.weatherconditions')
            addCondition(parent, 'humidity', json.main.humidity)
            addCondition(parent, 'temp', json.main.temp)
            addCondition(parent, 'Dailyhigh', json.main.temp_max)
            addCondition(parent, 'Dailylow', json.main.temp_min)

            // const humidity = json.main.humidity
            // const temp = json.main.temp
            // const dayHigh = json.main.temp_max
            // const dayLow = json.main.temp_min
            //   weather.textContent = ''
            //   conditions(humidity, temp, dayHigh, dayLow)
          }
        )
  })
  // const weather
}
// 6 We want to call for the weather API:
//   a. retrieve items from API
//   b. add temp and humitidy to DOM as a   (make sure it is in Fahrenheit)
//      - add yesterdays temperature to the DOM
//   c. add %chance of rain to DOM

// add weather URL .icon at
//   d. display LAT/LONG
//   e. add wind to DOM
//   f. add sunset and sunrise to DOM
//   g. add cloudiness forecast to DOM
document.addEventListener('DOMContentLoaded', main)
