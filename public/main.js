const main = () => {
  let button = document.querySelector('.search-button')
  let searchInput = document.querySelector('.search')

  button.addEventListener('click', event => {
    let searchInputValue = searchInput.value
    console.log(searchInputValue)
    // 5 get the value from the input field and request that data be 'fetched' by the API
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + `${searchInputValue}` + '&APPID=fc44c2946ba0817cb79fc8eb3a06b9d2')
      .then(
        response => {
          return response.json();
        }
      )
      .then(
        json => {
          const humidity = json.main.humidity
          console.log(humidity)
        }
      )
  })
}
// 5 get the value from the input field and request that data be 'fetched' by the API
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
