import express from 'express';
import { RestaurantRegistrationHandler } from '../controllers/resturantdata.controller.js';

const router = express.Router();

router.post('/resturnat/v1/basic/register', RestaurantRegistrationHandler);

export default router;