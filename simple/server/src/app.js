const express = require('express');
const app = express();

app.set('port',process.env.POST||2000);

app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
const productRoutes = require('./routes/productRoute');

app.use('/product',productRoutes);
app.use('/test',(req,res)=>{
    res.send("thanks you ");
}); 

app.use('/',(req,res)=>{
    res.send("hi teacher");
});

app.listen(app.get('port'),()=>{
    console.log("2000 portda ishleya")
});