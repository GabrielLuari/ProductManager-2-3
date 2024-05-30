const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Min lenght is 3 charachter long"]
      },
      price: {
        type: Number,
        required: [true, "Price is required"]
      }, 
      description:{
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Min lenght is 3 charachter long"]
      }
    },{timestamps: true});
module.exports = mongoose.model('Person', PersonSchema);

