'use strict';

const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  templateString: {
    type: Array,
    required: true
  },
  requiredWords: {
    type: Array,
    required: true
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
