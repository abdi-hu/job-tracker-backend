const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = express();

require("./config/database");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/jobs", require("./routes/api/jobs"));

app.listen(port, function () {
	console.log(`Express is listening for AJAX requests on port ${port}`);
});
