const mongoose = require('mongoose');
const urls = require('./house.js'); 


mongoose.connect('mongodb://localhost/fec', { useUnifiedTopology: true }, { useNewUrlParser: true });

let imageSchema = mongoose.Schema({
  HouseID: Number,
  URL: String,
});

let Image = mongoose.model('Image', imageSchema);


const seed = (arr) => {
  let count = 1;

  for (let imageArray of arr) {
    for (let images of imageArray) {
      let document = new Image ({
        HouseID: count,
        URL: images
      });
      document.save((err, data) => {
        if (err) {
          throw (err);
        } else {
          console.log(data);
        }
      });
    }
    count++;
  }
};

const duplicateArray = (array, n) => {
  let result = [];

  for (var i = 0; i < n; i++) {
    result = result.concat(array);
  }
  return result;
};

let array100 = duplicateArray(urls, 20);
seed(array100);