const express = require('express');
const cors = require("cors");
const routes = require('./routes');

const app = express();
app.use(cors());
const port = 8000;

// Routes

// Get
routes.routes.forEach((el => (
    app.get(el.route, (req, res) => {
        if(el.resPath) {
            res.sendFile(el.resPath);
        } else {
            res.send(el.response(req));
        };
    })
)));

// Post
app.use(express.json());
routes.routes.forEach((el => (
    app.post(el.route, (req, res) => {
        console.log('TEST:', req.body);
        res.send(el.response(req));
    })
)));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
