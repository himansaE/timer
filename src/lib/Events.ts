interface Event {
  name: string;
  time: Date;
}

const EVENTS: Event[] = [
  {
    name: "Snack time",
    time: new Date("Wed Oct 29 2025 03:49:00 GMT+0530 (India Standard Time)"),
  },
  {
    name: "Start Hackethon",
    time: new Date("Wed Oct 29 2025 03:50:08 GMT+0530 (India Standard Time)"),
  },
  {
    name: "Snack Time",
    time: new Date("Wed Oct 30 2025 03:51:08 GMT+0530 (India Standard Time)"),
  },
];
export default EVENTS;
