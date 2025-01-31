import mongoose,{Schema} from "mongoose";


export interface TempResturantRegister{
    email: string;
    phone: string;
    resturantPhone: string;
    verified: boolean;
    otp: Number;
    otpExpires: Date;
}

const TempResturantRegisterDataSchema = new Schema<TempResturantRegister>({
    email:  String,
    phone:  String,
    resturantPhone:  String,
    verified:{ type : Boolean,default : false},
    otp : Number,
    otpExpires: { type: Date }
});

const TempResturantRegisterData = mongoose.model('TempResturantRegisterData', TempResturantRegisterDataSchema);

export default TempResturantRegisterData;