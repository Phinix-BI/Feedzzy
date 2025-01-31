import React from 'react';

interface Owners_contact_details_Props {
    ownerEmailAddress: string;
    ownerPhoneNumber: string;
    whatsappNumber ?: string;
    isDiffWhatsappNumber ?: boolean;
  
    onChangeOwnerEmailAddress : (ownerEmailAddress: string) => void;
    onChangeOwnerPhoneNumber : (ownerPhoneNumber: string) => void;
    onChangeWhatsappNumber ?: (whatsappNumber: string) => void;
    onChangeIsDiffWhatsappNumber ?: (isDiffWhatsappNumber: boolean) => void;
  
}

const Owners_Contact_Details: React.FC<Owners_contact_details_Props> = ({ ownerEmailAddress, ownerPhoneNumber, whatsappNumber,isDiffWhatsappNumber,onChangeOwnerEmailAddress, onChangeOwnerPhoneNumber, onChangeWhatsappNumber,onChangeIsDiffWhatsappNumber}) => {
   
    const handelRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === 'ColorBlue1') {
            onChangeIsDiffWhatsappNumber && onChangeIsDiffWhatsappNumber(false);
        } else if (onChangeIsDiffWhatsappNumber) {
            onChangeIsDiffWhatsappNumber(true);
        }
    };

    return (
        <>  
        <div className="bg-white rounded-3xl mx-4 my-6 px-5">
            <div className="px-5 py-5 font-semibold text-lg">
                <h2>Owner Contact Details</h2>
                <div className='mt-2 text-sm text-zinc-400'>To get updates on payments, customer complaints, order acceptance, etc</div>
            </div>
            <div className="pb-4">
                <div className="px-5 py-3">
                    <label htmlFor="Useremail" className="w-full  relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <input type="text" id="Useremail" className=" w-full peer border-none bg-transparent  focus:border-transparent focus:outline-none focus:ring-0" placeholder="Email Address" value={ownerEmailAddress} onChange={(e) => onChangeOwnerEmailAddress(e.target.value)} />

                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-md text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-md peer-focus:top-0 peer-focus:text-xs" >
                          Email Address
                        </span>
                    </label>
                </div>
                <div className="px-5 py-3">
                    <label htmlFor="PhoneNumber" className="w-full  relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <input type="text" id="PhoneNumber" className="w-full  peer border-none bg-transparent  focus:border-transparent focus:outline-none focus:ring-0" placeholder="Mobile Number" value={ownerPhoneNumber} onChange={(e) => onChangeOwnerPhoneNumber(e.target.value)} />
                        <span className="absolute end-0  top-0.5 cursor-pointer my-auto px-4 py-1.5 text-xs font-medium text-orange-600 ">VERIFY
                        </span>

                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-md text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-md peer-focus:top-0 peer-focus:text-xs" >
                            Mobile Number
                        </span>
                    </label>
                </div>

                <hr className="h-px my-4 mx-3 border-1 border-dashed bg-gray-400" />
                
                <div className='text-zinc-400 mx-5 '>Provide your <span className='text-zinc-600 text-bold'>WhatsApp number</span> to get insights on ratings, menu, etc</div>
                
                <div className='mx-5 my-5 flex flex-wrap gap-5'>
                    <div className='flex'>
                        <div className='flex my-auto block size-2 my-auto cursor-pointer rounded-full bg-orange-500 shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-orange-500 has-[:checked]:ring-offset-2'>
                            <input type="radio" name="ColorOption" value="ColorBlue1" id="ColorBlue1" className="sr-only" 
                             checked={!isDiffWhatsappNumber}
                             onChange={handelRadioChange} />
                        </div>
                        <div className='pl-3'>
                            <label htmlFor="ColorBlue1" className="text-sm cursor-pointer text-semibold text-gray-400">My WhatsApp number is same as above</label>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex my-auto block size-2 my-auto cursor-pointer rounded-full bg-orange-500 shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-orange-500 has-[:checked]:ring-offset-2'>
                            <input type="radio" name="ColorOption" value="ColorBlue2" id="ColorBlue2" className="sr-only"
                              checked={isDiffWhatsappNumber}
                                onChange={handelRadioChange} />
                        </div>
                        <div className='pl-3'>
                            <label htmlFor="ColorBlue2" className="text-sm cursor-pointer text-semibold text-gray-400">I have a Different WhatsApp number</label>
                        </div>
                    </div>
                </div>

                {isDiffWhatsappNumber && (
                <div className="px-5 py-5 ">
                    <label htmlFor="WhatsappNumber" className="w-full relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">

                        <input type="text" id="WhatsappNumber" className="w-full   peer border-none bg-transparent  focus:border-transparent focus:outline-none focus:ring-0" placeholder="WhatsApp Number" value={whatsappNumber} onChange={(e) => onChangeWhatsappNumber?.(e.target.value)} />
                        <span className="absolute end-0  top-0.5 cursor-pointer my-auto px-4 py-1.5 text-xs font-medium text-orange-600 ">VERIFY
                        </span>
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-md text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-md peer-focus:top-0 peer-focus:text-xs" >
                            WhatsApp Number
                        </span>
                    </label>
                </div>
                )}


            </div>
        </div>
    </>
    );
}

export default Owners_Contact_Details;