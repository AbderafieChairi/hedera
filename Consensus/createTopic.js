import { TopicCreateTransaction } from "@hashgraph/sdk";

export default async function createTopic (client){
    let txResponse = await new TopicCreateTransaction().execute(client);
    // Grab the newly generated topic ID
    let receipt = await txResponse.getReceipt(client);
    let topicId = receipt.topicId;
    return topicId.toString()
}