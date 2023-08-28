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



//Response




app.get('/math/:op', (req, res) => { //The first line sets up the GET route for /math/:op, where :op is a placeholder for the operation name. 

    const x = parseFloat(req.query.x); //The next (parseFloat) lines extract the x and y query parameters from the request using req.query
    const y = parseFloat(req.query.y);
  
    const {op} = req.params; //The next line extracts the op parameter from the request using req.params
  
    const result = op === "add" ? x + y : op === "subtract" ? x - y : op === 
    "multiply" ? x * y : op === "divide" ? x / y : false; //The next line calculates the result based on the provided operation name.
  
/*     res.send(result ? `The result is ${result}` : `Unrecognizable operation name`);
  
  }); */

//Convert the response to a JSON object


//We are getting closer to create a proper Rest API endpoint, so let's convert the response to a JSON object.

  const resultObject = {
    numbers: {
        x: x,
        y: y
    }, 
    operation: op,
    result: result ? result : `Unrecognizable operation name`
  }

res.send(resultObject);
});