const router = require("express").Router();
const jobsCtrl = require("../../controllers/jobs");

router.get("/", jobsCtrl.index);
router.post("/", jobsCtrl.create);
router.put("/:id", jobsCtrl.update);
router.post("/:id", jobsCtrl.createUpdate);

module.exports = router;
