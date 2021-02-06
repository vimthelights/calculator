# Database Queries And Sample Results

## Summary
| SQL query                                                                                                                                        | SQL initial bench | endpoint          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- | ----------------- |
| SELECT * FROM homes WHERE id=7777;                                                                                                               | 10.440 ms         | GET /homes/:id    |
| INSERT INTO homes (asking_price,address_line1,address_city,address_state,address_zip) VALUES (950000,'1 S Elliott Pl', 'Brooklyn', 'NY', 88888); | 19.246 ms         | POST /homes       |
| UPDATE homes SET asking_price=7777777, address_zip=78978 WHERE id=10000001;                                                                      | 13.637 ms         | PATCH /homes/:id  |
| DELETE FROM homes WHERE id=10000001;                                                                                                             | 5.748 ms          | DELETE /homes/:id |
| SELECT * FROM loans;                                                                                                                             | 14.430 ms         | GET /loans/       |
| SELECT * FROM taxes WHERE state_abr='TX';                                                                                                        | 18.509 ms         | GET /taxes/:state |



## Homes

### GET /homes/:id
```
=> sample query
SELECT * FROM homes WHERE id=7777;

=> sample results
  id  | asking_price |  address_line1   | address_city | address_state | address_zip
------+--------------+------------------+--------------+---------------+-------------
 7777 |      9789863 | 544 Dianna Fords | Fletafurt    | ID            |       31618

=> sample benchmark
Time: 1.609 ms
```
### POST /homes
```
=> sample query
INSERT INTO homes (asking_price,address_line1,address_city,address_state,address_zip) VALUES (950000,'1 S Elliott Pl', 'Brooklyn', 'NY', 88888);

=> sample results
INSERT 0 1

=> sample benchmark
Time: 48.286 ms
```
### PATCH /homes/:id
```
=> sample query
UPDATE homes SET asking_price=7777777, address_zip=78978 WHERE id=10000001;

=> sample results
UPDATE 0

=> sample benchmark
Time: 1.680 ms
```
### DELETE /homes/:id
```
=> sample query
DELETE FROM homes WHERE id=10000001;

=> sample results
DELETE 0

=> sample benchmark
Time: 0.384 ms
```

## Taxes
### GET /taxes/:state
```
=> sample query
SELECT * FROM taxes WHERE state_abr='TX';

=> sample results
 id | state_abr | rate
----+-----------+------
 44 | TX        | 2.39

=> sample benchmark
Time: 0.400 ms
```
## Loans
### GET /loans/
```
=> sample query
SELECT * FROM loans;

=> sample results
 id |     loan_name     | years | interest_rate
----+-------------------+-------+---------------
  1 | 30-year fixed     |    30 |          3.38
  2 | 20-year fixed     |    20 |          3.47
  3 | 15-year fixed     |    15 |          3.04
  4 | 10-year fixed     |    10 |          3.37
  5 | FHA 30-year fixed |    30 |          0.00
  6 | FHA 15-year fixed |    15 |          0.00
  7 | VA 30-year fixed  |    30 |          2.90
  8 | VA 15-year fixed  |    15 |          0.00

=> sample benchmark
Time: 61.073 ms
```


