var mysql = require("mysql");
var inquirer = require("inquirer");
// var bamazonCustomer = require("./bamazonCustomer");
// var customer = new bamazonCustomer();
var fs = require('fs');



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
});


var commandArgv = process.argv[2];

// switch(commandArgv) {
//     case "View Products for Sale":
//     connection.query("SELECT * FROM products", function (err, res) {
//         if (err) throw err;
//         else {
//             console.log(JSON.stringify(res, null, 2));
//         }
//     })
//     break;

//     case "View Log Inventory":
//     connection.query("SELECT stock_quantity FROM products WHERE stock_quantity < 5", function (err, res) {
//         if (err) throw err;
//         else {
//             console.log(JSON.stringify(res, null, 2));
//         }
//     });
//     break;

//     case "Add to Inventory":
//     connection.query("SELECT stock_quantity FROM products", function (err, res) {
//         if (err) throw err;
//         else {
//             inquirer.prompt([{
//                 name: "ID",
//                 message: "Which Item to Add?"
//             }, {
//                 name: "Quantity",
//                 message: "How many?"
//             }]).then(function (answer) {
//                 console.log(answer);
//             })

// }});
    
//     break;
// }
    




if (commandArgv = "View Products for Sale") {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        else {
            console.log(JSON.stringify(res, null, 2));
        }
    })
}


if (commandArgv = "View Log Inventory") {

    connection.query("SELECT stock_quantity FROM products WHERE stock_quantity < 5", function (err, res) {
        if (err) throw err;
        else {
            console.log(JSON.stringify(res, null, 2));
        }
    })
}

if (commandArgv = "Add to Inventory") {
    connection.query("SELECT stock_quantity FROM products", function (err, res) {
        if (err) throw err;
        else {
            inquirer.prompt([{
                name: "ID",
                message: "Which Item to Add?"
            }, {
                name: "Quantity",
                message: "How many?"
            }]).then(function (answer) {
                console.log(answer);

                var checkStoreQua = res[(answer.ID) - 1].stock_quantity;
                var answerUnits = answer.units;
                
                var sql = `UPDATE products
                SET stock_quantity=?
                WHERE item_id=?`;

    var data = [parseInt(checkStoreQua), parseInt(answer.ID)];
    console.log(data);
            })
        }
    })
}
