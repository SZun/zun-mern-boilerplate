import express from 'express';
import startup from './startup';

const app = express();
const PORT = process.env.PORT || 8080;

startup(app);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
