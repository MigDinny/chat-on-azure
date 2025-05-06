const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const container = client.database("chatdb").container("messages");

module.exports = async function (context, req) {
  const { resources: messages } = await container.items
    .query("SELECT * FROM c ORDER BY c.timestamp DESC OFFSET 0 LIMIT 50")
    .fetchAll();

  context.res = {
    status: 200,
    body: messages
  };
};