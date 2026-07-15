const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const authenticateToken = require("./middleware/auth");
const PORT = 3001;
const { JWT_SECRET } = require("./config")


// Usuario autenticado actualmente


// Base de datos simulada
const orders = [
    {
        id: 1,
        userId: 100,
        product: "Pizza",
        price: 15
    },
    {
        id: 2,
        userId: 200,
        product: "Burger",
        price: 10
    }
];


app.post("/login", (req, res) => {
    const user = {
        id: 100,
        name: "Mauricio"
    };
    const token = jwt.sign(
        user,
        JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );


    res.json({token});

});

app.get("/api/orders/:id",authenticateToken,(req,res) => {
    const orderId = Number(req.params.id);

    const foundOrder = orders.find(item =>
        item.id=== orderId && 
        item.userId === req.user.id
    );
    if(!foundOrder){
        return res.status(403).json({
            message: "Access denied"
                });
}

res.json(foundOrder);

});

app.listen(PORT, () => {
    console.log(`Secure API running on port ${PORT}`);
});