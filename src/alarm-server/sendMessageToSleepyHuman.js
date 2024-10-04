import { ALARM_TOPIC } from "../../constants.js";
import { sendToProducer } from "../helpers/producer.js";

export const sendMessageToSleepyHuman = async (lastHumanResponse) => {
  const wakeUpMessageBody = [{ value: "wake_up" }];

  if (lastHumanResponse === "no" || lastHumanResponse === "") {
    sendToProducer(ALARM_TOPIC, wakeUpMessageBody);
  }
  if (lastHumanResponse === "snooze") {
    setTimeout(() => sendToProducer(ALARM_TOPIC, wakeUpMessageBody), 5000);
  }
};

export const sendInitialMessageToSleepyHuman = async (req, res) => {
  try {
    sendMessageToSleepyHuman("");

    res.status(200).json({
      message: "Message successfully sent to sleepy human",
    });
  } catch (error) {
    console.log(error);
  }
};
