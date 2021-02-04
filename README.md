# Mortgage Calulator

### An affordability estimator service
Calculates how much propsective home buers can expect to pay in monthly mortgage payments, broken down by...
* Principle & Interest
* Property Taxes
* Home insurance
* Mortgage Insurance
# Backend Design
## Endpoints
### Homes resource
  #### GET /homes/:id
  Queries homes table by id. Provides listing page with top-line relevant data. Provides mortgage calculator with home price and US state values.
  * id param required
  * no request body required
  * returns a single home record & 200 satus code
  ```
// example request
get('/homes/8765');

// example response
{
    id: 8765,
    asking_price: 6789433.80,
    address_line1: 1117 Glory Ln,
    address_line2: #5,
    address_city: Maui,
    addres_state: HI,
    address_address_zip: 94602,
    address_address_country: US,
}
  ```
  #### POST /homes
  Adds record to homes table. Allows sellers and landlords to post listings to the homes table. Not relevant to mortgage calculator.
  * no params required
  * request body required
  * returns a single home record & 201 status code
  ```
// example request
post('/homes/');

// example request body
{
    asking_price: 6789433.80,
    address_line1: 1117 Super St,
    address_line2: ,
    address_city: Gorgeous,
    addres_state: TX,
    address_address_zip: 10103,
    address_address_country: US,
}

// example response
{
    id: 11269334,
    asking_price: 6789433.80,
    address_line1: 1117 Super St,
    address_line2: ,
    address_city: Gorgeous,
    addres_state: TX,
    address_address_zip: 10103,
    address_address_country: US,
}
  ```
  #### PATCH /homes/:id
  Update record in homes table. Allows sellers and landlords to update listing details in the homes table. Not relevant to mortgage calculator.
  * id param required
  * request body required
  * returns a single home record & 200 status code
  ```
// example request
patch('/homes/4588');

// example request body (this example only updates asking price)
{
    asking_price: 2125399,
}

// example response
{
    id: 4588,
    asking_price: 2125399,
    address_line1: 1490 Yellow Yd,
    address_line2: #9,
    address_city: Revolutionary,
    addres_state: RI,
    address_address_zip: 00369,
    address_address_country: US,
}
  ```
  #### DELETE /homes/:id
  Delete record from homes table. Allows sellers and landlords to delete listings from the homes table. Not relevant to mortgage calculator.
  * id param required
  * no request body required
  * returns a 204 status code

  ```
// example request
delete('/homes/4588');

// example response
204 deletion successful
  ```
### Loans resource
  #### GET /loans/
  Queries all records in loans table. Populates mortgage calculator's loans drop-down.
  * no params required
  * no request body required
  * returns an set of records & a 200 status code
  ```
// example request
get('/loans/');

// example response
[
    {
      id: 3,
      name: you'll never qualify,
      years: 30,
      interest_rate: 0.03,
    },
    {
      id: 7,
      name: i dare you to accept these terms,
      years: 10,
      interest_rate: 0.68,
    },
    ...
]
  ```
### Taxes resource
  #### GET /taxes/:state
  Queries a single record in the Taxes table by state. Provieds calculator with tax rate value.
  * state param required
  * no request body required
  * returns a single record & a 200 status code
  ```
// example request
get('/taxes/TX');

// example response
  {
    id: 27,
    state: TX,
    effective_rate: 0
  },
  ```
## Database selection
### PostgreSQL
- This service’s workloads are primarily read and PostgreSQL’s concurrency advantages over MySQL allow the sevice to maintain performance at high traffic volumes on a large dataset.
- This service is not transaction-heavy and only demands a single record returned per page-load so MySQL’s advantages in read-heavy workloads aren't relevant.
- The team for this project is almost religiously LEAN and iterates rapidly so PostgreSQL’s extensibility is another advantage in this context.
- Finally, the team is excited leverage PostgreSQL’s reputation for reliability and performance.
## Database schema
### Homes table
| key | property name | data type |
| --- | ------------- | --------- |
| PK  | id            | integer   |
|     | asking_price  | float     |
|     | address_line1 | string    |
|     | address_line2 | string    |
|     | address_city  | string    |
|     | address_state | string    |
|     | address_zip   | string    |
|     | address_country   | string    |
### Loans table
| key | property name | data type |
| --- | ------------- | --------- |
| PK  | id            | integer   |
|     | name          | string    |
|     | years         | integer   |
|     | interest_rate | float     |
### Taxes table
| key | property name  | data type |
| --- | -------------- | --------- |
| PK  | id             | integer   |
|     | state          | string    |
|     | effective_rate | float     |

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# ~END API Schema Approval~
# Frontend Design
## Related Projects

  - https://github.com/Archon-Design/similar-homes
  - https://github.com/Archon-Design/PhotoGallery
  - https://github.com/Archon-Design/Local-Review


Page Speed:

<p align="center">
<img src="loadSpeed.jpg" width="60%"></p>

snap shot of component:
 <p align="center">
 <img src="snapShot.jpg" width="60%"></p>


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Requirements


- Node v12.18.4


- MongoDB v4.4.0


## Development

### Installing Dependencies

From within the root directory:

npm install : installs packages and dependencies necessary.

npm run start : Will start the server and setup the project.

npm run react-dev : Will run webpack bundler.

npm run seed: seeds the database.

npm run test : runs testing suite and gives a coverage report.
