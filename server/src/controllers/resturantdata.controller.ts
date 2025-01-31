import { Request, Response } from 'express';
import RestaurantModel ,{ RestaurantData,RestaurantDetail } from "../models/resturant.model.js"
import TempResturantRegisterData from '../models/tempResturantRegisterData.js';


export const RestaurantRegistrationHandler  = async(req : Request, res : Response) : Promise<void> => {

    
    try {

        const requestData = req.body;

        if(!requestData){
            res.status(400).json({message: "Invalid data"});
            return;
        }

        const {ownerName,phone,email}: RestaurantData  = requestData;

        const {resturantName,resturantPhone,resturantAddress} : RestaurantDetail = requestData;

        if(!ownerName || !phone || !email || !resturantName || !resturantPhone || !resturantAddress){
            res.status(400).json({message: "Invalid data"});
            return;
        }

        // check if the email and phone already exists

        const checkEmail = await RestaurantModel.findOne({email});
        if(checkEmail){
            res.status(400).json({message: "Email already exists"});
            return;
        }

        const checkPhone = await RestaurantModel.findOne({phone});
        if(checkPhone){
            res.status(400).json({message: "Phone already exists"});
            return;
        }

        const checkResturantPhone = await RestaurantModel.findOne({"RestaurantBasicDetails.resturantPhone":resturantPhone});
        if(checkResturantPhone){
            res.status(400).json({message: "Restaurant phone already exists"});
            return;
        }

        const  RestaurantBasicDetails : RestaurantDetail = {
            resturantName, resturantPhone,resturantAddress
          };

          const checkPhoneVerification = await TempResturantRegisterData.findOne({phone});
            if(checkPhoneVerification?.verified === false || !checkPhoneVerification){
                res.status(400).json({message: "Phone not verified"});
                return;
            }
            
            const checkEmailVerification = await TempResturantRegisterData.findOne({email});
            if(checkEmailVerification?.verified === false || !checkEmailVerification){
                res.status(400).json({message: "Email not verified"});
                return;
            }

            const checkResturantPhoneVerification = await TempResturantRegisterData.findOne({phone : resturantPhone});

            if(checkResturantPhoneVerification?.verified === false || !checkResturantPhoneVerification){
               
                res.status(400).json({message: "Restaurant phone not verified"});
                return;
            }

        const restaurant = await RestaurantModel.insertMany({
            ownerName,phone,email,RestaurantBasicDetails   
        });  

        await Promise.all([
            checkPhoneVerification.deleteOne(),
            checkEmailVerification.deleteOne(),
            ...(phone !== resturantPhone ? [checkResturantPhoneVerification.deleteOne()] : [])
        ]);

        res.status(200).send({ restaurant });

    } catch (error) {

        res.status(500).json({message: "Internal server error"})

    }
}