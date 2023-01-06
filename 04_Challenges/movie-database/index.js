const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('OK!')
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

app.get('url /test',(req,res) => {
    const test = req.query.s;

    if (typeof test != 'undefined') {
        
        const response = {status:200, message:"ok"};

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "you have to provide a search"
        };


        res.status(500);
        res.send(response);
    }
});
app.get('url /time',(req,res) => {
    const time = req.query.s;

    if (typeof time != 'undefined') {
       
        const response = {status:200, message:time};

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "you have to provide a search"
        };


        res.status(500);
        res.send(response);
    }
});

app.get('url /hello/<ID> ',(req,res) => {
    const hello = req.query.s;

    if (typeof hello != 'undefined') {
       
        const response = {status:200, message:"Hello, <ID>"};

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "you have to provide a search"
        };


        res.status(500);
        res.send(response);
    }
});

app.get('/search',(req,res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        // Search string applied
        const response = {status:200, message:"ok", data:SEARCH};

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "you have to provide a search"
        };


        res.status(500);
        res.send(response);
    }
});

