import { ALARM_TOPIC } from "../../constants.js";
import { sendToProducer } from "../helpers/producer.js";

export const sendMessageToSleepyHuman = async () => {
  const wakeUpMessageBody = [{ value: "wake_up" }];
  sendToProducer(ALARM_TOPIC, wakeUpMessageBody);
};

export const sendInitialMessageToSleepyHuman = async (req, res) => {
  try {
    sendMessageToSleepyHuman();

    res.status(200).json({
      message: "Message successfully sent to sleepy human",
    });
  } catch (error) {
    console.log(error);
  }
};
