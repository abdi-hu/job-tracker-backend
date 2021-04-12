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
	console.log(req.body);
	try {
		const job = await Job.create(req.body);
		req.query.uid = job.uid;
		index(req, res);
	} catch (error) {
		res.status(401).json({ error: "something went wrong" });
	}
}
async function update(req, res) {
	try {
		const updatedSkill = await Job.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		req.query.uid = updatedSkill.uid;
		index(req, res);
	} catch (error) {
		res.status(401).json({ error: "something went wrong" });
	}
}
async function createUpdate(req, res) {
	console.log(req.body);
	console.log(req.params.id);
	try {
		const newUpdate = await Job.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		req.query.uid = newUpdate.uid;
		index(req, res);
	} catch (error) {}
}
module.exports = {
	index,
	create,
	update,
	createUpdate,
};
