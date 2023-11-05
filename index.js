import sendMessage from "./Consensus/sendMessage.js";
import getClient from "./client.js";
import dotenv from "dotenv";
dotenv.config();
async function main() {
  const client = await getClient();
  const myAccountId = process.env.MY_ACCOUNT_ID;
  const otherAccountId = process.env.OTHER_ACCOUNT_ID;
  const topicId = process.env.TOPIC_ID;
  sendMessage(client, topicId, "Jamal");
  return 0;
}
main();