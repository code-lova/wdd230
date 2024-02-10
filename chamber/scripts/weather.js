 // Your OpenWeatherMap API key
 const apiKey = 'dfb9af55f4b2734878203a9ee744d880';
 // Chamber location coordinates
 const latitude = '6.34';
 const longitude = '5.59';

 // Function to fetch weather data
 async function fetchWeatherData() {
     try {
         // Fetch current weather data
         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
         const currentWeatherData = await response.json();

         // Fetch three-day forecast data
         const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
         const forecastData = await forecastResponse.json();
         //console.log(forecastData);

         // Extract required information
         const currentTemperature = currentWeatherData.main.temp;
         const currentWeatherDescription = currentWeatherData.weather[0].description;
         const threeDayForecast = forecastData.list.slice(0, 8 * 2); // Get first 3 days (3 * 8 data points per day)

         


         // Display weather information
         const weatherInfoContainer = document.getElementById('weather-info');
         weatherInfoContainer.innerHTML = `
             <p>Current Temperature: ${currentTemperature}&#8451;</p>
             <p>Description: ${currentWeatherDescription}</p>
             <h2>Three Day Forecast:</h2>
             <p>${forecastData.city.name}, ${forecastData.city.country}</p>
             <p>
                 ${threeDayForecast.map(item => `<p>Date:${item.dt_txt}  Temp:${item.main.temp} &#8451; Description:${item.weather[0].description} </p>`).join('')}
             </p>
         `;
     } catch (error) {
         console.error('Error fetching weather data:', error);
     }
 }

 // Fetch weather data on page load
 fetchWeatherData();





  // Get the button and div elements
  const toggleButton = document.getElementById('weather-show');
  const container = document.getElementById('weather-info');

  // Hide the container on page load
  container.style.display = 'none';

  // Add event listener to the button
  toggleButton.addEventListener('click', function() {
      // Toggle the visibility of the div container
      if (container.style.display === 'none') {
          container.style.display = 'block'; // Show the div
          toggleButton.innerHTML = "Hide Weather Info";
      } else {
          container.style.display = 'none'; // Hide the div
          toggleButton.innerHTML = "Show Weather Info";

      }
  });

