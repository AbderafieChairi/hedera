import { Hbar, TransactionReceipt, TransferTransaction } from "@hashgraph/sdk";



/**
 * Transfers Hbar from one account to another.
 *
 * @param {string} senderAccountId - The ID of the account sending Hbar.
 * @param {string} receiverAccountId - The ID of the account receiving Hbar.
 * @param {object} client - The client object used to interact with the network.
 * @return {Promise<TransactionReceipt>} - A promise that resolves when the transfer is complete.
 */
export default async function transferHbar(senderAccountId,receiverAccountId,client) {

    const sendHbar = await new TransferTransaction()
    .addHbarTransfer(senderAccountId, Hbar.fromTinybars(-1000)) //Sending account
    .addHbarTransfer(receiverAccountId, Hbar.fromTinybars(1000)) //Receiving account
    .execute(client);

    //Verify the transaction reached consensus
    const transactionReceipt = await sendHbar.getReceipt(client);
    console.log("The transfer transaction from my account to the new account was: " + transactionReceipt.status.toString());
    return transactionReceipt;
}