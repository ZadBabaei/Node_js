const Joi= require('Joi');
const express = require("express");
require('dotenv').config();
const app = express();
const courses= require('./routs/courses');
const home= require('./routs/home');
const logger = require('./middleware/logger')

app.set('view engine','pug');
app.set('views','./views')

app.use(express.json());
app.use('/api/courses',courses);
app.use('/',home);


const port = process.env.PORT || 3000;




//   get method:



app.listen(port, () => console.log(`listening on port ${port}.....`));
