const mongoose = require('mongoose');
const urls = require('./house.js'); 


mongoose.connect('mongodb://localhost/fec', { useUnifiedTopology: true }, { useNewUrlParser: true });


let imageSchema = mongoose.Schema({
  HouseID: Number,
  URL: String,
});

let Image = mongoose.model('Image', imageSchema);



module.exports = {
  get: (ID, callback) => {
    Image.find({HouseID: ID}, {_id: 0, _v: 0}, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  }
}