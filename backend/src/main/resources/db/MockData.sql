INSERT INTO users (first_name, last_name, email, password) VALUES
('John', 'Doe', 'john.doe@example.com', '$2a$10$7ktACsNjp/bLIwLVLVgPxuUiOwXvfU1FzS0Sfm.kX5pTJs/IWe5Sa'),
('Jane', 'Smith', 'jane.smith@example.com', '$2a$10$7ktACsNjp/bLIwLVLVgPxuUiOwXvfU1FzS0Sfm.kX5pTJs/IWe5Sa'),
('Alice', 'Johnson', 'alice.johnson@example.com', '$2a$10$7ktACsNjp/bLIwLVLVgPxuUiOwXvfU1FzS0Sfm.kX5pTJs/IWe5Sa'),
('Bob', 'Brown', 'bob.brown@example.com', '$2a$10$7ktACsNjp/bLIwLVLVgPxuUiOwXvfU1FzS0Sfm.kX5pTJs/IWe5Sa'),
('Charlie', 'Davis', 'charlie.davis@example.com', '$2a$10$7ktACsNjp/bLIwLVLVgPxuUiOwXvfU1FzS0Sfm.kX5pTJs/IWe5Sa'),
('Eve', 'Miller', 'eve.miller@example.com', '$2a$10$7ktACsNjp/bLIwLVLVgPxuUiOwXvfU1FzS0Sfm.kX5pTJs/IWe5Sa'),
('Frank', 'Wilson', 'frank.wilson@example.com', '$2a$10$7ktACsNjp/bLIwLVLVgPxuUiOwXvfU1FzS0Sfm.kX5pTJs/IWe5Sa');

INSERT INTO grocery_lists (user_id, name, date) VALUES
(1, 'Weekly Groceries', '2025-03-01'),
(2, 'Party Supplies', '2025-03-02'),
(3, 'Monthly Stock', '2025-03-03'),
(1, 'Vegetarian Week', '2025-03-04'),
(2, 'BBQ Essentials', '2025-03-05'),
(3, 'Holiday Feast', '2025-03-06'),
(1, 'Healthy Eating', '2025-03-07');

INSERT INTO stores (name, address) VALUES
('Walmart', '123 Walmart St, Toronto, ON'),
('T&T', '456 T&T Ave, Vancouver, BC'),
('NoFrills', '789 NoFrills Blvd, Calgary, AB'),
('Loblaws', '101 Loblaws Rd, Ottawa, ON'),
('Sobeys', '202 Sobeys Ln, Halifax, NS'),
('Metro', '303 Metro Dr, Montreal, QC'),
('Superstore', '404 Superstore St, Winnipeg, MB');

INSERT INTO products (product_id, name) VALUES
(1, 'Apple'),
(2, 'Banana'),
(3, 'Milk'),
(4, 'Bread'),
(5, 'Eggs'),
(6, 'Chicken Breast'),
(7, 'Orange Juice');

INSERT INTO grocery_items (product_id, price, store_id, date) VALUES
(1, 0.99, 1, '2025-03-01'),
(1, 1.09, 2, '2025-03-02'),
(1, 0.95, 3, '2025-03-03'),
(1, 1.15, 4, '2025-03-04'),
(2, 0.59, 1, '2025-03-01'),
(2, 0.65, 2, '2025-03-02'),
(2, 0.55, 3, '2025-03-03'),
(2, 0.60, 4, '2025-03-04'),
(3, 2.49, 1, '2025-03-01'),
(3, 2.59, 2, '2025-03-02'),
(3, 2.39, 3, '2025-03-03'),
(3, 2.55, 4, '2025-03-04'),
(4, 1.99, 1, '2025-03-01'),
(4, 2.09, 2, '2025-03-02'),
(4, 1.95, 3, '2025-03-03'),
(4, 2.10, 4, '2025-03-04'),
(5, 3.49, 1, '2025-03-01'),
(5, 3.59, 2, '2025-03-02'),
(5, 3.39, 3, '2025-03-03'),
(5, 3.55, 4, '2025-03-04'),
(6, 5.99, 1, '2025-03-01'),
(6, 6.09, 2, '2025-03-02'),
(6, 5.95, 3, '2025-03-03'),
(6, 6.10, 4, '2025-03-04'),
(7, 3.99, 1, '2025-03-01'),
(7, 4.09, 2, '2025-03-02'),
(7, 3.95, 3, '2025-03-03'),
(7, 4.10, 4, '2025-03-04');

INSERT INTO grocery_list_items (grocery_list_id, product_id, quantity) VALUES
(1, 1, 5),  -- Weekly Groceries, Apple from Walmart
(1, 2, 10), -- Weekly Groceries, Banana from Walmart
(1, 3, 2),  -- Weekly Groceries, Milk from Walmart
(2, 4, 4), -- Party Supplies, Bread from T&T
(2, 5, 3), -- Party Supplies, Eggs from T&T
(2, 6, 6), -- Party Supplies, Chicken Breast from T&T
(3, 7, 8), -- Monthly Stock, Orange Juice from T&T
(3, 1, 7),  -- Monthly Stock, Apple from T&T
(3, 2, 12), -- Monthly Stock, Banana from T&T
(4, 3, 3), -- Vegetarian Week, Milk from NoFrills
(4, 4, 5), -- Vegetarian Week, Bread from NoFrills
(4, 5, 2), -- Vegetarian Week, Eggs from NoFrills
(5, 6, 4), -- BBQ Essentials, Chicken Breast from NoFrills
(5, 7, 6), -- BBQ Essentials, Orange Juice from NoFrills
(5, 1, 9),  -- BBQ Essentials, Apple from NoFrills
(6, 2, 11), -- Holiday Feast, Banana from NoFrills
(6, 3, 2), -- Holiday Feast, Milk from Loblaws
(6, 4, 4), -- Holiday Feast, Bread from Loblaws
(7, 5, 3), -- Healthy Eating, Eggs from Loblaws
(7, 6, 5), -- Healthy Eating, Chicken Breast from Loblaws
(7, 7, 7); -- Healthy Eating, Orange Juice from Loblaws