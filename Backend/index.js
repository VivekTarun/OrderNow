const express = require("express")
const PORT = process.env.PORT || 5050;

// Create an Express application
const app = express();

app.get('/', (req, res) => {
    res.send("hello world");
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
