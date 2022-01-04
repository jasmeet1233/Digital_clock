import { useState, useEffect } from "react";

function App() {
  const [hourType, setHourType] = useState(12);
  const [time, setTime] = useState({ 12: formatAMPM(new Date()) , 24: format24()});

  function formatAMPM (date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return strTime;
  };

  function format24 () {
    var date = new Date();
    return date.toLocaleString("en-GB").split(", ")[1];
  };

  const updateTime = () => {
    setTime({ 12: formatAMPM(new Date()), 24: format24() });
  }

  useEffect(() => {
    setInterval(() => {
     updateTime();
    }, 1000)
  }, [])

  return (
    <div className="App">
      {hourType === 12 ? <div>{time[12]}</div> : <div>{time[24]}</div>}
      <button onClick={() => setHourType(12)}>12 Hour</button>
      <button onClick={() => setHourType(24)}>24 Hour</button>
    </div>
  );
}

export default App;
