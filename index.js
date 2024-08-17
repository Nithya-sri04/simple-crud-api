const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});

// Use the product routes
app.use('/api/products', productRoutes);

mongoose.connect("mongodb+srv://nithyasrisivakumar30:lYtupmwyGweY5Odq@backenddb.kqdfk.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log("Connection failed", error.message);
    });
