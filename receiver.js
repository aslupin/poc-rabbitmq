const amqp = require("amqplib/callback_api");
const host = "rabbitmq:5672";
const credential = "guest:guest";
const server = `amqp://${credential}@${host}`;

amqp.connect(server, (err, connection) => {
  connection.createChannel((err, channel) => {
    const queue = "poc";
    channel.assertQueue(queue, { duarable: false });
    console.log("waiting msg");
    channel.consume(
      queue,
      (msg) => {
        console.log(`Received : ${msg.content.toString()}`);
      },
      { noAck: true }
    );

    // setTimeout(() => {
    //   connection.close();
    //   process.exit(0);
    // }, 500);
  });
});
