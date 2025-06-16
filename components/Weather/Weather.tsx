import { weatherData } from "@/service/weather.service";

const Weather = async () => {
  const weatherResponse = await weatherData();

  let weatherIcon: string;
  if (
    weatherResponse.weather[0].id >= 200 &&
    weatherResponse.weather[0].id < 300
  ) {
    weatherIcon = "⛈️";
  } else if (
    weatherResponse.weather[0].id >= 300 &&
    weatherResponse.weather[0].id < 600
  ) {
    weatherIcon = "🌧️";
  } else if (
    weatherResponse.weather[0].id >= 600 &&
    weatherResponse.weather[0].id < 700
  ) {
    weatherIcon = "❄️";
  } else if (
    weatherResponse.weather[0].id >= 700 &&
    weatherResponse.weather[0].id < 800
  ) {
    weatherIcon = "🌫️";
  } else if (weatherResponse.weather[0].id === 800) {
    weatherIcon = "☀️";
  } else if (weatherResponse.weather[0].id > 800) {
    weatherIcon = "☁️";
  } else {
    weatherIcon = "❓";
  }

  return (
    <aside className="fixed right-2 top-16 z-10 text-right text-xs">
      <div className="flex items-center gap-1">
        <p>서울: {(weatherResponse.main.temp - 273.15).toFixed(2)}°C</p>
        <p className="text-lg drop-shadow-md">{weatherIcon}</p>
        <p>
          {weatherResponse.weather[0].description} ({" "}
          {weatherResponse.weather[0].main} )
        </p>
      </div>
    </aside>
  );
};

export default Weather;
