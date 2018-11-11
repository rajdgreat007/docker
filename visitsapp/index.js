var express = require("express");
var redis = require("redis");
var app = express();
var client = redis.createClient({
    host: 'redis-server', //this refers to service name in docker-compolse.yml
    port: 6379
});
client.set('visits', 0);

app.listen(3003, () => {
    console.log('server running at port 3003')
});

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('No. of visits : ' + visits);
        client.set('visits', parseInt(visits) + 1)
    })
});