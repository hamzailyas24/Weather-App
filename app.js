function getWeather() {
  const cityName = document.getElementById("cityName").value;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8bd6abdc20db1f463412a5c9df7dc7d7&units=metric`;

axios.get(URL).then(function (response) {
    console.log(response);
    console.log(response.data.main.temp);
    var temp = response.data.main.temp;
    document.getElementById("result").innerHTML = `The Current Temprature of ${cityName} is ${temp} <span>&#176;</span>C`;
  })
}

