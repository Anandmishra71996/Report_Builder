import mongoose from "mongoose";
        const { Schema } = mongoose;
        const d1= new Schema({
            Serial No:Number,Name:String,
        })
        export const r5= mongoose.model('r5',d1);