
import AddressDetails from "../../AddressDetails/AddressDetails.tsx";
import ItemPrice from "../ItemPrice/ItemPrice.tsx";
import Order_Items from "../OrderItems/OrderItems.tsx";

  
  const OrderStatus: React.FC = () => {
return (

    <>
       
        <div className="max-w-screen-xl mx-auto mt-10">
            <div>
                <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-6 ">
                    <div className="h-fit bg-white-200">
                        <div className="font-semibold text-2xl px-6 py-4">
                            <h1>Orders</h1>
                        </div>
                        <Order_Items customerName="John Smith" orderNumber={1234} items={3} />
                        <Order_Items customerName="John Doe" orderNumber={1234} items={1} />
                        <Order_Items customerName="John Aolt" orderNumber={1234} items={2} />
                    </div>
                    <div className="h-fit border-l-2 bg-white-200 lg:col-span-2 ">
                        <div>
                             <div className="font-bold text-3xl px-6 py-4 my-3">
                                <h1>John Smith</h1>
                            </div>

                            <AddressDetails title="Delivery Address" details="123 Main Street, Unit 4, San Francisco, CA 94107" />
                            <AddressDetails title="Delivery Instructions" details="Please call me at 415-123-4567" />
                            <ItemPrice itemName="Chicken Tikka Masala" quantity={2} itemPrice={400.00} itemDescription="Chicken Tikka Masala" />
                            <ItemPrice itemName="Naan" quantity={3} itemPrice={149.99} itemDescription="Naan" />
                            <ItemPrice itemName="Total" itemPrice={549.99} />

                            <div className="flex justify-end h-30 gap-6 mx-5 my-5">

                               <button type="button" className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none">Cancel Order</button>

                               <button type="button" className="inline-block rounded bg-orange-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none">Accept Order</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    );
}


export default OrderStatus;