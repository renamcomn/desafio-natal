import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC<{ minutes: number; seconds: number, acertou: boolean }> = ({ minutes, seconds, acertou }) => {
  const [time, setTime] = useState({ minutes, seconds });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> = 0

    if (time.minutes > 0 || time.seconds > 0) {
      timer = setInterval(() => {
        if (time.seconds === 0) {
          if (time.minutes === 0) {
            clearInterval(timer);
          } else {
            setTime({ minutes: time.minutes - 1, seconds: 59 });
          }
        } else {
          setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
        }
      }, 1000);
    }

    if(acertou) clearInterval(timer)

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <h1>
        {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </h1>
    </div>
  );
};

export default CountdownTimer;
