import { Schema, model, Types } from 'mongoose';


//interfaces
interface User_in {
    userName : string;
    email : string;
    phoneNo : string;
    address : string;
    bookmarks : string;
    orders : Types.ObjectId;
}

interface Address_in {
   landmark : string;
   completeAddress : string;
   googleAddress : string;
}

interface Bookmarks_in {
    resturents :Types.ObjectId[];
    foods : Types.ObjectId[];
}


//schemas
const addressSchema = new Schema<Address_in>({
    landmark : { type:String, required:true },
   completeAddress : { type:String, required:true },
   googleAddress : { type:String, required:true }

}) 

const bookmarksSchema = new Schema<Bookmarks_in>({
    resturents : [{type: Schema.Types.ObjectId, ref: 'ResturentModel'}], //ref to resurrent schema
    foods : [{type: Schema.Types.ObjectId, ref: 'FoodModel'}],
})

const userSchema = new Schema<User_in>({   
        userName : { type:String, required:true },
        email : { type:String, required:true },
        phoneNo : { type:String, required:true },
        address : addressSchema,
        bookmarks : bookmarksSchema,
        orders : { types:Schema.Types.ObjectId, ref: 'OrdersModel' }
})



export const UserModel = model<User_in>('UserModel', userSchema);