INSERT INTO users (first_name, last_name, email, password) VALUES
('John', 'Doe', 'john.doe@example.com', 'password123'),
('Jane', 'Smith', 'jane.smith@example.com', 'password456'),
('Alice', 'Johnson', 'alice.johnson@example.com', 'password789'),
('Bob', 'Brown', 'bob.brown@example.com', 'password101'),
('Charlie', 'Davis', 'charlie.davis@example.com', 'password202'),
('Eve', 'Miller', 'eve.miller@example.com', 'password303'),
('Frank', 'Wilson', 'frank.wilson@example.com', 'password404');

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

INSERT INTO grocery_items (name, price, store_id, date) VALUES
('Apple', 0.99, 1, '2025-03-01'),
('Apple', 1.09, 2, '2025-03-02'),
('Apple', 0.95, 3, '2025-03-03'),
('Apple', 1.15, 4, '2025-03-04'),
('Banana', 0.59, 1, '2025-03-01'),
('Banana', 0.65, 2, '2025-03-02'),
('Banana', 0.55, 3, '2025-03-03'),
('Banana', 0.60, 4, '2025-03-04'),
('Milk', 2.49, 1, '2025-03-01'),
('Milk', 2.59, 2, '2025-03-02'),
('Milk', 2.39, 3, '2025-03-03'),
('Milk', 2.55, 4, '2025-03-04'),
('Bread', 1.99, 1, '2025-03-01'),
('Bread', 2.09, 2, '2025-03-02'),
('Bread', 1.95, 3, '2025-03-03'),
('Bread', 2.10, 4, '2025-03-04'),
('Eggs', 3.49, 1, '2025-03-01'),
('Eggs', 3.59, 2, '2025-03-02'),
('Eggs', 3.39, 3, '2025-03-03'),
('Eggs', 3.55, 4, '2025-03-04'),
('Chicken Breast', 5.99, 1, '2025-03-01'),
('Chicken Breast', 6.09, 2, '2025-03-02'),
('Chicken Breast', 5.95, 3, '2025-03-03'),
('Chicken Breast', 6.10, 4, '2025-03-04'),
('Orange Juice', 3.99, 1, '2025-03-01'),
('Orange Juice', 4.09, 2, '2025-03-02'),
('Orange Juice', 3.95, 3, '2025-03-03'),
('Orange Juice', 4.10, 4, '2025-03-04');

INSERT INTO grocery_list_items (grocery_list_id, item_id, quantity) VALUES
(1, 1, 5),  -- Weekly Groceries, Apple from Walmart
(1, 5, 10), -- Weekly Groceries, Banana from Walmart
(1, 9, 2),  -- Weekly Groceries, Milk from Walmart
(2, 13, 4), -- Party Supplies, Bread from T&T
(2, 17, 3), -- Party Supplies, Eggs from T&T
(2, 21, 6), -- Party Supplies, Chicken Breast from T&T
(3, 25, 8), -- Monthly Stock, Orange Juice from T&T
(3, 2, 7),  -- Monthly Stock, Apple from T&T
(3, 6, 12), -- Monthly Stock, Banana from T&T
(4, 10, 3), -- Vegetarian Week, Milk from NoFrills
(4, 14, 5), -- Vegetarian Week, Bread from NoFrills
(4, 18, 2), -- Vegetarian Week, Eggs from NoFrills
(5, 22, 4), -- BBQ Essentials, Chicken Breast from NoFrills
(5, 26, 6), -- BBQ Essentials, Orange Juice from NoFrills
(5, 3, 9),  -- BBQ Essentials, Apple from NoFrills
(6, 7, 11), -- Holiday Feast, Banana from NoFrills
(6, 11, 2), -- Holiday Feast, Milk from Loblaws
(6, 15, 4), -- Holiday Feast, Bread from Loblaws
(7, 19, 3), -- Healthy Eating, Eggs from Loblaws
(7, 23, 5), -- Healthy Eating, Chicken Breast from Loblaws
(7, 27, 7); -- Healthy Eating, Orange Juice from Loblaws