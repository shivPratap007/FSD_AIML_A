import {  useState } from "react";
import { Link } from "react-router-dom";

export default function Stopwatch() {
  const [timer, setTimer] = useState(0);
  let liveTimer: any;

  function startwatch(currentTime: number) {
    liveTimer = setInterval(() => {
      setTimer(currentTime++);
    }, 1000);
  }

  function stopthewatch() {
    clearInterval(liveTimer);
  }

  function secondsToTime(secs: number) {
    const hours = Math.floor(secs / (60 * 60));

    const divisor_for_minutes = secs % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);

    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = Math.ceil(divisor_for_seconds);

    const obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return `${obj.h}:${obj.m}:${obj.s}`;
  }

  return (
    <>
      <div>Stopwatch {secondsToTime(timer)}</div>
      <div>
        <button onClick={() => startwatch(timer)}>Start</button>
        <button onClick={() => stopthewatch()}>Stop</button>
        <button onClick={() => {
          stopthewatch();
          setTimer(0);
        }}>Reset</button>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
