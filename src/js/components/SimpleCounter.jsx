import React, { useState } from "react";
import { useEffect } from "react";

//create your first component
const SimpleCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Set up the interval
    const interval = setInterval(() => {
      setCounter((prevCount) => prevCount + 1); // Update state
    }, 1000); // Run every 1000 milliseconds (1 second)

    // Clean up the interval when the component unmounts or dependencies change
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures it runs only once on mount
  // Add dependencies if the interval needs to re-run when they change

  const getTime = () => {
    const hours = Math.floor(counter / 3600);
    const minutes = Math.floor((counter % 3600) / 60);
    const seconds = Math.floor(counter % 60);
    const h = hours < 10 ? "0" + hours : hours; //ternary????? (shorthand if/else)
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;
    return `${h} : ${m} : ${s}`; //string interpolation; using js variables inside of strings in html
  };

  return (
    <div>
      <h1>{getTime()}</h1>
    </div>
  );
};

export default SimpleCounter;
