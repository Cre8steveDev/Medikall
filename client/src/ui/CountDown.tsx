import React, { useState, useEffect } from 'react';

interface CountDownProps {
  number: number;
  numberLettering: string;
  subtitle: string;
}

const CountDown: React.FC<CountDownProps> = ({
  number,
  numberLettering,
  subtitle,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < number) {
        setCount((prevCount) => prevCount + 3);
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [count, number]);

  return (
    <div className="bg-white md:bg-transparent max-w-fit p-3 rounded-xl flex flex-col justify-center">
      <p className="text-lg  md:text-3xl font-black text-gray-700">
        {count}
        {numberLettering}
      </p>
      <p className="text-xs md:text-[14px] md:font-bold text-gray-500">
        {subtitle}
      </p>
    </div>
  );
};

export default CountDown;
