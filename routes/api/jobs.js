const router = require("express").Router();
const jobsCtrl = require("../../controllers/jobs");

router.get("/", jobsCtrl.index);
router.post("/", jobsCtrl.create);
router.put("/:id", jobsCtrl.update);

module.exports = router;
