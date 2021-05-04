import jwt from 'jsonwebtoken';
import User from '../../mongo/models/user';
import cookie from 'cookie';

const auth = handler => async (req, res) => {
    try {
        const token = cookie.parse(req.headers.cookie || '').token;
        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token});
        if(!user){
            res.hcError = "User not authenticated";
            return handler(req, res);
        }
        req.token = token;
        req.user = user;
        return handler(req, res);
    } catch(e) {
        res.hcError = "Other Error";
        return handler(req, res);
    }
}

export default auth;