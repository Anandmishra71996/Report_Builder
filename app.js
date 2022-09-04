 import express from 'express';
import{mongoose} from'mongoose';
const db_url='mongodb://localhost/report_builder'
import {router} from './routes/routes.js';

const app= express();

mongoose.connect(db_url,{useNewUrlParser:true})

const con=mongoose.connection;
con.on('open',function(){
    console.log('connected')
})
app.use(express.json())
app.use(router)
app.listen('9000',()=>{
    console.log('app started')
})