import { Request, Response } from 'express';
import RestaurantModel ,{ RestaurantData,RestaurantDetail } from "../models/resturant.model.js"


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

        const restaurant = await RestaurantModel.insertMany({
            ownerName,phone,email,RestaurantBasicDetails   
        });  

        res.status(200).send({ restaurant });

    } catch (error) {

        res.status(500).json({message: "Internal server error"})

    }
}