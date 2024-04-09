import { useState, useEffect, useRef } from "react";
import "./CountDown.css";

export const CountDown = () => {
  const timer = [
    {
      className: "days",
      label: "Days",
    },
    {
      className: "hours",
      label: "Hours",
    },
    {
      className: "minutes",
      label: "Minutes",
    },
    {
      className: "seconds",
      label: "Seconds",
    },
  ];

  const [flipTrigger, setFlipTrigger] = useState("initial");
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const prevCountdownRef = useRef(null);

  useEffect(() => {
    const countToDate = new Date().setHours(new Date().getHours() + 240);
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
      const days = Math.floor(timeBetweenDates / (24 * 3600));
      const hours = Math.floor((timeBetweenDates / 3600) % 24);
      const minutes = Math.floor((timeBetweenDates / 60) % 60);
      const seconds = Math.floor(timeBetweenDates % 60);

      const newCountdown = {
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      };

      setCountdown(newCountdown);
      
      if (prevCountdownRef.current) {
        for (const key in newCountdown) {
          if (newCountdown[key] !== prevCountdownRef.current[key]) {
            setFlipTrigger(key);
            setTimeout(() => {
              setFlipTrigger(null);
            }, 500);
            break;
          }
        }
      }
      prevCountdownRef.current = newCountdown;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      {timer.map((element, index) => (
        <div key={index} className={`timer-card ${element.className}`}>
          <div className="timer">
            <div className="timer-display">
              <div className="timer-display__top">
                {countdown[element.className]}
              </div>
              <div className="timer-display__bottom">
                {countdown[element.className]}
              </div>

              <div
                className={
                  flipTrigger === "initial" || flipTrigger === element.className
                    ? "timer-overlay flip"
                    : "timer-overlay"
                }
              >
                <div className="timer-overlay__top">
                  {countdown[element.className]}
                </div>
                <div className="timer-overlay__bottom ">
                  {countdown[element.className]}
                </div>
              </div>
            </div>
          </div>
          <p className="timer-title">{element.label}</p>
        </div>
      ))}
    </div>
  );
};
