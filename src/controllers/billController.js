const { Bill, Friend } = require("../models");

const createBill = async (req, res) => {
  try {
    const { totalAmount } = req.body;
    const newBill = await Bill.create({ totalAmount });
    res.status(201).json(newBill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating bill" });
  }
};

const addFriendToBill = async (req, res) => {
  try {
    const { billId, friendName } = req.body;
    const bill = await Bill.findByPk(billId);
    if (!bill) {
      return res.status(404).json({ error: "Bill not found" });
    }
    const friend = await Friend.create({ name: friendName });
    await bill.addFriend(friend);
    res.status(200).json({ message: "Friend added to bill successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding friend to bill" });
  }
};

module.exports = {
  createBill,
  addFriendToBill,
};
