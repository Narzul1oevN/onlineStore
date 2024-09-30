import React, { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    useEffect(() => {
      const startDate = new Date("2024-09-28T00:00:00").getTime();
  
      const countdown = setInterval(() => {
        const now = new Date().getTime();
        const difference = now - startDate;
  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        setTime({ days, hours, minutes, seconds });
      }, 1000);
  
      return () => clearInterval(countdown);
    }, []);

  return (
    <div className="w-[80%] m-auto flex flex-wrap gap-[40px] items-center">
      <h1 className="text-[48px] font-[700]">Flash Sales</h1>
      <div className="flex items-center gap-[20px]">
        <div className="flex flex-col items-start ">
          <p className="text-[12px] font-[700]">Day</p>
          <p className="text-[32px] font-[700] mt-[-10px]">
            {time.days} <span className="text-[32px] text-[#E07575]">:</span>
          </p>
        </div>

        <div className="flex flex-col items-start ">
          <p className="text-[12px] font-[700]">Hours</p>
          <p className="text-[32px] font-[700] mt-[-10px]">
            {time.hours} <span className="text-[32px] text-[#E07575]">:</span>
          </p>
        </div>

        <div className="flex flex-col items-start ">
          <p className="text-[12px] font-[700]">Minutes</p>
          <p className="text-[32px] font-[700] mt-[-10px]">
            {time.minutes} <span className="text-[32px] text-[#E07575]">:</span>
          </p>
        </div>
        <div className="flex flex-col items-start ">
          <p className="text-[12px] font-[700]">Seconds</p>
          <p className="text-[32px] font-[700] mt-[-10px]">{time.seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
