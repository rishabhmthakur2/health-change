const { MongoClient, ServerApiVersion } = require("mongodb");

// Environment file used to host API keys
const dotenv = require("dotenv");
require("dotenv").config();

// Setting up connection config for MongoDB
const uri = process.env.MONGO_URL;
const mongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const getDatabase = async () => {
  try {
    await mongoClient.connect();
    const database = mongoClient.db("healthchange");
    return database;
  } catch (e) {
    console.error(e);
  }
};

const insertRecordToMongo = async (message, _collection) => {
  try {
    const database = await getDatabase();
    const collection = database.collection(_collection);
    const newRecord = await collection.insertOne(message);
    console.log({ newRecord });
    return newRecord;
  } catch (e) {
    console.error(e);
  }
};

const findRecords = async (filter, _collection, findOne) => {
  try {
    const database = await getDatabase();
    const collection = database.collection(_collection);
    if (findOne) {
      const records = await collection.findOne(filter);
      return records;
    } else {
      const records = await collection.find();
      let result = [];
      await records.forEach((record) => {
        result.push(record);
      });
      return result;
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  insertRecordToMongo,
  findRecords,
};
