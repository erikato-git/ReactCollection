const express = require('express')
const mysql = require('mysql')

// If error: 'Client does not support authentication protocol ...
// then, go to workbench and execute: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '[your_current_password]';

// createPool can handle multiple connections rather than createConnection

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "^$3VnnMBdtP88Uvxp9cY",
    database: "estore",
    port: 3306,
    multipleStatements: true
  })


const productCategories = express()

productCategories.get("/", (req,res) => {
    let categoryData;

    pool.query("SELECT * FROM categories",(error,categories)=>{
        if(error){
            categoryData = error;
            res.status(500).send(categoryData)
        }else{
            categoryData = categories;
            res.status(200).send(categoryData)
        }
    })

})


module.exports = productCategories