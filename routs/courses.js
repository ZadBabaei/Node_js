const express = require("express");
const router= express.Router();


let courses = [
    { id: 1, name: "HKR" },
    { id: 2, name: "comp 1600" },
    { id: 3, name: "chemistry 1000" },
    { id: 4, name: "comp 3031" },
  ];
  


  router.get("/", (req, res) => {
    res.send(courses);
  });
  
  
  
  //   post method to create a data
  router.post("/",(req, res)=>{
  
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
  
  router.put("/:id", (req, res) => {
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
  
  
  // router.delete: to  send a request to delete an record of data
  router.delete("/:id", (req,res)=>{
    const course = courses.find((c => c.id === parseInt(req.params.id)));
    if (!course) return res.status(404).send("course not found");
  
  
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course)
  })
  
  
  router.get("/:id", (req, res) => {
    const course = courses.find((c => c.id === parseInt(req.params.id)));
    if (!course) {
      res.status(404).send("course not found");
      return;
    }
    res.send(course);
  });



module.exports = router;