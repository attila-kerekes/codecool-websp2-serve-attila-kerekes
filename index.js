//Request


//Import Express

//old version
/* const express = require("express");
const app = express(); */

//new version
import { log } from "console";
import express from "express"; //The first line imports the express module.
const app = express(); //The second line creates an instance of the express application and assigns it to a constant variable app.

//Accept get request
app.get('/', (req, res) => {
    console.log("Request Object:", req);
    console.log("Response Object:", res);
    console.dir("Request Object:", req);
    console.dir("Response Object:", res);

    const q = req.query;
    console.log(q);

    res.send(`Ciao, ${q.name}!`);
});

app.listen(3000, () => { //Finally, we use the app.listen() method to start the application and listen for incoming HTTP requests on port 3000.
    console.log(`Open this link in your browser: http://127.0.0.1:3000`); //The callback function specified as the second argument is executed once the server is up and running. It logs a message to the console with a link that can be used to access the web application in the browser.
});

//Accept another request
app.get('/another-path', (req, res) => {
    console.log("Request Object:", req);
    console.log("Response Object:", res);
    res.send('Ciao on another path');
});

//Read the path
app.get('/users/:userId', (req, res) => {
    res.send(`The user id is: ${req.params.userId}`);
});



