import MongoClient from "mongodb";
import express from "express";

const ObjectId = MongoClient.ObjectId;

// const app = express();

const url = "cluster0-shard-00-02.kaotp.mongodb.net:27017";
const name = "3r3_dev-Cloud MongoDB";

const dbName = "admin";
const user = "dev";
const password = "l3iEWni76t3km5p5";

// mongoose.connect("mongodb://" + user + ":" + password + "@" + url);

const get = async () => {
	// const list = await getCourses();
	list.map((x) => {
		console.log("  " + x.nom + "(" + x._id + ")");
	});
};

const getCollection = async () => {
	client = await MongoClient.connect(
		"mongodb://" + user + ":" + password + "@" + url,
		{ useUnifiedTopology: true }
	);
	const db = client.db(dbName);
	const collection = db.collection(collectionName);

	return collection;
};

const closeConnection = async () => {
	client.close();
};

const findAll = async () => {
	try {
		const collection = await getCollection();

		const res = await collection.find({});
		const courses = await res.toArray();

		await closeConnection();

		return courses;
	} catch (e) {
		console.log(e);
	}
};

const add = async (cours) => {
	try {
		const collection = await getCollection();

		await collection.insertOne(cours);

		await closeConnection();
	} catch (e) {
		console.log(e);
	}
};

const remove = async (id) => {
	try {
		const collection = await getCollection();

		await collection.findOneAndDelete({ _id: ObjectId(id) });

		await closeConnection();
	} catch (e) {
		console.log(e);
	}
};

getCollection();

export default { findAll, add, remove };
