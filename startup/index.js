import routes from './routes';
import mongoose from 'mongoose';
import passport from 'passport';
import connection from './connection';
import bodyParser from './bodyParser';
import passportMiddleware from '../services/passport';
import serve from './serve';

const startup = app => {
  connection(mongoose);
  bodyParser(app);
  app.use(passport.initialize());
  passportMiddleware(passport);
  routes(app);
  serve(app);
};

export default startup;
