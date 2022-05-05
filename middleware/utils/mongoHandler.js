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

// Fetching HealthChange database from Mongo
const getDatabase = async () => {
  try {
    await mongoClient.connect();
    const database = mongoClient.db("healthchange");
    return database;
  } catch (e) {
    console.error(e);
  }
};

// Inserting a record into our Mongo collection
// Expects: the message to be inserted and the collection to be inserted into
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

// Find records in a mongo collection
// Expects: filter/options for search, collection name to be searched, and a flag that specifies if
// a single record needs to be fetched or all of them
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
