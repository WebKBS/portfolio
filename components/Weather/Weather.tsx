"use server";

import { revalidatePath } from "next/cache";

const weatherdata = async () => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=37.5642135&lon=127.0016985&lang=kr&appid=${process.env.WEATHER_API_KEY}`,

      { next: { revalidate: 60 } }, // 1분마다 새로고침
    );

    if (!res.ok) {
      throw new Error("날씨 데이터 가져오기 실패");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("날씨 fetch error: ", error);
    throw error;
  }
};

const Weather = async () => {
  const data = await weatherdata();

  let weatherIcon = "";
  if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
    weatherIcon = "⛈️";
  } else if (data.weather[0].id >= 300 && data.weather[0].id < 600) {
    weatherIcon = "🌧️";
  } else if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
    weatherIcon = "❄️";
  } else if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
    weatherIcon = "🌫️";
  } else if (data.weather[0].id === 800) {
    weatherIcon = "☀️";
  } else if (data.weather[0].id > 800) {
    weatherIcon = "☁️";
  } else {
    weatherIcon = "❓";
  }

  revalidatePath("/");

  return (
    <aside className="fixed right-2  top-16 z-10 text-right text-xs">
      <div className="flex items-center gap-1">
        <p>서울: {(data.main.temp - 273.15).toFixed(2)}°C</p>
        <p className="text-lg drop-shadow-md">{weatherIcon}</p>
        <p>
          {data.weather[0].description} ( {data.weather[0].main} )
        </p>
      </div>
    </aside>
  );
};

export default Weather;
