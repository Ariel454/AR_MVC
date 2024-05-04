const express = require("express");

const app = express();
 
const port = process.env.PORT || 3000;

app.get("/users",(req, res) => {               
    const htmlResponse = 
    `<html>
    <head>
    <title>
    API EXPRESS</title>
    </head>
    <body>
    <h1>Proyecto backend</h1>
    </body>
    </html>`;
    res.send(htmlResponse);
});

app.listen(port, ()=>{
    console.log(`port running in: ${port}`)
})