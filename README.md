# POC for RabbitMQ (amqplib/callback_api)

POC for RabbitMQ on node.We use docker-compose build dockerfile for each service (sender and receiver)

### Installing

```bash
docker-compose up
```

### Management Page

http://localhost:15672

### Issue

This project have to wait 30s for starting RabbitMQ image:Each service will fail, Dont care it :) .
