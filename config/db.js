const mongoose = require('mongoose');

var mongoDB =
  'mongodb+srv://puser:15935746@cluster0.gak4t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Databases Connected !!!');
  })
  .catch(() => {
    console.log(err);
  });

const itemShema = mongoose.Schema({
  itemId: { type: String, required: true },
  itemName: { type: String, required: true },
  itemDesc: { type: String, required: true },
});

const Item = mongoose.model('item', itemShema);

module.exports.Item = Item;
