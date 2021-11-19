const express = require('express');


// import express, { Request, Response } from "express";

const app = express();
// app.get("^/", (req: Request, res: Response): void => {

app.get("/", (req, res): void => {
    const port: number = 3001;
    res.send("Root Route running on " + port);
})
app.listen(3001, (): void => {
    console.log("Server running");
})

console.log("Hello World");