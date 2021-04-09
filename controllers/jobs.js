const Job = require("../models/job");

async function index(req, res) {
	const jobs = await Job.find({}).sort("companyName");
	res.status(200).json(jobs);
}
async function create(req, res) {
	try {
		console.log(req.body);
		const job = await Job.create(req.body);
		res.status(201).json(job);
	} catch (error) {}
}
module.exports = {
	index,
	create,
};
