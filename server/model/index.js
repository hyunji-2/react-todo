const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: { type: String, require: true },
  isComplete: { type: Boolean, default: false },
  createdAt: {type: Date, default: Date.now }
}, { collection: 'todo' });

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };

