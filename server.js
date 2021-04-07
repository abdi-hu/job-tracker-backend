const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
	res.send("<h1>It works</h1>");
});

app.listen(port, function () {
	console.log(`Express is listening for AJAX requests on port ${port}`);
});
