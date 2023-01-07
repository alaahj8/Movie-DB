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
            status:500, error:true, message: "OK"
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
            status:500, error:true, message: "14:20"
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
            status:500, error:true, message: "Hello, <ID>"
        };


        res.status(500);
        res.send(response);
    }
});

app.get('/search',(req,res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        
        const response = {status:200,  data:SEARCH};

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

app.get('/movies/create',(req,res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        
        const response = {status:200, data:movies };

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: ""
        };


        res.status(500);
        res.send(response);
    }
});
app.get('/movies/read',(req,res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        
        const response = {status:200, data:movies };

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: ""
        };


        res.status(500);
        res.send(response);
    }
});
app.get('movies/update',(req,res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        
        const response = {status:200, data:movies };

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: ""
        };


        res.status(500);
        res.send(response);
    }
});app.get('movies/delete',(req,res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
       
        const response = {status:200, data:movies };

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: ""
        };


        res.status(500);
        res.send(response);
    }
});

const movies = { title: 'Jaws', year: 1975, rating: 8 },{ title: 'Avatar', year: 2009, rating: 7.8 },{ title: 'Brazil', year: 1985, rating: 8 },{ title: 'The Shaw shank', year: 1992, rating: 6.2 }
app.get('movies',(req,res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        
        const response = {status:200, data:movies };

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


app.get('url /movies/read/by-date',(req,res) => {
    const read = req.query.s;

    if (typeof read != 'undefined') {
        
        const response = {status:200, data:movies };

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "ORDERED BY DATE"
        };


        res.status(500);
        res.send(response);
    }
});
app.get('url /movies/read/by-rating',(req,res) => {
    const read = req.query.s;

    if (typeof read != 'undefined') {
        
        const response = {status:200, data:movies };

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "ORDERED BY RATING"
        };


        res.status(500);
        res.send(response);
    }
});
app.get(' url /movies/read/by-title',(req,res) => {
    const read = req.query.s;

    if (typeof read != 'undefined') {
        
        const response = {status:200, data:movies };

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "ORDERED BY TITLE"
        };


        res.status(500);
        res.send(response);
    }
});

app.get('url /movies/read/id/<ID>',(req,res) => {
    const read = req.query.s;

    if (typeof read != 'undefined') {
        
        const response = {status:200, data:movies };

        res.send(response);
    }
    else {
        const response = {status:404, error:true, message:'the movie <ID> does not exist'};


        res.status(500);
        res.send(response);
    }
});
app.get('url /movies/add?title=<TITLE>&year=<YEAR>&rating=<RATING>',(req,res) => {
    const rating = req.query.s;

    if (typeof rating != 'undefined') {
        
        const response = {title: TITLE, year: YEAR, rating: RATING};

        res.send(response);
    }
    else {
        const response = {
            status:500, error:true, message: "{status:403, error:true, message:'you cannot create a movie without providing a title and a year'}"
        };


        res.status(500);
        res.send(response);
    }
});

app.get('url movies/delete/<ID>',(req,res) => {
    const Delete = req.query.s;

    if (typeof Delete != 'undefined') {
        
        const response = {status:200, data:movies };

        res.send(response);
    }
    else {
        const response = {status:404, error:true, message:'the movie <ID> does not exist'};


        res.status(500);
        res.send(response);
    }
});