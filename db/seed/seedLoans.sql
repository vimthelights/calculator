COPY loans(loan_name,years,interest_rate)
FROM '/Users/attack/Desktop/hr_immersive/SDC/AffordabilityCalculator/db/seed/csvs/loans.csv'
DELIMITER ','
CSV HEADER;