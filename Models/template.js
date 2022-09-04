import mongoose from "mongoose";
const { Schema } = mongoose;
const template_schema= new Schema({
name:String,
column:[{name:String,dataType:String}]
})

export const template= mongoose.model('template',template_schema);