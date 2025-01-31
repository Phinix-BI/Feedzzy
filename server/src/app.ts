import express from 'express';
import connectDB from './db/index.js';
import config from './config/config.js';
import cors from 'cors';
import 'dotenv/config'
import resturantdata from './routers/resturantdata.router.js';


const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',resturantdata);

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.post('/resturnat/v1/basic/register', resturantdata);
app.post('/resturnat/v1/basic/send/otp', resturantdata);
app.post('/resturnat/v1/basic/verify/otp', resturantdata);



app.listen(config.server.port, () => {
        console.log(`Server is running on port ${config.server.port}`);
        }
);