import {model, Schema, Types} from 'mongoose'

//interfaces
interface FoodDetails_in {
    foodId : Types.ObjectId;
    quantity : number;
    price : number;

}
interface pendingOrders_in {
    deliveryCompleted : boolean;
    foodDetails : FoodDetails_in[];
    totalAmount : number;
    deliveryAddress : string;
    date : {
        orderDate : Date;
        deliveryDate : Date;
    };
    paymentMethod : string;
    deliveryPerson? : string;
    deliveryPersonPhone? : string;
    isCancelled : boolean;
}
interface CompletedOrders_in extends pendingOrders_in {
    deliveryPersonRating? : number;
    reviewByUser? : {
        reviewText : string;
        rating : number;
        images : string[];
    }
}
interface Orders_in {
    ordersFor : Types.ObjectId;
    pendingOrders : pendingOrders_in[];
    completedOrders : CompletedOrders_in[]
    
}

//schenmas
const pendingOrdersSchema = new Schema<pendingOrders_in>({
    deliveryCompleted: { type: Boolean, default: false, required: true},
    foodDetails : [{ foodId: Schema.Types.ObjectId, quantity: Number, price: Number }],
    totalAmount : { type: Number, required: true },
    deliveryAddress : {type : String, required: true},
    date : { 
            orderDate : { type : Date, default : new Date(), required : true},
            deliveryDate : { type : Date, default : null, required : true}
    },
    paymentMethod : {type : String, required : true},
    deliveryPerson : { type : String},
    deliveryPersonPhone : { type : String},
    isCancelled : { type : Boolean, default : false, required : true}
})
const completedOrdersSchema = new Schema<CompletedOrders_in>({
    deliveryCompleted: { type: Boolean, default: false, required: true },
    foodDetails : [{ foodId: Schema.Types.ObjectId, quantity: Number, price: Number }],
    totalAmount : { type: Number, required: true },
    deliveryAddress : {type : String, required: true},
    date : { 
        orderDate : { type : Date, required : true},
        deliveryDate : { type : Date, default : null, required : true}
    },
    paymentMethod : {type : String, required : true},
    deliveryPerson : { type : String},
    deliveryPersonPhone : { type : String},
    deliveryPersonRating : { type : Number, default : 0},
    reviewByUser : {
        reviewText : { type : String, default : ""},
        rating : { type : Number, default : 0},
        images : { type : [String], default : []}
    }
})
const ordersSchema = new Schema<Orders_in>({
    ordersFor : { types: Schema.Types.ObjectId, ref: 'UserModel' },
    pendingOrders : [pendingOrdersSchema],
    completedOrders : [completedOrdersSchema]
})



export const OrdersModel = model<Orders_in>("OrdersModel", ordersSchema)