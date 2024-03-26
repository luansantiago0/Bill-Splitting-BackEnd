const express = require("express");
const router = express.Router();
const billController = require("../controllers/billController");

// Rota para criar uma nova conta de restaurante
router.post("/bills", billController.createBill);

// Rota para adicionar um amigo à conta de restaurante
router.post("/bills/:billId/friends", billController.addFriendToBill);

module.exports = router;
