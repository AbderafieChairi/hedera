import { TopicMessageSubmitTransaction } from "@hashgraph/sdk";





export default async function sendMessage(client,topicId, message) {
    // Send message to the topic
    let sendResponse = await new TopicMessageSubmitTransaction({
        topicId: topicId,
        message: message,
    }).execute(client);
    // Get the receipt of the transaction
    const getReceipt = await sendResponse.getReceipt(client);

    // Get the status of the transaction
    const transactionStatus = getReceipt.status
    console.log("The message transaction status " + transactionStatus.toString())
}