const { CosmosClient } = require("@azure/cosmos");
const crypto = require("crypto");

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const container = client.database("chatdb").container("messages");

module.exports = async function (context, req) {
  const { name, text } = req.body || {};
  if (!name || !text) {
    context.res = {
      status: 400,
      body: { error: "Missing name or text" }
    };
    return;
  }

  const newMessage = {
    id: crypto.randomUUID(),
    name,
    text,
    timestamp: new Date().toISOString()
  };

  await container.items.create(newMessage);

  context.res = {
    status: 201,
    body: newMessage
  };
};