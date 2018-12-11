var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Moderndance123",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
                if (err) throw err;
 
                })
            }

var commandArgv = process.argv[2];

if (commandArgv = "View Products for Sale") {

        connection.query("SELECT * FROM products", function (err, res) {
                    if (err) throw err;
                    else{
                        console.log(JSON.stringify(res, null, 2));
                    }
                    })
                }

if (commandArgv = "View Log Inventory") {

    connection.query("SELECT stock_quantity FROM products WHERE stock_quantity < 5", function (err, res) {
        if (err) throw err;
        else{
            console.log(JSON.stringify(res, null, 2));
        }
        })
    }




