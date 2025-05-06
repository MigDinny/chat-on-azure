# chat-on-azure
This project is a simple chat made by GPT o4-mini-high after a few prompts.

The goal of this chat is to be part of an Azure deployment, for learning purposes.

# 💬 Chat App on Azure

This is a simple real-time-style chat app deployed using **Azure Static Web Apps**, **Azure Functions**, and **Cosmos DB**.

## How to Run API

### Make sure you have these env vars (can be in .env)
COSMOS_ENDPOINT=<your-local-or-cloud-endpoint>
COSMOS_KEY=<your-key>

### Install dependencies
npm install

### Run the Azure Functions locally
func start

## How to Run Frontend

### Install dependencies
npm install

### Start the dev server
npm start


## 🚀 Architecture

- **Frontend**: React (or any static web app), deployed with [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static)
- **API**: Serverless functions (Node.js) using [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/)
- **Database**: [Azure Cosmos DB](https://azure.microsoft.com/en-us/products/cosmos-db/) (SQL API)

## 📁 Project Structure

my-chat-app/
├── frontend/ # React app (or static HTML/JS)
├── api/ # Azure Functions (GetMessages / PostMessage)
├── openapi.yaml # (Optional) API definition
└── README.md