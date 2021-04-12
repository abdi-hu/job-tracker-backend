const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const updateSchema = new Schema(
// 	{
// 		text: String,
// 	},
// 	{ timestamps: true }
// );
const jobSchema = new Schema(
	{
		uid: String,
		companyName: String,
		title: String,
		dateApplied: Date,
		location: String,
		siteApplied: String,
		email: String,
		open: {
			type: Boolean,
			default: true,
		},
		updates: Array,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
