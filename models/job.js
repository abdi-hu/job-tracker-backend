const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
	{
		uid: String,
		companyName: String,
		title: String,
		dateApplied: Date,
		description: String,
		location: String,
		siteApplied: String,
		email: String,
		open: {
			type: Boolean,
			default: true,
		},
		updates: [],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
