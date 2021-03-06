'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
**
**	Customer Schema collection
**/
var CustomerSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		trim: true,
		required: 'Please fill in your first name'
	},
	lastName: {
		type: String,
		default: '',
		trim: true,
		required: 'Please fill in your lastname name'
	},
	country: {
		type: String,
		default: '',
		trim: true
	},
	industry: {
		type: String,
		default: '',
		trim: true
	},
	suburb: {
		type: String,
		default: '',
		trim: true
	},
	phone: {
		type: Number,
		default: '',
		trim: true
	},
	referred: {
		type: Boolean
	},
	channel: {
		type: String,
		default: '',
		trim: true
	},
	email: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	rating: {
		type: Array
	},
	reviews: [{
		person: {type: String, default: 'Anon'},
    review: {type: String, default:'NO CONTENT'}
  }]
});

mongoose.model('Customer', CustomerSchema);