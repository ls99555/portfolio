'use client';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { CloudIcon, MapPinIcon, ThermometerIcon } from 'lucide-react';
import { DateTime } from 'luxon';
import Button from '../../button';
import styles from './weather-widget.module.scss';

interface WeatherData {
  temperature: number;
  description: string;
  location: string;
  unit: string;
  tz_id?: string;
}

// Custom hook to check if we're on the client
function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
}

export default function WeatherWidget() {
  const [location, setLocation] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [timezone, setTimezone] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isClient = useIsClient();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedLocation = location.trim();
    if (trimmedLocation === '') {
      setError('Please enter a valid location.');
      setWeather(null);
      setTimezone(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      if (!apiKey) throw new Error('API key is missing.');
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
          trimmedLocation,
        )}`,
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      const weatherData: WeatherData = {
        temperature: data.current.temp_c,
        description: data.current.condition.text,
        location: data.location.name,
        unit: 'C',
        tz_id: data.location.tz_id,
      };
      setWeather(weatherData);
      setTimezone(data.location.tz_id);
    } catch (error) {
      setError('City not found. Please try again.');
      setWeather(null);
      setTimezone(null);
    } finally {
      setIsLoading(false);
    }
  };

  function getTemperatureMessage(temperature: number, unit: string): string {
    if (unit === 'C') {
      if (temperature < 0) return `It's freezing at ${temperature}°C! Bundle up!`;
      if (temperature < 10) return `It's quite cold at ${temperature}°C. Wear warm clothes.`;
      if (temperature < 20)
        return `The temperature is ${temperature}°C. Comfortable for a light jacket.`;
      if (temperature < 30) return `It's a pleasant ${temperature}°C. Enjoy the nice weather!`;
      return `It's hot at ${temperature}°C. Stay hydrated!`;
    }
    return `${temperature}°${unit}`;
  }

  function getWeatherMessage(description: string): string {
    switch (description.toLowerCase()) {
      case 'sunny':
        return 'It’s a beautiful sunny day!';
      case 'partly cloudy':
        return 'Expect some clouds and sunshine.';
      case 'cloudy':
        return 'It’s cloudy today.';
      case 'overcast':
        return 'The sky is overcast.';
      case 'rain':
        return 'Don’t forget your umbrella! It’s raining.';
      case 'thunderstorm':
        return 'Thunderstorms are expected today.';
      case 'snow':
        return 'Bundle up! It’s snowing.';
      case 'mist':
        return 'It’s misty outside.';
      case 'fog':
        return 'Be careful, there’s fog outside.';
      default:
        return description;
    }
  }

  function getLocationMessage(location: string): string {
    const currentHour = new Date().getHours();
    const isNight = currentHour >= 18 || currentHour < 6;
    return ` ${location} ${isNight ? 'at Night' : 'During the Day'}`;
  }

  // Only render time/date on the client to avoid hydration mismatch
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    if (!isClient) return;
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, [isClient]);

  let timeString = '';
  let dateString = '';
  let timeLabel = '';

  if (isClient && now) {
    if (timezone && weather) {
      // Show city time
      const cityTime = DateTime.now().setZone(timezone);
      timeString = cityTime.toFormat('HH:mm:ss');
      dateString = cityTime.toFormat('cccc, d LLLL yyyy');
      timeLabel = `Time in ${weather.location}`;
    } else {
      // Show user local time
      timeString = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      dateString = DateTime.fromJSDate(now).toFormat('cccc d LLLL yyyy');
      timeLabel = 'Your Local Time';
    }
  }

  return (
    <section className={styles.weatherCard}>
      <div className={styles.clockContainer}>
        {isClient && now ? (
          <>
            <div className={styles.time}>{timeString}</div>
            <div className={styles.date}>{dateString}</div>
            <div className={styles.timeLabel}>{timeLabel}</div>
          </>
        ) : (
          <div className={styles.timeLabel}>Loading time...</div>
        )}
      </div>
      <p className={styles.description}>Search for the current weather conditions in your city.</p>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter a city name"
          value={location}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </Button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
      {weather && (
        <div className={styles.weatherInfo}>
          <div className={styles.weatherRow}>
            <ThermometerIcon className={styles.icon} />
            {getTemperatureMessage(weather.temperature, weather.unit)}
          </div>
          <div className={styles.weatherRow}>
            <CloudIcon className={styles.icon} />
            <div>{getWeatherMessage(weather.description)}</div>
          </div>
          <div className={styles.weatherRow}>
            <MapPinIcon className={styles.icon} />
            <div>{getLocationMessage(weather.location)}</div>
          </div>
        </div>
      )}
    </section>
  );
}
