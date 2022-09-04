import fs from'node:fs';
import path from 'node:path';

export const createFile=(schema)=>{
console.log(schema)
    if(schema){
      let columns='';
       schema.column.map(col=>{
              columns=  columns+col.name+':'+col.dataType+','
        })
        console.log(columns)

        //file content
        const data =`import mongoose from "mongoose";
        const { Schema } = mongoose;
        const d1= new Schema({
            ${columns}
        })
        export const ${schema.name}= mongoose.model('${schema.name}',d1);`
        //file contend end
      try {
        fs.appendFile('./Models/'+schema.name+'.js', data,(err)=>{
            console.log(err)
        }
       )
      } catch (error) {
        console.log(error)
      }
       
    }
}