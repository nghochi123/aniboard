import connectDB from "../../mongo/middleware/mongodb";
import auth from "../../mongo/middleware/auth";

//Deleting the item id from list.

const handler = async (req, res) => {
  if (req.method === "POST") {
    if (res.hcError == "User not authenticated") {
      return res.status(400).send({ error: "User is not authenticated" });
    }
    if (req.user.list.includes(req.body.itemid)) {
      req.user.list = req.user.list.filter(id => id !== req.body.itemid);
    }
    await req.user.save();
    res.send(req.user.list);
  } else {
    res.status(400).send({ error: "Send a POST request instead" });
  }
};

export default connectDB(auth(handler));
