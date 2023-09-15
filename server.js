const express = require('express')
const app = express()
app.get('/greeting', function(req, res){
    res.send('<h1>Hello, stranger!</h1>')
})
app.get('/greeting/:name', (req,res)=>{
    res.send('Hello, '+ req.params.name + ',' + ' It is so great to see you!')
})

app.get('/tip/:tip/:tipPercentage', (req, res)=>{
    res.send(req.params.tipPercentage)
})


app.listen(3001, function(){
    console.log('Listening on port 3001')
})


