const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3003;
const JWT_SECRET = process.env.JWT_SECRET;


const users = [
    {
        id: 1,
        username: "admin",
        password: "$2b$10$xDwHjQ7jW6VBwhXy0JJBjO/2knOzQxcsUQAV6L4HDBmKTn4uPUygW",
        role: "admin"
    },
    {
        id: 2,
        username: "mau",
        password: "$2b$10$hpD/6UYfMpdKViD2PRbH5Ofkw3JmXM8ms5PtGniiF58Jtqkm6D3K.",
        role: "user"
    }
];