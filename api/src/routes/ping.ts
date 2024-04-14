/* eslint-disable import/prefer-default-export */
import { Request, Response } from '@scloud/lambda-api/dist/types';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'; //cc
import { DynamoDBDocumentClient, GetCommand} from '@aws-sdk/lib-dynamodb';//cc

// export async function ping(request: Request): Promise<Response> {
//   console.log('ping', request.query);
//   return {
//     statusCode: 200,
//     body: { message: 'pong' },
//   };
// }

// Initialize DynamoDB Document Client
const ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export async function ping(request: Request): Promise<Response> {
  console.log('ping', request.query);



  // Retrieve item from DynamoDB
  try {
    const { itemId } = request.query; // Assuming itemId is present in the request query

    // Specify the parameters for the GetCommand
    const params = {
      TableName: 'cc1Table', // Name of your DynamoDB table
      Key: {
        itemId: '1', // Specify the partition key
        date: '01/01', // Specify the sort key
      },
    };

    // Send the GetCommand to DynamoDB and await the result
    const { Item } = await ddbDocClient.send(new GetCommand(params));

    // Return response based on whether the item was found or not
    if (Item) {
      return {
        statusCode: 200,
        body: { message: 'Item retrieved successfully', item: Item },
      };
    } else {
      return {
        statusCode: 404,
        body: { message: 'Item not found' },
      };
    }
  } catch (error) {
    console.error('Error retrieving item:', error);
    return {
      statusCode: 500,
      body: { message: 'Internal server error' },
    };
  }
}