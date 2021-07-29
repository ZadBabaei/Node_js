const Joi= require('Joi');
const express = require("express");
require('dotenv').config();
const app = express();

app.set('view engine','pug');
app.set('views','./views')

app.use(express.json());

const port = process.env.PORT || 3000;

let courses = [
  { id: 1, name: "HKR" },
  { id: 2, name: "comp 1600" },
  { id: 3, name: "chemistry 1000" },
  { id: 4, name: "comp 3031" },
];


//   get method:

app.get("/", (req, res) => {
  res.render('index', {title:"my tuil",message: 'Hello there!' })
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});



//   post method to create a data
app.post("/api/courses",(req, res)=>{

const {error} = validationCourse(req.body)
if(error){ return res.status(400).send(error.details[0].message);}

  const course ={
    id: courses.length+1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
} )


//  put method to update an existing data

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c => c.id === parseInt(req.params.id)));
  if (!course) return res.status(404).send("course not found");




  /* object destructuring :
  we know that validationCourse(req.body) returns either value or the error
  so const result = validationCourse(req.body) would be either result.value or result .error.
  therefore with the obj destructuring instead  of const result= validationCourse(req.body) we use 
   the syntax on the next line. */

  const {error}=validationCourse(req.body)
  if(error){
    res.status(400).send(error.details[0].message);
    return;
  }
  course.name = req.body.name;
  res.send(course)
})


function validationCourse(course){
  const schema=Joi.object({
    name:Joi.string().min(3).required()  
  })
  return schema.validate(course)
}


// app.delete: to  send a request to delete an record of data
app.delete("/api/courses/:id", (req,res)=>{
  const course = courses.find((c => c.id === parseInt(req.params.id)));
  if (!course) return res.status(404).send("course not found");


  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course)
})


app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c => c.id === parseInt(req.params.id)));
  if (!course) {
    res.status(404).send("course not found");
    return;
  }
  res.send(course);
});

app.listen(port, () => console.log(`listening on port ${port}.....`));
