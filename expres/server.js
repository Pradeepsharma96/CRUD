
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require ('mongoose');

const NameModel = require('./model');
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://Pradeep:Shailaja_96@cluster0.zpk44.mongodb.net/?retryWrites=true&w=majority').then(
    ()=> console.log('Db connected')
    ).catch(err => console.log(err))


app.get('/mobiles', async(req,res)=>{
    const dbResults = await NameModel.find()
    res.json(dbResults)
    })

app.get('/mobiles/:id', (req,res)=>{
    const newData = products.filter(item => item.id == req.params.id)
    return res.json(newData);
})

app.post('/add-mobiles', (req,res)=>{
    console.log({body: req.body});
    const {id ,mobileName,price,storage,ram} = req.body;
    try{
        const newData = new NameModel({id: id, mobileName: name, price: price, storage: storage, ram: ram});
        newData.save();
        return res.send(newData)
    
    }
    catch(err){
        console.log(err.message);
    }
    console.log(id,name);
    return res.send("Data Stored")
})
app.listen(5050,()=> console.log('server running'));


