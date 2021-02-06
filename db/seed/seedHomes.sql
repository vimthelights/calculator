COPY homes(asking_price,address_line1,address_city,address_state,address_zip)
FROM '/Users/attack/Desktop/hr_immersive/SDC/AffordabilityCalculator/db/seed/csvs/homes.csv'
DELIMITER ','
CSV HEADER;