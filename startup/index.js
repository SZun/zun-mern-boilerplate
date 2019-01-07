import routes from './routes';
import mongoose from 'mongoose';
import passport from 'passport';
import connection from './connection';
import bodyParser from './bodyParser';
import passportMiddleware from '../services/passport';

const startup = app => {
  connection(mongoose);
  bodyParser(app);
  app.use(passport.initialize());
  passportMiddleware(passport);
  routes(app);
};

export default startup;
