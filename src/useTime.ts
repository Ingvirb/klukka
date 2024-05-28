import { useEffect, useState } from "react";

export default function useTime() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.getHours();
      date.getMinutes();
      date.getSeconds();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
}
