import mongoose, { Schema, Document } from 'mongoose';

// Define sub schemas

export interface Documents {
    panCard: string;
    aadharCard: string;
    foodLicense: string;
    gst: string;
}

export interface RestaurantDetail {
    resturantName: string;
    images ?: string[];
    resturantAddress: string;
    resturantPhone: string;
    hours ?: string;
    rating ?: number;
    cuisine ?: string;
}

export interface Category {
    category: string;
    subCategory: string;
    dishName: string;
    price: number;
    description: string;
    banner: string;
    veg: boolean;
    reviews: string[];
}

export interface IncomeDetails {
    prevIncome: number;
    currentIncome: number;
    totalIncome: number;
    totalOrders: number;
    todaysOrders: number;
    serviceCharge: number;
    totalServiceCharge: number;
}

export interface UserReview {
    userName: string;
    userImage: string;
    userReview: string;
    userRating: number;
    userOrder: string;
    userOrderImage: string;
}

// Define main schema

export interface RestaurantData extends Document {
    ownerName: string;
    phone: string;
    email: string;
    documents: Documents;
    RestaurantBasicDetails: RestaurantDetail;
    Categories: Category[];
    IncomeDetails: IncomeDetails;
    UserReviews: UserReview[];
}

const DocumentsSchema = new Schema<Documents>({
    panCard: String,
    aadharCard: String,
    foodLicense: String,
    gst: String,
});

const RestaurantDetailSchema = new Schema<RestaurantDetail>({
    resturantName: String,
    images: [String],
    resturantAddress: String,
    resturantPhone: String,
    hours: String,
    rating: Number,
    cuisine: String,
});

const CategorySchema = new Schema<Category>({
    category: String,
    subCategory: String,
    dishName: String,
    price: Number,
    description: String,
    banner: String,
    veg: Boolean,
    reviews: [String],
});

const IncomeDetailsSchema = new Schema<IncomeDetails>({
    prevIncome: Number,
    currentIncome: Number,
    totalIncome: Number,
    totalOrders: Number,
    todaysOrders: Number,
    serviceCharge: Number,
    totalServiceCharge: Number,
});

const UserReviewSchema = new Schema<UserReview>({
    userName: String,
    userImage: String,
    userReview: String,
    userRating: Number,
    userOrder: String,
    userOrderImage: String,
});

const RestaurantDataSchema = new Schema<RestaurantData>({
   
    ownerName: String,
    phone: String,
    email: String,
    documents: DocumentsSchema,
    RestaurantBasicDetails: RestaurantDetailSchema,
    Categories: [CategorySchema],
    IncomeDetails: IncomeDetailsSchema,
    UserReviews: [UserReviewSchema],
});

const RestaurantModel = mongoose.model<RestaurantData>('RestaurantData', RestaurantDataSchema);

export default RestaurantModel;
