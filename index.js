var express = require("express");
var app = express();

const { constants } = require("./lib/constants.js");

app.get("/url", (req, res, next) => {
    res.json([constants.MOE_CONTRACT_ADDRESS]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});