import express from "express";

const appAlarm = express();

appAlarm.get("/initial-wake-up", (req, res) => {
  res.send("GET Request Called");
});

appAlarm.listen(8000, () => {
  console.log(`Alarm server is running on port 8000.`);
});
