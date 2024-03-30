exports.handler = async (event, context) => {
    // Log the received event
    console.log('Received event:', JSON.stringify(event, null, 2));
    


    // Return a successful response
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello,STA_2  Chenxi Chen!' })
    };
};
