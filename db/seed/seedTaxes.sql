COPY taxes(state_abr,rate)
FROM '/Users/attack/Desktop/hr_immersive/SDC/AffordabilityCalculator/db/seed/csvs/taxes.csv'
DELIMITER ','
CSV HEADER;