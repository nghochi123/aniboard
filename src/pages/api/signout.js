import connectDB from "../../mongo/middleware/mongodb";
import auth from "../../mongo/middleware/auth";

const handler = async (req, res) => {
  if (req.method === "POST") {
      if ((res.hcError == "User not authenticated")) {
        return res.status(400).send({error: "User is not authenticated"});
      }
      req.user.tokens = [];
      await req.user.save();
      res.send('OK');
  } else {
    res.status(400).send({ error: "Send a POST request instead" });
  }
};

export default connectDB(auth(handler));
