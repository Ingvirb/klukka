import { useEffect, useState } from "react";

export default function useTime() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setHours((date.getHours() % 12) * 30 + date.getMinutes() * 0.5); // 360 degrees / 12 hours + offset based on minutes
      setMinutes(date.getMinutes() * 6 + date.getSeconds() * 0.1); // 360 degrees / 60 minutes + offset based on seconds
      setSeconds(date.getSeconds() * 6); // 360 degrees / 60 seconds
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { hours, minutes, seconds };
}
