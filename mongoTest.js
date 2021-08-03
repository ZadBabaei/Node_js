const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/playground")
.then(()=>console.log('connected to the mongodb'))
.catch(err => console.log(err))


const courseSchema=new mongoose.Schema({
name: String,
author: String,
tags:[String],
date: {type:Date, default:Date.now},
isPublished: Boolean

})

const CourseClass = mongoose.model('course',courseSchema)

async function creatCourse(){

    const course = new CourseClass({
        name:'HTML course',
        author:'Zad',
        tags:['HTML', 'front end'],
        isPublished:false
    })

    const result = await course.save();
    console.log(result)

}

async function getCourses(){
    const courses= await CourseClass
    .find({author:'Zad', isPublished:true})
    .limit(10)
    .sort({name:1})

    console.log(courses)
}

getCourses()
// creatCourse()
