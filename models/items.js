const mongoose = require('mongoose'),
	  Notes = require('./notes.js');

const itemSchema = new mongoose.Schema({
	task: String,
	date: {type: Date},
	notes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Notes'
		}
	]
});

module.exports = mongoose.model('Items', itemSchema);