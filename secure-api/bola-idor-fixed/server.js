const express = require("express");

const app = express();

const PORT = 3001;


// Usuario autenticado actualmente
const currentUser = {
    id: 100,
    name: "Mauricio"
};


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


app.get("/api/orders/:id",(req,res) => {
    const orderId = Number(req.params.id);

    const foundOrder = orders.find(item =>
        item.id=== orderId && 
        item.userId === currentUser.id
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