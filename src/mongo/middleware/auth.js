import jwt from 'jsonwebtoken';
import User from '../../mongo/models/user';

const auth = handler => async (req, res) => {
    try {
        const token = req.headers.authorization.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token});
        if(!user){
            res.hcError = "User not authenticated";
            return handler(req, res);
        }
        req.token = token;
        req.user = user;
        return handler(req, res);
    } catch (e) {
        res.hcError = "User not authenticated";
        return handler(req, res);
    }
}

export default auth;