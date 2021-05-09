const express = require('express');
const db = require('./../../config/db');
let Item = db.Item;
const router = express.Router();
const uuidv1 = require('uuid').v1;

router.get('/', async (req, res) => {
  await Item.find({}).then((data) => {
    res.send({ status: 200, body: data });
  });
});

router.post('/addItem', async (req, res) => {
  let name = req.body.itemName,
    description = req.body.itemDesc;
  if (!name || !description || name === '' || description === '') {
    return res.send({
      status: 201,
      body: 'Eror : You Should send a name and descreption in body ',
    });
  }
  const newItem = new Item({
    itemId: uuidv1(),
    itemName: name,
    itemDesc: description,
  });
  newItem.save((err) => {
    if (err) {
      return res.send('404');
    }
  });
  return res.send({ status: 200, body: 'save DonE!' });
});

router.get('/getItem', async (req, res) => {
  let id = req.query.id;
  if (!id || id === '') {
    return res.send({
      status: 201,
      body: 'Eror : You Should send an id in params ',
    });
  }
  const data = await Item.findOne({ itemId: id });
  res.send({ status: 200, body: data });
});
module.exports = router;
