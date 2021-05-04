import connectDB from "../../mongo/middleware/mongodb";
import auth from "../../mongo/middleware/auth";

const handler = async (req, res) => {
  if (req.method === "GET") {
      if ((res.hcError == "User not authenticated")) {
        return res.status(400).send({error: "User is not authenticated"});
      }
      const mediaIDs = req.user.list;
      res.send(mediaIDs);
  } else {
    res.status(400).send({ error: "Send a GET request instead" });
  }
};

export default connectDB(auth(handler));
