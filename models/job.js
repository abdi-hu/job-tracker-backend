const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const updateSchema = new Schema(
	{
		text: String,
	},
	{ timestamps: true }
);
const jobSchema = new Schema(
	{
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
		updates: [updateSchema],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
