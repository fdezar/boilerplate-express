let express = require('express');
let app = express();

require('dotenv').config();

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

let getCurrentTimeString = () => {
    return new Date().toString();
}

app.get("/now", (req, res, next) => {
    req.time = getCurrentTimeString();
    next();
}, (req, res) => {
    res.json({ time: req.time })
})

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

app.get("/:word/echo", (req, res) => {
    res.json({ echo: req.params.word });
});

console.log("Hello World");

app.get("/name", (req, res) => {
    res.json({ name: req.query.first + " " + req.query.last });
});

app.post()































 module.exports = app;
