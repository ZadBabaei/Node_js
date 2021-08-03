const Joi = require('joi');
const express = require('express');
const app = express();
const genres= require('./routs/genres')
const home=require('./routs/home');

app.use(express.json());
app.use('/api/genres',genres)
app.use ('/',home)



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));