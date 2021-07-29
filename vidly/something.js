
const Joi= require("Joi")
const express= require('express');
const app= express();

app.use(express.json());
// const port =  process.env.PORT ||3000;

let movies=[
    { id:01, genres:'drama'},
    { id:02, genres:'action'},
    { id:03, genres:'fantasy'},
    { id:04, genres:'animation'}
]

app.get('/api/genres',(req,res)=>{
    res.send(movies)
})

app.get('/api/genres/:id',(req,res)=>{
    const genre = movies.find((c=>c.id=== parseInt(req.params.id)))
    if(!genre) return res.status(404).send("The genre not found!")
    res.send(genre)
})

app.post('/api/genres',(req,res)=>{
    const {error}= validationCourse(req.body)
    if (error){return res.status(400).send(error.details[0].message)}
    const genre = {
        id:movies.length+1,
        genres: req.body.genre
    }
    movies.push(genre);
    res.send(genre);

} )

app.put('/api/genres/:id',(req,res)=>{
    const {error}= validationCourse(req.body)
    if (error){return res.status(400).send(error.details[0].message)}
   
    
} )


function validationCourse(genre){
  const schema=Joi.object({
    genre:Joi.string().min(3).required()  
  })
  return schema.validate(genre)
}


app.listen(3000, ()=>console.log(`listening to the port 3000.........`))