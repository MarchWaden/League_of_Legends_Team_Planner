const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  champions: []
})

module.exports = mongoose.model('team', teamSchema);
