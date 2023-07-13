let express = require('express');
let app = express();

require('dotenv').config();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

/* app.get("/json", (req, res) => {
    res.json(  
        { "message": "Hello json" }
        );
});

*/

app.get("/json", (req, res) => {
    let jsonResponse = { "message": "Hello json"};

    if (process.env.MESSAGE_STYLE === "uppercase") {
        jsonResponse.message = jsonResponse.message.toUpperCase();
    }

    res.json(jsonResponse);
});

console.log("Hello World");


































 module.exports = app;
