var express = require("express");
const cors = require('cors')
var app = express();
const port = 3001
let data = [
    {
        id:1,
        orderNumber:1,
        totalAmount:'RM 1000',
        totalPaid:'RM 500',
        createdDate:new Date().toLocaleDateString()
    }
]

app.get("/show",cors(),(req,res)=>{
    res.json(data)
})

app.post('/new',cors(),(req,res)=>{
    const input = req.query
    if (input.totalAmount && input.totalPaid){
        const item = {
            id:data[data.length-1].id+1,
            orderNumber:data[data.length-1].orderNumber+1,
            totalAmount:input.totalAmount,
            totalPaid:input.totalPaid,
            createdDate:new Date().toLocaleDateString()
        }
        data.push(item)
    }else{
        res.json({result:false,message:"Please fill all columns"})
    }

    res.json({result:true})
})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})