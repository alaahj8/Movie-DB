const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('OK!')
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

app.get('/search',(req,res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        // Search string applied
        const response = {
            status:200, message:"ok", data: search
        };

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
        const response = {status:200, message: TIME, data: search
        };

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