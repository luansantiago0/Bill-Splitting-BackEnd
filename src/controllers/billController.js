const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createBill = async (req, res) => {
  try {
    const { totalAmount } = req.body;
    const newBill = await prisma.bill.create({ data: { totalAmount } });
    res.status(201).json(newBill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating bill" });
  }
};

const addFriendToBill = async (req, res) => {
  try {
    const { billId, friendName } = req.body;
    const bill = await prisma.bill.findUnique({ where: { id: billId } });
    if (!bill) {
      return res.status(404).json({ error: "Bill not found" });
    }
    const friend = await prisma.friend.create({ data: { name: friendName } });
    await prisma.bill.update({
      where: { id: billId },
      data: { friends: { connect: { id: friend.id } } },
    });
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
