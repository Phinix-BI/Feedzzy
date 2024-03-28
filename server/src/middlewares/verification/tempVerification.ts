import  e, { Request, Response } from 'express';
import TempResturantRegisterData,{TempResturantRegister} from '../../models/tempResturantRegisterData.js';
import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport/index.js';
import Twilio from 'twilio';


interface verifyreqData {
    email: string;
    phone: string;
    resturantPhone: string;
    nameOfVerification: string;
    otp: Number;
    otpExpires: Date;
    verified: boolean;
}

export const sendTempOtp = async (req: Request, res: Response): Promise<void> => {
    try{
        const reqData : verifyreqData = req.body;
        if(!reqData){
            res.status(400).json({message: "Invalid data"});
            return;
        }

        const {email, phone, resturantPhone,nameOfVerification }= reqData || '';

        if(!nameOfVerification){
            res.status(400).json({message: "Mention Verfication type"});
            return;
        }


        const otp = Number(otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false }));

        const otpExpires = new Date();
        otpExpires.setMinutes(otpExpires.getMinutes() + 5);

        let createUser : unknown ;

        if(nameOfVerification === "email"){
            if (!email) {
                res.status(400).json({ message: "Invalid data" });
                return;
            }

            const findUser = await TempResturantRegisterData.findOne({ email });

            if(findUser){
                createUser = await TempResturantRegisterData.updateOne({email}, {otp, otpExpires});
            }else{
                createUser = await TempResturantRegisterData.insertMany({
                email, otp, otpExpires
            });
            }

            const result = await otpServiceForEmail(email, otp);

            if(result){
                res.status(200).json({message: "Otp sent successfully",user:createUser});
            }else{
                res.status(500).json({message: "Internal server error"});
            }

           

        }else if(nameOfVerification === "phone"){
            if(!phone){
                res.status(400).json({message: "Invalid data"});
                return;
            }

            const findUser = await TempResturantRegisterData.findOne({ phone });

            if(findUser){
                createUser = await TempResturantRegisterData.updateOne({phone}, {otp, otpExpires});
            }else{
                createUser = await TempResturantRegisterData.insertMany({
                phone,otp,otpExpires
            });
            
            };  

            const result = await otpServiceForPhone(phone, otp);
            


            if(result){
                res.status(200).json({message: "Otp sent successfully",user:createUser});
            }else{
                res.status(500).json({message: "Internal server error"});
            }

        }else if(nameOfVerification === "resturantPhone"){

            if(!resturantPhone){
                res.status(400).json({message: "Invalid data"});
                return;
            }

            const findUser = await TempResturantRegisterData.findOne({resturantPhone});

            if(findUser){
                createUser = await TempResturantRegisterData.updateOne({resturantPhone}, {otp, otpExpires});
            }else{
             createUser = await TempResturantRegisterData.insertMany({
                resturantPhone,otp,otpExpires
            });
             }
             
            const result = await otpServiceForPhone(resturantPhone, otp);
           
            if(result){
                res.status(200).json({message: "Otp sent successfully",user:createUser});
            }else{
                res.status(500).json({message: "Internal server error"});
            }

           
        }

       

    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}

const otpServiceForEmail = async (email: string, otp: Number): Promise<SMTPTransport.SentMessageInfo> => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'OTP for email verification',
        html: `<h3>OTP for email verification is </h3><h1 style="font-weight:bold">${otp}</h1>`
    };

    const result = await transporter.sendMail(mailOptions)

   return result;

}

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = Twilio(accountSid, authToken);

const otpServiceForPhone = async (phone: string, otp: Number): Promise<string> => { 
    try {
        const result = await client.messages.create({
            body: `OTP for phone verification is ${otp}`,
            to: `+91${phone}`,
            from: process.env.TWILIO_PHONE_NUMBER
        });
        
        console.log(result.sid); // Logging the SID of the sent message
        return result.sid; // Returning SID upon successful sending
    } catch(error) {
        console.error(error);
        throw error; // Re-throwing error for handling elsewhere if needed
    }
}

export const verifyTempOtp = async (req: Request, res: Response): Promise<void> => {
    try{
        const {otp} = req.body;

        if(!otp){
            res.status(400).json({message: "Invalid data"});
            return;
        }

        const user = await TempResturantRegisterData.findOne({otp});

        if(!user){
            res.status(400).json({message: "Invalid otp"});
            return;
        }

        const currentTime = new Date();
        if(currentTime > user.otpExpires){
            res.status(400).json({message: "Otp expired"});
            return;
        }

        // await user.deleteOne();

        user.verified = true;
        await user.save();  


        res.status(200).json({message: "Otp verified successfully"});

    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}
    

