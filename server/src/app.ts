import express from 'express';
import connectDB from './db/index.js';
import config from './config/config.js';
import 'dotenv/config';

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
    }
);