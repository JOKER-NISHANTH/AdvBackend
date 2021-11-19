"use strict";
// const express = require('express');
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get("^/", function (req, res) {
    var port = 3001;
    res.send("Root Route running on " + port);
});
app.listen(3001, function () {
    console.log("Server running");
});
console.log("Hello World");
