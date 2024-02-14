'use server';

import Image from 'next/image';
import styles from './Weather.module.css';

const weatherdata = async () => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=37.5642135&lon=127.0016985&lang=kr&appid=${process.env.WEATHER_API_KEY}`,

      { next: { revalidate: 60 * 30 } } // 30분마다 캐시 갱신
    );

    if (!res.ok) {
      throw new Error('날씨 데이터 가져오기 실패');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('날씨 fetch error: ', error);
    throw error;
  }
};

const Weather = async () => {
  const data = await weatherdata();
  console.log(data.weather[0]);

  return (
    <div className="flex gap-2 items-center text-xs">
      <p>날씨:</p>
      <div className="flex items-center">
        <p>
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather icon"
            width={36}
            height={36}
            className={styles.filter}
          />
        </p>
        <p>
          {data.weather[0].description} ( {data.weather[0].main} )
        </p>
      </div>
    </div>
  );
};

export default Weather;
