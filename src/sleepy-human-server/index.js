import { sendMessageToAlarm } from "./sendMessageToAlarm.js";
import { getConsumerWithSubscription } from "../helpers/consumer.js";
import { ALARM_TOPIC } from "../../constants.js";

const humanConsumer = await getConsumerWithSubscription(
  ALARM_TOPIC,
  "ALARM_MESSAGES_GROUP"
);

await humanConsumer.run({
  eachMessage: async ({ message: message }) => {
    const value = message.value.toString();
    console.log("🙋‍♂️ The sleepy human has received a message : ", value);
    if (value === "wake_up") sendMessageToAlarm();
  },
});
