import { AccountBalanceQuery } from "@hashgraph/sdk";





export default async function getBalance(accountId,client) {
    const getNewBalance = await new AccountBalanceQuery()
    .setAccountId(accountId)
    .execute(client);
    return getNewBalance.hbars.toTinybars();
}