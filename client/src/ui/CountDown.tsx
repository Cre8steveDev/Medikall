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
    <div className="bg-white max-w-fit p-3 rounded-xl">
      <p className="text-3xl font-black text-gray-700">
        {count}
        {numberLettering}
      </p>
      <p className="text-[14px] font-bold text-gray-500">{subtitle}</p>
    </div>
  );
};

export default CountDown;
