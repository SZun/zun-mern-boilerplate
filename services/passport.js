import { Strategy, ExtractJwt } from 'passport-jwt';
import mongoose from 'mongoose';
import User from '../models/User';
import keys from '../config/keys';

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

const passportMiddleware = passport => {
	passport.use(
		new Strategy(opts, async (jwt_payload, done) => {
			try {
				const user = await User.findById(jwt_payload.id);
				user ? done(null, user) : done(null, false);
			} catch (err) {
				console.log(err.message);
			}
		})
	);
};

export default passportMiddleware;
