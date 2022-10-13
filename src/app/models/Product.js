const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Product = new Schema({
    name: { type: String, required: true,  },
    description: { type: String, maxLength: 600},
    image: { type: String,},
    price: { type: String,required: true,},
    slug: { type: String, slug: 'name', unique: true},
    
  }, {
      timestamps: true,
  });

  module.exports = mongoose.model('Product', Product);