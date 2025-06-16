"use server";
export const weatherData = async () => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=37.5642135&lon=127.0016985&lang=kr&appid=${process.env.WEATHER_API_KEY}`,
    );

    if (!res.ok) {
      throw new Error("날씨 데이터 가져오기 실패");
    }

    return await res.json();
  } catch (error) {
    console.error("날씨 fetch error: ", error);
    throw error;
  }
};
