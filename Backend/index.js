const express = require("express")
const PORT = process.env.PORT || 5050;
const mongoDB = require('./db');

// Create an Express application
const app = express();
mongoDB();

app.get('/', (req, res) => {
    res.send("hello world");
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
