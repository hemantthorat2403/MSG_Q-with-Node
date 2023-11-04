const amqp = require('amqplib/callback_api');

// 1. create connection
amqp.connect('amqp://localhost', (connError, connection) =>{
    if(connError){
        throw connError;
    }
    // 2. create channel
    connection.createChannel((channelError, channel) =>{
        if(channelError){
            throw channelError;
        }
         // 3. Create or assert Queue 
         const QUEUE = 'codingpractice';
         channel.assertQueue(QUEUE); 

         // 4. Recieve msg
          channel.consume(QUEUE, (msg) =>{
            console.log(`Message Recieved : ${msg.content.toString()}`);
          }, {
            noAck: true
          })
    })
})