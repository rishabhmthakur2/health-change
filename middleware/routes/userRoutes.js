// Router file for User related routes and functionality

// Imports
const express = require("express");
const router = express.Router();
const { uuid } = require("uuidv4");
const { ObjectId } = require("mongodb");

// Importing functions from our MongoHandler utils
const { insertRecordToMongo, findRecords } = require("../utils/mongoHandler");

// Get USER BY ID
// Expects an id as part of the API request params and then searches the MongoDB using the id.
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const userDetails = await findRecords(
      {
        _id: ObjectId(id),
      },
      "user",
      true
    );
    res.json(userDetails);
    res.status(200);
  } catch (e) {
    console.error(e);
    res.error(e);
  }
});

// GET ALL USERS
router.get("/user/", async (req, res) => {
  try {
    const userDetails = await findRecords({}, "user", false);
    res.json(userDetails);
    res.status(200);
  } catch (e) {
    console.error(e);
    res.error(e);
  }
});

// CREATE A NEW USER
router.post("/user", async (req, res) => {
  
  // Future task - REMOVE ME WHEN DONE!
  // We will first trigger KYC verification here!
  // If that succeeds, then we move onto the next steps

  const userId = uuid();
  const userData = {
    userId,
    ...req.body,
  };
  console.log({ userData });
  try {
    const result = await insertRecordToMongo(userData, "user");
    res.json(result);
    res.status(201);
  } catch (e) {
    res.error(e);
    console.error(e);
  }
});

module.exports = router;
