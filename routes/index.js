const express = require("express");
const router = express.Router();
const getResults = require("../scraper");
/* GET home page. */
router.get("/", async function(req, res, next) {
  const result = await getResults();
  console.log('RESULT========>',result);
});
module.exports = router;
