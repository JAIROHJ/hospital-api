const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt');

app.use(express.urlencoded({extended:true}))

//import or use express router 
app.use('/',require('./routes/app'));

app.listen(PORT,(err)=>{
    if(err){
        console.log('error',err);
    }
    console.log(`Server is running on port:${PORT}`)
})