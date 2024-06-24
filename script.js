const search = document.querySelector(".searchBtn");

const temperature = document.querySelector(".temp");
const city = document.querySelector(".city");
const weatherIcon = document.querySelector(".weather-icon");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".windspeed");

const KEY = "0dccbc3ef4e858ef330d82420c1fbcc0";

function updateDetails(data) {
	temperature.innerHTML = `${Math.floor(data.main.temp)}°C`;
	city.textContent = data.name;
	weatherIcon.src = `images/${data.weather[0].main}.png`;
	humidity.textContent = `${data.main.humidity}%`;
	wind.textContent = `${Math.floor(data.wind.speed)} Km/hr`;
}

search.addEventListener("click", function (evnt) {
	const cityName = document.querySelector(".cityName").value;
	document.querySelector(".cityName").value = "";

	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}&units=metric`;
	const promise = fetch(URL);
	promise
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			updateDetails(data);
		})
		.catch(function (err) {
			console.log(err);
		});
});
