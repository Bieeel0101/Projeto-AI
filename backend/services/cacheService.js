import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE = "SmartFetchCache";

export async function getFromCache(key) {
  const res = await dynamo
    .get({ TableName: TABLE, Key: { id: key } })
    .promise();
  return res.Item;
}

export async function saveToCache(key, data) {
  await dynamo
    .put({
      TableName: TABLE,
      Item: {
        id: key,
        data,
        timestamp: Date.now(),
      },
    })
    .promise();
}
