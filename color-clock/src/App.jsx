import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="clock-card">
        <h1>Color Clock</h1>

        <h2>
          {format(currentTime, "hh:mm:ss a")}
        </h2>

        <p>
          {format(currentTime, "EEEE, MMMM do yyyy")}
        </p>
      </div>
    </div>
  );
}

export default App;