import {serialize} from 'cookie';
import connectDB from "../../mongo/middleware/mongodb";
import User from "../../mongo/models/user";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const user = await User.findByCredentials(
        req.body.username,
        req.body.password
      );
      const token = await user.generateAuthToken();
      res.setHeader('Set-Cookie', serialize('token', token, {httpOnly: true, sameSite: true}));
      res.send({ user, token });
    } catch (e) {
      res.status(400).send("Incorrect username or password");
    }
  } else {
    res.status(400).send({ error: "Send a POST request instead" });
  }
};

export default connectDB(handler);
