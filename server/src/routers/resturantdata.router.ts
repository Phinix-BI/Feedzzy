import express from 'express';
import { RestaurantRegistrationHandler } from '../controllers/resturantdata.controller.js';
import { sendTempOtp, verifyTempOtp } from '../middlewares/verification/tempVerification.js';

const router = express.Router();

router.post('/resturnat/v1/basic/register', RestaurantRegistrationHandler);

// generate the otp for the email, phone and resturant phone verification before registration
router.post('/resturnat/v1/basic/send/otp', sendTempOtp);
router.post('/resturnat/v1/basic/verify/otp', verifyTempOtp);

export default router;