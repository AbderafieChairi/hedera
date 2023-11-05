import { TopicMessageQuery } from "@hashgraph/sdk";
import getClient from "../client.js";
import dotenv from "dotenv";
dotenv.config();



export default async function queryTopic (client, topicId) {
    console.log("Querying topic: " + topicId);
    new TopicMessageQuery()
    .setTopicId(topicId)
    .subscribe(client, null, (message) => {
    let messageAsString = Buffer.from(message.contents, "utf8").toString();
    console.log(
        `${message.consensusTimestamp.toDate()} Received: ${messageAsString}`
    );
    });
}

if (import.meta.url === import.meta.main) {

}

console.log("hhh")
const client = await getClient();
const topicId = process.env.TOPIC_ID;
await queryTopic(client, topicId);