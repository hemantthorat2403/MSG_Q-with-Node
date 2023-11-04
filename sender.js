const amqp = require('amqplib/callback_api');

// 1. Create Connection
amqp.connect('amqp://localhost', (connError, connection) =>{
    if(connError){
        throw connError;
    }
    // 2. Create Channel
    connection.createChannel((channelError, channel) => {
        if(channelError){
            throw channelError;
        }

        // 3. Create or assert Queue 
        const QUEUE = 'codingpractice';
        channel.assertQueue(QUEUE);

        // 4. Send message to Q.
        channel.sendToQueue(QUEUE, Buffer.from('Hello and wlc my friend!'));
        console.log(`Message Send ${QUEUE}`);
    })
})