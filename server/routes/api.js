const express = require('express');
const api = require('../../db/pg_models/api.js');

const router = express.Router();

// HOMES
router.get('/homes/:id', (req, res) => {
  api.getHome(req.params.id)
    .then((home) => { res.status(200).send(home.rows[0] || { resp: `No home with id ${req.params.id} exists.` }); })
    .catch((err) => { res.status(400).send(err); });
});
// router.get();
// router.get();

// TAXES
router.get('/taxes', (req, res) => {
  api.getTaxes()
    .then((taxes) => { res.status(200).send(taxes.rows); })
    .catch((err) => { res.status(400).send(err); });
});

router.get('/taxes/:state', (req, res) => {
  api.getTax(req.params.state.toUpperCase())
    .then((tax) => { res.status(200).send(tax.rows[0] || { resp: `No tax with state abbreviation ${req.params.state} exists.` }); })
    .catch((err) => { res.status(400).send(err); });
});

// LOANS
router.get('/loans', (req, res) => {
  api.getLoans()
    .then((loans) => { res.status(200).send(loans.rows); })
    .catch((err) => { res.status(400).send(err); });
});

module.exports = router;
