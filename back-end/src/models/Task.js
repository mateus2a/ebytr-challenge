const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const taskSchema = mongoose.Schema({
  name: String,
  status: String,
});

autoIncrement.initialize(mongoose.connection);
taskSchema.plugin(autoIncrement.plugin, 'task');

const postTask = mongoose.model('task', taskSchema);

module.exports = postTask;