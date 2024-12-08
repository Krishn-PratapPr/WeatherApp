// Get the input field and search button
const cityInput = document.getElementById('city');
const submitButton = document.getElementById('submit');

// Update the URL with the city input
let cityName = document.getElementById('cityName');
const options = { method: "GET" };

// Fetch data from the API
async function fetchWeatherData(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=60d64f31ff5b4c64818171902240612&q=${city}`;
  
  try {
    // Fetching data from the API
    const response = await fetch(url, options);
    const data = await response.json(); // WeatherAPI returns data in JSON format
    
    // Display the city name
    cityName.innerHTML = city; // Update the displayed city name

    // Logging the complete response data (for debugging)
    console.log(data);

    // Extracting specific weather data
    const temp_c = data.current.temp_c;
    const humidity = data.current.humidity;
    const feelslike_c = data.current.feelslike_c;
    const cloud = data.current.cloud;
    const wind_kph = data.current.wind_kph;
    const wind_degree = data.current.wind_degree;
    const pressure_in = data.current.pressure_in;
    const gust_kph = data.current.gust_kph;
    const description = data.current.condition.text;
    const temp_f = data.current.temp_f;
    const last_updated = data.current.last_updated;
    const location = data.location.region;
    const country = data.location.country;

    // Update the HTML with the fetched data
    document.getElementById("temp_c").innerHTML = ` ${temp_c} <sup>°C</sup>`;
    document.getElementById("humidity").innerText = `${humidity}`;
    document.getElementById("description").innerText = `${description}`;
    document.getElementById("feelslike_c").innerText = `${feelslike_c}`;
    document.getElementById("cloud").innerText = `${cloud}`;
    document.getElementById("wind_kph").innerText = `${wind_kph} kph`;
    document.getElementById("wind_degree").innerText = `${wind_degree}`;
    document.getElementById("pressure_in").innerText = `${pressure_in}`;
    document.getElementById("gust_kph").innerText = `${gust_kph}`;
    document.getElementById("gust_kph").innerText = `${gust_kph}`;
    document.getElementById("temp_f").innerText = `${temp_f}`;
    document.getElementById("last_updated").innerText = `${last_updated}`;
    document.getElementById("location").innerText = `${location}`;
    document.getElementById("country").innerText = `${country}`;

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Initial fetch for default city or when the page loads
fetchWeatherData("New Delhi");

// Event listener for the search button
submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  const city = cityInput.value; // Get the city name from the input field
  if (city) {
    fetchWeatherData(city); // Fetch weather for the entered city
  } else {
    alert("Please enter a city name.");
  }
});
// Toggle the navbar on hamburger click
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('nav-links').classList.toggle('active');
});
