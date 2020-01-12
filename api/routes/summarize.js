const express = require("express");
const router = express.Router();

//validators

//controllers
const summarizeCtrl = require("../controllers/summarize.controller");

//middleware

//routes
router.route("/summarize-text").post(summarizeCtrl.summarizeTextCtrl);

module.exports = router;