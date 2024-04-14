CREATE TABLE IF NOT EXISTS Users (
    id INT,
    user_id TEXT PRIMARY KEY,
    gender INT,
    age DECIMAL(10, 2)
);

CREATE TABLE IF NOT EXISTS SavingsAccounts (
    id INT PRIMARY KEY,
    npo_account_id TEXT,
    user_id TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE IF NOT EXISTS SavingsAccountsData(
    id INT PRIMARY KEY,
    npo_account_id TEXT,
    year INT,
    quartal TEXT,
    pmnts_sum_per_qrtr DECIMAL(100,2),
    pmnts_sum_per_year DECIMAL(100,2)
);

CREATE TABLE IF NOT EXISTS Predicts(
    id INT PRIMARY KEY,
    npo_account_id TEXT,
    client_id TEXT,
    quarterly_forecast DECIMAL(50, 15)
);

CREATE TABLE IF NOT EXISTS Operations (
    operation_id TEXT PRIMARY KEY,
    user_id TEXT,
    operation_type INT,  
    year INT,
    quartal TEXT
);

COPY Users (id, user_id, gender, age)
FROM '/migrations/data/users.csv'
DELIMITER ','
CSV;

COPY SavingsAccounts (id, user_id ,npo_account_id)
FROM '/migrations/data/accaunts.csv'
DELIMITER ','
CSV;

COPY SavingsAccountsData (id, npo_account_id, year, quartal, pmnts_sum_per_qrtr, pmnts_sum_per_year)
FROM '/migrations/data/SavingsAccountsData.csv'
DELIMITER ',' 
CSV;

COPY Predicts (id, npo_account_id, client_id, quarterly_forecast)
FROM '/migrations/data/target.csv'
DELIMITER ',' 
CSV;

COPY Operations (operation_id, user_id, operation_type, year, quartal) 
FROM '/migrations/data/operations.csv' 
DELIMITER ',' 
CSV;
