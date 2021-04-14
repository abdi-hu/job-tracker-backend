//TODO: establish connection to mongoDB
const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect(`${process.env.DB_URI}`, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

db.on("connected", () => {
	console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
