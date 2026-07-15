const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const rateLimit = require("express-rate-limit");
app.use(express.json());
const PORT = 3002;

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 2,
    message: {
        message: "Too many login attempts. Try again later."
    }
});
//  Base de datos simulada
const users = [
    {
        id: 1,
        username: "admin",
        password: "$2b$10$wch0p57qAKh5yqAmH1EAq.YVu5d40kUAIwZX4UUH1KMH79xCzKwz."
    },
    {
        id: 2,
        username: "mau",
        password: "$2b$10$qUdDIwB/PD7yj/sSkNYv7.q4orUKlGlUBpHodyt7pduuEzMDb4LwG"
    }
]; 


// Vulnerable login
app.post("/login",loginLimiter,async (req, res) => {

    const { username, password } = req.body;

    const user = users.find(user =>
        user.username === username
    );

    if(!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        })
    }

    const match = await bcrypt.compare(
        password,
        user.password
    );

    if (!match) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    res.json({
        message: "Login successful",
        userId: user.id
    });

});

app.listen(PORT, () => {
    console.log(`Broken Auth API running on port ${PORT}`);
});