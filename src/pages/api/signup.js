import connectDB from '../../mongo/middleware/mongodb';
import User from '../../mongo/models/user';

const handler = async (req, res) => {
    if(req.method === 'POST') {
        try {
            const user = new User(req.body);
            await user.save();
            const token = await user.generateAuthToken();
            res.status(201).send({user, token})
        }
        catch(e) {
            res.status(400).send(e);
        }
    }
    else {
        res.status(400).send({error: 'Send a POST request instead'})
    }
}

export default connectDB(handler);