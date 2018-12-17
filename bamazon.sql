DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30),
    department_name VARCHAR(30),
    price DECIMAL(30,2),
    stock_quantity INT(30),
    product_sales INT(30),
    PRIMARY KEY (item_id)
);

CREATE TABLE department (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    over_head_costs DECIMAL(30,2),
    PRIMARY KEY (department_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("apple", "fruits & vegetables", 1, 1000),
("chocolate bar", "snack", 2.5, 500),
("pie", "dessert", 2, 500),
("kale", "fruits & vegetables", 0.5, 2000),
("iPhoneX", "electronic", 999, 500),
("bed frame", "furniture", 549, 200),
("blanket", "bed essential", 19, 1500),
("novel", "books", 10, 5000),
("desk lamp", "office", 29, 450),
("eyeshadow", "beauty", 49, 100);

