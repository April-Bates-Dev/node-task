import express from "express";
import { getConsumerWithSubscription } from "../helpers/consumer.js";
import bodyParser from "body-parser";
import {
  sendInitialMessageToSleepyHuman,
  sendMessageToSleepyHuman,
} from "./sendMessageToSleepyHuman.js";
import { SLEEPY_HUMAN_TOPIC } from "../../constants.js";

const appAlarm = express();
const jsonParser = bodyParser.json();

const alarmConsumer = await getConsumerWithSubscription(
  SLEEPY_HUMAN_TOPIC,
  "SLEEPY_HUMAN_MESSAGES_GROUP"
);

await alarmConsumer.run({
  eachMessage: async ({ message: message }) => {
    const value = message.value.toString();
    console.log(
      "⏰ The alarm has received a message : ",
      message.value.toString()
    );
    sendMessageToSleepyHuman(value);
  },
});

appAlarm.post("/initial-wake-up", jsonParser, sendInitialMessageToSleepyHuman);

appAlarm.listen(8000, () => {
  console.log(`Alarm server is running on port 8000.`);
});
