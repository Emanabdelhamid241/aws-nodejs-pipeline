const express= require("express");
// const mongoose = require('mongoose');
const redis = require('redis');


const PORT=process.env.PORT || 5000;
const app=express();

// const DB_USER = 'root';
// const DB_PASSWORD = 'example';
// const DB_PORT = 27017;
// const DB_HOST = 'mongo';

// const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
// mongoose
//   .connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/test`)
//   .then(() => console.log('connected to db...'))
//   .catch((err) => console.log('failed to connect to db: ', err));

// const DB_USER= 'root';
// const DB_PASS= 'example';
// const DB_PORT= 27017;
// const DB_HOST= '172.20.0.2';
// // const DB_HOST= 'mongo';

// const useNewUrlParser = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}`;
// mongoose.connect(useNewUrlParser).then(() => console.log("connect")).catch((err) => console.log("failed",err));

 
const REDIS_HOST= 'redis';
const REDIS_PORT= 6379;
const client = redis.createClient({url: `redis://${REDIS_HOST}:${REDIS_PORT}`});
client.on('error', err => console.log('Redis Client Error', err));
client.connect();

// app.get('/',(req,res)=>res.send('<h1>hello eman pp </h1>'));

app.get('/', (req, res) => {
    client.set('products', 'products...');
    res.send('<h1>hello eman pp </h1>');
  });
  
  app.get('/data', async (req, res) => {
    const products = await client.get('products');
    res.send(`<h1> Hello !</h1> <h2>${products}</h2>`);
  });



app.listen(PORT,()=> console.log(`app running ${PORT}`));