function getWeather() {
  let cityName = document.getElementById("cityName").value;
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8bd6abdc20db1f463412a5c9df7dc7d7&units=metric`;

  axios.get(URL).then(function (response) {
    console.log(response);
    console.log(response.data.main.temp);
    let temp = response.data.main.temp;
    const result = document.getElementById("result");
    result.innerHTML = `The Current Temprature of ${cityName} is ${temp}<span>&#176;</span>C`;
  });
}
