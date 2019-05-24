const mongoose = require('mongoose'), 
	  Item = require('./items.js');

const listSchema = new mongoose.Schema({
	items: [
		{
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'Item'
		}
	]
});

module.exports = mongoose.model('List', listSchema);