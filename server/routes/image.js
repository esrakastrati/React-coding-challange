const express = require("express");
const router = express.Router();

// import controllers
const { create, read } = require("../controllers/image");

// api routes
router.post("/images", create);
router.get("/images", read);

module.exports = router;