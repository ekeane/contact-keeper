const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc Get all users contacts
// @access Private --> you have to be logged in to see
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route POST api/contacts
// @desc Add a new contact
// @access Private
router.post("/", (req, res) => {
  res.send("Add a contact");
});

// @route PUT api/contacts/:id
// @desc Update contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update a contact");
});

// @route DELETE api/contacts/:id
// @desc Delete contact
// @access Private
router.delete("/:id", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
