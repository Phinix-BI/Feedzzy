import React, { useState } from 'react';

interface Owners_contact_details_Props {
    ownerFullName: string;
    resturantName: string;
    resturantAddress: string;
  
    onChangeOwnerFullName: (ownerFullName: string) => void;
    onChangeResturantName: (resturantName: string) => void;
    onChangeResturantAddress: (resturantAddress: string) => void;
  
}

const Owners_Contact_Details: React.FC<Owners_contact_details_Props> = ({ ownerFullName, resturantName, resturantAddress, onChangeOwnerFullName, onChangeResturantName, onChangeResturantAddress}) => {
    const[isAddressSideBarOpen, setIsAddressSideBarOpen] = useState<boolean>(false);

    const handleEdit  = ():void => {
        
        setIsAddressSideBarOpen(!isAddressSideBarOpen);
    }

    return (
        <>  
        <div className="bg-white rounded-3xl mx-4 my-6 px-5">
            <div className="px-5 py-5 font-semibold text-lg">
                <h2>Basic Details</h2>
            </div>
            <div className="pb-4">
                <div className="px-5 py-3">
                    <label htmlFor="Username" className="w-full  relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <input type="text" id="Username" className=" w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder=" Owners Full Name" value={ownerFullName} onChange={(e) => onChangeOwnerFullName(e.target.value)} />

                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs" >
                            Owners Full Name
                        </span>
                    </label>
                </div>
                <div className="px-5 py-3">
                    <label htmlFor="Resturantname" className="w-full  relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <input type="text" id="Resturantname" className="w-full  peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Resturnat name" value={resturantName} onChange={(e) => onChangeResturantName(e.target.value)} />

                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs" >
                            Resturnat Name
                        </span>
                    </label>
                </div>
                <div className="px-5 py-3 ">
                    <div className="relative">
                        <label htmlFor="ResturantAddress" className="w-full  relative block rounded-md border border-gray-200 shadow-sm ">
                            <input type="text" id="resturantAddress" className="w-full peer border-none bg-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Resturnat Complete Address" value=    {resturantAddress} onChange={(e) => onChangeResturantAddress(e.target.value)} readOnly />
                           
                        </label>
                         <div  className="absolute end-0  top-0.5 cursor-pointer px-4 py-1.5 text-md font-medium text-orange-600 " onClick={handleEdit}>Edit</div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Owners_Contact_Details;