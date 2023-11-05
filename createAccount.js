import {  PrivateKey, AccountCreateTransaction, AccountBalanceQuery, Hbar } from "@hashgraph/sdk";
import getClient from "./client.js";
export default async function createAccount() {
    console.log("create an account !!!!!!")
    const client = await getClient();
    //Create new keys
    const newAccountPrivateKey = PrivateKey.generateED25519();
    const newAccountPublicKey = newAccountPrivateKey.publicKey;

    //Create a new account with 1,000 tinybar starting balance
    const newAccount = await new AccountCreateTransaction()
      .setKey(newAccountPublicKey)
      .setInitialBalance(Hbar.from(1000))
      .execute(client);
  
    // Get the new account ID
    const getReceipt = await newAccount.getReceipt(client);
    const newAccountId = getReceipt.accountId;
  
    console.log("The new account ID is: " + newAccountId);
    console.log("New private Key: ", newAccountPrivateKey.toString());
  
    //Verify the account balance
    const accountBalance = await new AccountBalanceQuery()
      .setAccountId(newAccountId)
      .execute(client);
  
    console.log("The new account balance is: " + accountBalance.hbars.toString());
  
    return newAccountId;
  }