// Importing packages
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import path from 'path';

// Initializing app and Port
const app = express();
const PORT = process.env.PORT || 8080;

// Importing Middlwares
import mongooseConnection from './startup/connection';
import bodyParserMiddleware from './startup/bodyParser';
import passportMiddleware from './services/passport';

// Middlewares
mongooseConnection(mongoose);
bodyParserMiddleware(app);
app.use(passport.initialize());
passportMiddleware(passport);

// Routes
import routes from './startup/routes';
routes(app);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  try {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

// Connecting to Port
app.listen(PORT, console.log(`Listening on port ${PORT}`));
