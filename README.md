# POC for RabbitMQ (amqplib/callback_api)

POC for RabbitMQ on node.We use docker-compose build dockerfile for each service (sender and receiver)

### Installing

```bash
docker-compose up
```

### Issue

This project have to wait 30s for starting RabbitMQ image :Each service will fail.
