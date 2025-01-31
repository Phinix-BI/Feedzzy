interface OrderItemsProps {
    customerName: string;
    orderNumber: number;
    items: number;
}

const OrderItems:React.FC<OrderItemsProps> = (props) => {

    return(
    
        <div className="flex items-center justify-between h-full px-6 mb-5">
            <div>
                <h2 className="text-lg font-semibold">{props.customerName}</h2>
                <p className="text-yellow-600 text-sm">Order #{props.orderNumber}</p>
            </div>
            <div>
                <span className="text-teal-600">{props.items}{(props.items > 1) ? ` items` : ` item`}</span>
            </div>
        </div>
    
    );
}

export default OrderItems;
