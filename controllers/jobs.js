const Job = require("../models/job");

async function index(req, res) {
	try {
		const jobs = await Job.find({ uid: req.query.uid }).sort("companyName");
		res.status(200).json(jobs);
	} catch (error) {
		res.status(401).json({ error: "something went wrong" });
	}
}
async function create(req, res) {
	try {
		const job = await Job.create(req.body);
		req.query.uid = job.uid;
		index(req, res);
	} catch (error) {
		res.status(401).json({ error: "something went wrong" });
	}
}
module.exports = {
	index,
	create,
};
