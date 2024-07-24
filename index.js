const express = require("express");
const app = express();
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    const url = req.originalUrl;
    console.log(`${timestamp} - ${url}`);
    next();
})

app.listen(3000 , () => console.log("Server started on port 3000"));
