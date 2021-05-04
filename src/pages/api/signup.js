import connectDB from '../../mongo/middleware/mongodb';
import {serialize} from 'cookie'
import User from '../../mongo/models/user';

const handler = async (req, res) => {
    if(req.method === 'POST') {
        try {
            const duplicate = await User.findOne({username: req.body.username});
            if(duplicate){
                return res.status(200).send({error: 'duplicate'})
            }
            const user = new User(req.body);
            await user.save();
            const token = await user.generateAuthToken();
            res.setHeader('Set-Cookie', serialize('token', token, {httpOnly: true, sameSite: true}));
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