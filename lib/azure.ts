import { TextAnalyticsClient, AzureKeyCredential } from "@azure/ai-text-analytics";
import { TableClient } from "@azure/data-tables";

const endpoint = process.env.AZURE_LANGUAGE_ENDPOINT!;
const apiKey = process.env.AZURE_LANGUAGE_KEY!;
const storageConnStr = process.env.AZURE_STORAGE_CONNECTION_STRING!;

export function getLanguageClient() {
  return new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));
}

export function getTableClient() {
  return TableClient.fromConnectionString(storageConnStr, "feedback");
}
