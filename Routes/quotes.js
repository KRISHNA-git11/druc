const express = require('express');
const router = express.Router();

// Import model

const Quote = require('../models/Quote');

// @route POST /api/quotes
// @desc post some quotes

router.post('/', async (req, res) => {
  // const quote = new Quote({
  //     author: req.body.author,
  //     quote: req.body.quote,
  //     date : req.body.date
  // })
  try {
    const demo = await Quote.create(req.body);
    res.json(demo);
  } catch (err) {
    res.send('Error');
  }
});

// @route GET /api/quotes
// @desc get some quotes

router.get('/', async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
});

// @route GET /api/quotes/:id
// @desc get quote of certain id
router.get('/:id', async (req, res) => {
  const quotes = await Quote.findById(req.params.id);
  res.json(quotes);
});

// @route PUT /api/quotes/:id
// @desc update any quote

router.put('/:id', async (req, res) => {
  //   const { author, quote } = req.body;
  // Build a quode object to capture the changes
  //   const quotesBody = {};
  //   if (author) quotesBody.author = author;
  //   if (quote) quotesBody.quote = quote;

  try {
    quote = await Quote.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // (
    //   req.params.id,
    //   {
    //     $set: quotesBody,
    //   },
    //   {
    //     new: true,
    //   }
    // );
    res.json(quote);
  } catch (error) {
    res.send('error');
  }
});

// @route DELETE /api/quotes/:id
// @desc Delete any quote

router.delete('/:id', async (req, res) => {
  await Quote.findByIdAndRemove(req.params.id);
  res.send('Quote deleted');
});

module.exports = router;
