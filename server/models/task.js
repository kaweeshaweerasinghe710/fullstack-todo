const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true 
  },
  description: { 
    type: String, 
    trim: true 
  },
  done: { 
    type: Boolean, 
    default: false 
  }
}, { 
  timestamps: true,
  collection: 'tasks'
});

module.exports = mongoose.model('Task', taskSchema);