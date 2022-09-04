

export const getReport=async(req,res)=>{
    try {
      let table_name=  req.params.rep_name;
       const t1 =await import(`../Models/${table_name}.js`)
        console.log(t1[table_name])
        const template_data=await t1[table_name].find();
        res.json(template_data)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export const addReport=async(req,res)=>{
    const table_name=req.params.rep_name;
    const t1=await import(`../Models/${table_name}.js`)

    console.log(table_name)
    const template_data= new t1[table_name](
    { 
        name:req.body.name
    }
    );
    try {
        console.log(req.body)
    const data =await t1[table_name].create(req.body)

     data instanceof t1[table_name]
    
    res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}