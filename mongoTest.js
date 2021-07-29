const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/playground")
.then(()=>console.log('connected to the mongodb'))
.catch(err => console.log(err))