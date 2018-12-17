DROP DATABASE IF EXISTS department;

CREATE DATABASE department;

USE department;

CREATE TABLE department (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    over_head_costs DECIMAL(30,2),
    PRIMARY KEY (department_id)
);