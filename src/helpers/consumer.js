import { kafka } from "../kafka-config.js";

export const getConsumerWithSubscription = async (topic, groupId) => {
  try {
    const consumer = kafka.consumer({ groupId });
    await consumer.connect();
    await consumer.subscribe({
      topics: [topic],
      fromBeginning: true,
    });
    return consumer;
  } catch (error) {
    console.error(error);
  }
};
