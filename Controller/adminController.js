 import { template } from "../Models/template.js"
 import { createFile } from "../Services/createTable.js"
 export const homeRoute=(req,res)=>{
    res.send('home route reached')
}

export const getTemplate=async(req,res)=>{
    try {
        const template_data= await template.find();
        res.json(template_data)
    } catch (error) {
        res.send('error',error)
    }
}
export const addTemplate=async(req,res)=>{
    const template_data= new template({
        name:req.body.name,
        column:req.body.column
    });
    try {
        console.log(template_data)
    const t1=  template_data.save();
    createFile(req.body)
    res.json(t1);
    } catch (error) {
        res.status('500').send(error)
    }
}