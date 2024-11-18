/*
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/customer");


//Image Storage Engine 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/images'); // Set the destination path for file uploads
    },
    filename: (req, file, cb) => {
        console.log(file);
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({ storage: storage })
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:4000/images/${req.file.filename}`
    })
})
app.use('/images', express.static('upload/images'));

// MiddleWare to fetch user from database
const fetchuser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, "secret_ecom");
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
};


// Schema for creating user model
const Users = mongoose.model("Users", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Schema for creating Product
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});
*/
/*
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/customer");

//Image Storage Engine 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/images'); // Set the destination path for file uploads
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});
const upload = multer({ storage: storage });
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:4000/images/${req.file.filename}`
    });
});
app.use('/images', express.static('upload/images'));

// MiddleWare to fetch user from database
const fetchuser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, "secret_ecom");
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
};

// Schema for creating user model
const Users = mongoose.model("Users", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Schema for creating Product
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

// Rest of the code remains the same
*/
import axios from 'axios'
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
const PORT = 4000;
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/customer");

//Image Storage Engine 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/images'); // Set the destination path for file uploads
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});
const upload = multer({ storage: storage });
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:4000/images/${req.file.filename}`
    });
});
app.use('/images', express.static('upload/images'));

// Middleware to fetch user from database
const fetchuser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, "secret_ecom");
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
};

// Schema for creating user model
const Users = mongoose.model("Users", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Schema for creating Product
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

const Payment_deateil = mongoose.model("Payment", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    adderss: {
        type: String,
    },
    cardnumber: {
        type: Number,
        unique: true,
    },
    expiry_date: {
        type: Number,
        unique: true,
    },
    cvv: {
        type: Number,
        unique: true,
    }

})

// Initialize Razorpay instance with API keys
const instance = new Razorpay({
    key_id: "rzp_test_5VvfEzamFgGpkP",
    key_secret: "WtkHFmD7CtUjnma0qlwPoyRf",
});

// Define a route for payment checkout
// Define a route for payment checkout
app.post('/api/checkout', async (req, res) => {
    try {
        const { amount } = req.body;// Extract the amount from the request body
        if (!amount) {
            return res.status(400).json({ error: 'Amount is required' });
        }

        const options = {
            amount: amount,
            currency: 'INR',
        };
        const order = await instance.orders.create(options);
        res.status(200).json({ order, success: true }); // Respond with both the order and success status
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(500).json({ error: 'Failed to process payment' });
    }
});
/*app.post('/api/checkout', async (req, res) => {
    try {
        const options = {
            amount: 2000,
            currency: 'INR',
        };
        const order = await instance.orders.create(options);
        res.json(order);
        res.status(200).json({
            success: true,
        })
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(500).json({ error: 'Failed to process payment' });
    }
});
*/
// Rest of the code remains the same...


app.get("/", (req, res) => {
    res.send("Root");
});

//search
// Route to handle search queries
app.get('/search', async (req, res) => {
    const query = req.query.q; // Get the search query from the request query parameters
    // Perform search logic here (e.g., search for products with names matching the query)
    try {
        const products = await Product.find({ name: { $regex: query, $options: 'i' } }); // Case-insensitive search
        res.json(products);
    } catch (error) {
        console.error('Error searching for products:', error);
        res.status(500).json({ error: 'An error occurred while searching for products' });
    }
});


// Route to handle displaying product details
app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = allProducts.find(product => product.id === productId);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
});


//Create an endpoint at ip/login for login the user and giving auth-token
app.post('/login', async (req, res) => {
    console.log("Login");
    let success = false;
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            success = true;
            console.log(user.id);
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success, token });
        }
        else {
            return res.status(400).json({ success: success, errors: "please try with correct email/password" })
        }
    }
    else {
        return res.status(400).json({ success: success, errors: "please try with correct email/password" })
    }
})

//Create an endpoint at ip/auth for regestring the user in data base & sending token
app.post('/signup', async (req, res) => {
    console.log("Sign Up");
    let success = false;
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: success, errors: "existing user found with this email" });
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });
    await user.save();
    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    success = true;
    res.json({ success, token })
})

app.get("/allproducts", async (req, res) => {
    let products = await Product.find({});
    console.log("All Products");
    res.send(products);
});

app.get("/newcollections", async (req, res) => {
    let products = await Product.find({});
    let arr = products.slice(1).slice(-8);
    console.log("New Collections");
    res.send(arr);
});

app.get("/todaytrending", async (req, res) => {
    let products = await Product.find({ category: "Night_cracker" });
    let arr = products.splice(0, 4);
    console.log("Popular In Day");
    res.send(arr);
});



//Create an endpoint for saving the product in cart
app.post('/addtocart', fetchuser, async (req, res) => {
    console.log("Add to Cart", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Added")
})

//Create an endpoint for saving the product in cart
app.post('/removefromcart', fetchuser, async (req, res) => {
    console.log("Remove Cart", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] != 0) {
        userData.cartData[req.body.itemId] -= 1;
    }
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Removed");
})

//Create an endpoint for saving the product in cart
app.post('/getcart', fetchuser, async (req, res) => {
    console.log("Get Cart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);

})


app.post("/addproduct", async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else { id = 1; }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({ success: true, name: req.body.name })

});

app.post("/removeproduct", async (req, res) => {
    const product = await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({ success: true, name: req.body.name })
});

app.listen(port, (error) => {
    if (!error) console.log("Server Running on port " + port);
    else console.log("Error : ", error);
});