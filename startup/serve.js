import express from 'express';
import path from 'path';

const serve = app => {
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
};

export default serve;
