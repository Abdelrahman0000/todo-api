const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = mongoose.Schema({
	text: {
		type: String,
		required: false
	},
	complete: {
		type: Boolean,
		default: false
	},
	timestamp: {
		type: String,
		default: Date.now()
	}
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;