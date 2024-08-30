import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongodb.js";

import { app,server } from "./socket/socket.js"; //updated at last when implenting socket

dotenv.config();
const port = process.env.port || 5000;

const __dirname = path.resolve();

app.use(express.json()); //to parse incomimg req. with json payloads. to get req.data
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
});

app.get("/", (req,res) => {
    res.send("hello project starts");
});

server.listen(port, () => {
    connectToMongoDB();
    console.log(`Server is listening on port ${port}`);
});