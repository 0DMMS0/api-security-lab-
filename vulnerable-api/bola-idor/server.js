const express = require("express");

const app = express();

const PORT = 3000;


//emulate user
const currentUser = {
    id:100,
    name: "Mauricio"
}

//emulated DB
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


app.get("/api/orders/:id", (req, res) => {

    const orderId = Number(req.params.id);

    const order = orders.find(order => order.id === orderId);

    res.json(order);

});


app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});