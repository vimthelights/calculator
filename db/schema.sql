CREATE TABLE homes(
    id SERIAL PRIMARY KEY,
    asking_price DECIMAL NOT NULL,
    address_line1 VARCHAR(45),
    address_line2 VARCHAR(8),
    address_city VARCHAR(45),
    address_state VARCHAR(2) NOT NULL,
    address_zip INT,
    address_country VARCHAR(2)
);

CREATE TABLE loans(
  id SERIAL PRIMARY KEY,
  loan_name VARCHAR(20),
  years INT NOT NULL,
  interest_rate DECIMAL
);

CREATE TABLE taxes(
  id SERIAL PRIMARY KEY,
  state_abbrev VARCHAR(2) NOT NULL,
  effective_rate DECIMAL NOT NULL
);
