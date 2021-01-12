CREATE DATABASE shop;
USE shop;
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_cat VARCHAR(30) NOT NULL
);
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_prod VARCHAR(30) NOT NULL,
    description_prod VARCHAR(200) NOT NULL,
    price FLOAT NOT NULL,
    weight FLOAT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id)
        REFERENCES categories (id)
);
CREATE TABLE statuses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_stat VARCHAR(20) NOT NULL
);
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date_conf DATE,
    status_id INT NOT NULL,
    FOREIGN KEY (status_id)
        REFERENCES statuses (id),
    username VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL,
    phone VARCHAR(15) NOT NULL
);
CREATE TABLE orders_products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    FOREIGN KEY (order_id)
        REFERENCES orders (id),
    product_id INT NOT NULL,
    FOREIGN KEY (product_id)
        REFERENCES products (id),
    amount INT UNSIGNED NOT NULL
);
INSERT statuses VALUES (1, 'UNAPPROVED'),
						(2, 'APPROVED'),
                        (3, 'CANCELED'),
                        (4, 'COMPLETED');

insert categories values (
	1,
    'owoce'
),(2,'warzywa');
insert products values(
	1,'banan','fajny owoc',5.99,0.3,1
),(
	2,'sliwka','bardzo fajny owoc',4.99,0.2,1
),(
	3,'gruszka','fajny owoc',3.99,0.3,1
),(
	4,'marchewka','super warzywo',6.99,0.25,2
);
SELECT 
    *
FROM
    products;
drop table orders_products, orders, statuses, products, categories;
DELETE FROM orders_products 
WHERE
    product_id > 0;
SELECT 
    *
FROM
    statuses;
insert orders values(
	4,NULL,1,'jess','kok@onet.pl','558874412'
);

insert orders_products (order_id,product_id,amount) values(
	2,2,17
);

SELECT 
    *
FROM
    orders_products;
DELETE FROM orders_products 
WHERE
    order_id = 3;

