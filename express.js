// const Joi= require('Joi');
const express= require('express');
const app = express();
app.use(express.json())

const port= process.env.PORT || 3000;

let courses=[
  {id: 1, name:'HKR'},
  {id: 2, name:'comp 1600'},
  {id: 3, name:'chemistry 1000'},
  {id: 4, name:'comp 3031'}

]

app.get('/', (req,res)=>{
  res.send('This is the home page!!!!!')
})

app.post('/api/courses',(req,res)=>{
 
  
  const course= {
    id: courses.length+1,
    name:req.body.name
  }
  courses.push(course)
  res.send(req)
  console.log(req.body)
})


app.get('/api/courses/:id',(req,res)=>{
  const course= courses.find((c) => c.id === parseInt(req.params.id));
  if(!course){res.status(404).send('There is no course with the given ID please try again')
  }
  res.send(course);
} )

app.listen(port, () =>console.log(`listening on port ${port}.....`))