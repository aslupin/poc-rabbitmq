const amqp = require("amqplib/callback_api");
const host = "rabbitmq:5672";
const credential = "guest:guest";
const server = `amqp://${credential}@${host}`;

amqp.connect(server, (err, connection) => {
  connection.createChannel((err, channel) => {
    const queue = "poc";
    channel.assertQueue(queue, { duarable: false });
    let count = 0;
    setInterval(() => {
      count += 1;
      channel.sendToQueue(queue, new Buffer(`counter : ${count}`));
      console.log(`Sent : counter : ${count}`);
    }, 750);

    // setTimeout(() => {
    //   connection.close();
    //   process.exit(0);
    // }, 500);
  });
});
