import mongoose from "mongoose";
        const { Schema } = mongoose;
        const d1= new Schema({
            SerialNo:Number,
            Name:String,
        })
        export const r6= mongoose.model('r6',d1);