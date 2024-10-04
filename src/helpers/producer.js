import { kafka } from "../kafka-config.js";

export const sendToProducer = async (topic, messages) => {
  const producer = kafka.producer();

  try {
    await producer.connect();
    await producer.send({
      topic: topic,
      messages: messages,
    });
  } catch (error) {
    console.error(error);
  } finally {
    await producer.disconnect();
  }
};
