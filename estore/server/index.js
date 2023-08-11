const express = require('express')
const mysql = require('mysql')
const productCategories = require('./routes/ProductCategories')

const app = express()


app.use("/productCategories",productCategories)




// app.get("/", (req,res) => {
//     res.send("Test connection")
// })

const PORT = 5001

const server = app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})

