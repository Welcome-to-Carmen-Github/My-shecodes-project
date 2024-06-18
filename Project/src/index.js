function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let apiKey = "634534df08f99d8a1bo3c3538aat8763";
  let units = "metric";
  let url = `https://api.shecodes.io/weather/v1/current?query=${cityElement.textContent}&key=${apiKey}&units=${units}`;

  function workResponse(response) {
    let fullData = response.data;
    let current = Math.round(fullData.temperature.current);
    console.log(current);
    let newTemp = document.querySelector("#current-temp");
    newTemp.innerHTML = current;
  }

  axios.get(url).then(workResponse);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

//usar o nome e mudar a tempretura
