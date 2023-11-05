import { Client, PrivateKey, AccountCreateTransaction, AccountBalanceQuery, Hbar } from "@hashgraph/sdk";
import dotenv from "dotenv";
dotenv.config();
export default async function getClient() {
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;
    const client = Client.forTestnet();
    client.setOperator(myAccountId, myPrivateKey);
    return client;
}