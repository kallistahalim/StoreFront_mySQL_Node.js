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
                            // console.log(res);
                            // console.log(answer.ID);
                            // console.log(res[(answer.ID) - 1].item_id);
                            var answerID = answer.ID;
                            var checkID = res[(answer.ID) - 1].item_id;
                            var productName = res[(answer.ID) - 1].product_name;
                            console.log("------------------------");
                            console.log("Product Requested: " + productName);
                            
                            console.log(typeof answerID,typeof checkID);
                            if (answerID == checkID) {
                                console.log("I happened")
                                console.log("------------------------");
                                console.log("In-stock quantity: " + res[(answer.ID) - 1].stock_quantity);
                                console.log("------------------------");
                                console.log("Unit requested : " + answer.units);
                                var checkStoreQua = res[(answer.ID) - 1].stock_quantity;
                                var answerUnits = answer.units;

                                if (checkStoreQua < answerUnits) {
                                    console.log("------------------------");
                                    console.log('Insufficient quantity!');
                                    console.log("------------------------");
                                } else {
                                    checkStoreQua = checkStoreQua - answerUnits;
                                    console.log("------------------------");
                                    console.log("Remaining stocks: " + checkStoreQua);
                                    var productPrice = res[(answer.ID) - 1].price;
                                    
                                    console.log("------------------------");
                                    console.log("Cost per Unit: " + productPrice);
                                    var totalCustomerCost = productPrice * answerUnits;
                                    console.log("------------------------");
                                    console.log("Total Cost: " + totalCustomerCost);
                                    console.log("------------------------");




                                    var sql = `UPDATE products
                                                SET stock_quantity=?
                                                WHERE item_id=?`;
                                    var data = [parseInt(checkStoreQua), parseInt(answer.ID)];
                                    console.log(data);

    
                                    connection.query(sql, data, function (err, res) {
                                        console.log(res);
                                      if (err) {
                                          console.log("error!", err)
                                      }
                                      
                                      else{
                                      console.log(res.affectedRows + " record(s) updated");
                                      connection.end();
                                      }
                                  });
                                    }

                                }
                            })



                    };

                   
                });
            };


       