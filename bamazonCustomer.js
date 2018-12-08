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


        else {

            inquirer.prompt([{
                name: "ID",
                message: "What is your product ID number?"
            }, {
                name: "units",
                message: "What quantity do you wish to order?"
            }]).then(function (answer) {
                    for (var i = 0; i < res.length; i++) {
                        // console.log(res[i].item_id);
                        console.log(answer.ID);
                        // if (answer.ID === res[i].item_id) {
                        //     console.log("yay")
                        // }

                    }
                    })



            };

            connection.end();
        })
    };
