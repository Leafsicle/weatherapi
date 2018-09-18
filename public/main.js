const conditions = (humidity, temp, dayHigh, dayLow) => {
  let weather = document.querySelector('.weatherconditions')

  let tempLI = document.createElement('li')
  tempLI.textContent = `it is currently ${temp}°F`
  weather.appendChild(tempLI)

  let conditionsLI = document.createElement('li')
  conditionsLI.textContent = `with a humidity of ${humidity}% `
  weather.appendChild(conditionsLI)

  let highLI = document.createElement('li')
  highLI.textContent = `today's high is ${dayHigh}°F`
  weather.appendChild(highLI)

  let lowLI = document.createElement('li')
  lowLI.textContent = `today's low is ${dayLow}°F`
  weather.appendChild(lowLI)

}





//use input value for telling the H1 where you are
// look up how to hit enter to send it

const main = () => {
  let button = document.querySelector('.search-button')
  let searchInput = document.querySelector('.search')

  button.addEventListener('click', event => {
    let searchInputValue = searchInput.value

    // 5 get the value from the input field and request that data be 'fetched' by the API
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + `${searchInputValue}` + '&units=imperial&APPID=fc44c2946ba0817cb79fc8eb3a06b9d2')
      .then(
        response => {
          return response.json();
        }
      )
      .then(
        json => {
          const humidity = json.main.humidity
          const temp = json.main.temp
          const dayHigh = json.main.temp_max
          const dayLow = json.main.temp_min
          conditions(humidity, temp, dayHigh, dayLow)
        }
      )
  })
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
