const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 
//const rateLimit = require("express-rate-limit");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3003;
const JWT_SECRET = process.env.JWT_SECRET;
const verifyToken = require("./middleware/authMiddleware");
const authorize = require("./middleware/authorize");

// emulated db with jwt
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

app.post("/login", async (req,res)=>{
    const {username,password} = req.body;

const user = users.find(
    user => user.username === username
);

if(!user) {
    return res.status(401).json({
        message: "Invalid "
    });
}

const match = await bcrypt.compare(
    password, user.password
)

if(!match) {
    return res.status(401).json({
        message: "Invalid credentials"
    })
}

const token = jwt.sign(
    {
        id: user.id,
        username: user.username,
        role: user.role
    },
    JWT_SECRET,
    {
        expiresIn: "15m"
    }
)

    res.json({
        message: "Login successful",
        token
    }); 
});

app.get("/profile", verifyToken, (req, res) => {

    res.json({
        message: "Protected route",
        user: req.user
    });

});


app.get("/authorize", verifyToken, authorized("admin"), (req,res)=>{
    res.json({
        message: "Welcome Admin!"
    })
})

app.listen(PORT, () => {
    console.log(`Secure API is running on PORT ${PORT}`)
})

