import { useEffect, useState } from "react";
import EVENTS from "../lib/Events";
import getTime from "../lib/getTime";

var lastIndex = 0;
const Timer = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [next_name, setNextName] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = EVENTS.map((i) => {
        if (i.time.getTime() > new Date().getTime()) return i.time;
        return undefined;
      });
      lastIndex = time.findIndex((i) => i !== undefined);
      setTime(lastIndex === -1 ? "" : getTime(EVENTS[lastIndex].time));
      setName(lastIndex === -1 ? "Event Ended." : EVENTS[lastIndex].name);
      setNextName(
        lastIndex === EVENTS.length - 1 || lastIndex === -1
          ? "end of the Event."
          : EVENTS[lastIndex + 1].name
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="timer">
      <h3 className="small_head">Current Event</h3>
      <h1 className="head">{name}</h1>
      <div className="time">
        <div className="time_con">
          <div className="time_text">{time}</div>
          <div className="more">More to {next_name}</div>
        </div>
      </div>
    </div>
  );
};
export default Timer;
