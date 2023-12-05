const express = require("express");
require("./db/conn")

const productRoute = require("./routers/ProductRoute")

// Configuring the .env file
require("dotenv").config();

const app = express();
const port  = process.env.PORT | 5000;
app.use(express.json());

app.use(productRoute)

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})