const mongoose = require('mongoose');
const DB = process.env.dbUrl
mongoose.connect(DB,{
    
}).then(()=> {
    console.log("Connected Successfully....");
}).catch((err)=> {
    console.log("Not Connected....",err)
}) 