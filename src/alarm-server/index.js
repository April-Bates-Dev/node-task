import express from "express";
import bodyParser from "body-parser";
import { sendInitialMessageToSleepyHuman } from "./sendMessageToSleepyHuman.js";

const appAlarm = express();
const jsonParser = bodyParser.json();

appAlarm.post("/initial-wake-up", jsonParser, sendInitialMessageToSleepyHuman);

appAlarm.listen(8000, () => {
  console.log(`Alarm server is running on port 8000.`);
});
