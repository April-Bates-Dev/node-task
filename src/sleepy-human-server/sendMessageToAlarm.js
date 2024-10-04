import { SLEEPY_HUMAN_TOPIC } from "../../constants.js";
import { sendToProducer } from "../helpers/producer.js";

export const sendMessageToAlarm = async () => {
  const message = Math.random() < 0.5 ? "no" : "snooze";
  await sendToProducer(SLEEPY_HUMAN_TOPIC, [{ value: message }]);
};
