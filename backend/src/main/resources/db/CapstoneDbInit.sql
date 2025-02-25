CREATE TABLE stores (
    store_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255)
);

CREATE TABLE grocery_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    store_id INT,
    date DATE NOT NULL, 
    FOREIGN KEY (store_id) REFERENCES stores(store_id) ON DELETE CASCADE
);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE grocery_lists (
    grocery_list_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE grocery_list_items (
    grocery_list_item_id INT AUTO_INCREMENT PRIMARY KEY,
    grocery_list_id INT,
    item_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (grocery_list_id) REFERENCES grocery_lists(grocery_list_id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES grocery_items(item_id) ON DELETE CASCADE
);

CREATE TABLE blacklisted_tokens
(
    token                VARCHAR(255) NULL,
    blacklisted_token_id INT          NOT NULL
        PRIMARY KEY
);