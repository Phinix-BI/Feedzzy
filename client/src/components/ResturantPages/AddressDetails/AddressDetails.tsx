interface AddressProps {
    
    title : string;
    details: string;

}

const AddressDetails:React.FC<AddressProps> = (props) => {
    return (
        <div className="flex items-center justify-between h-full px-6 mb-7">
            <div>
                <h2 className="text-md font-medium">{props.title}</h2>
            
            </div>
            <div>
                <span className="text-teal-600">{props.details}</span>
            </div>
                                
        </div>
    );
}

export default AddressDetails;