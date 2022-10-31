const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Account = new Schema({
    username: { type: String, required: true,  },
    email: { type: String,required: true,},
    password: { type: String, maxLength: 600},
    image: { type: String,},
    slug: { type: String, slug: 'username', unique: true},
    
  }, {
      timestamps: true,
  });

  module.exports = mongoose.model('Account', Account);