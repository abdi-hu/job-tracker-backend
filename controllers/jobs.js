const Job = require("../models/job");

async function index(req, res) {
	const jobs = await Job.find({});
	res.status(200).json(jobs);
}
async function create(req, res) {
	const job = await Job.create(req.body);
	res.status(201).json(job);
}
module.exports = {
	index,
	create,
};
