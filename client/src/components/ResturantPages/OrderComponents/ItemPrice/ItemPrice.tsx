
interface ItemPriceProps {
        itemName : string;
        quantity ?: number;
        itemPrice : number;
        itemDescription ?: string;
    }

const ItemPrice : React.FC<ItemPriceProps> = (props) => {
    return (
        <div className="flex items-center justify-between h-full px-6 mb-7">
            <div>
                <h2 className="text-md font-medium">{props.itemName}</h2>
                <p className="text-yellow-600 text-sm">{props.quantity} {(props.quantity) ? `x` : ''} {props.itemDescription}</p>
            </div>
            <div>
                <span className="text-teal-600">₹{props.itemPrice.toFixed(2)}</span>
            </div>

        </div>
    );
}

export default ItemPrice;