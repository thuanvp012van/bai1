const express = require("express");
const router = express.Router();
const StudentController = require("../../app/Controllers/StudentController");

router.get("/", StudentController.index);

router.get("/create", StudentController.create);
router.post("/create", StudentController.store);

router.get('/jwt',StudentController.jwt);

router.get("/:id", StudentController.show);


module.exports = router;
