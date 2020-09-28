const express = require("express");
const router = express.Router();

const DashBoardController=require('../../app/Controllers/DashBoardController');

router.get("/", DashBoardController.index);

module.exports = router;
