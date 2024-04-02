import NavBar from "../common/NavBar/NavBar.tsx";
import  {  useState } from "react";
import BasicDetails from "../Register1/BasicDetails/BasicDetails.tsx";
import Owners_Contact_Details from "../Register1/Owner_Contact_Details/Owner_Contact_Details.tsx";

function BasicInformation() {
  const [ownerFullName, setOwnerFullName] = useState<string>("");
  const [resturantName, setResturantName] = useState<string>("");
  const [resturantAddress, setResturantAddress] = useState<string>("");
  const [ownerEmailAddress, setOwnerEmailAddress] = useState<string>("");
  const [ownerPhoneNumber, setOwnerPhoneNumber] = useState<string>("");
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");
  const [isDiffWhastappNumber, setIsDiffWhatsappNumber] = useState<boolean>(false);

  return (

    <>
      <NavBar />
      <div className="bg-zinc-100">
        <div className="max-w-screen-xl mx-auto ">
            <div className="px-24 pt-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6 ">
                  
                  <div className="h-fit bg-white-200">
                    <div className="font-semibold text-2xl px-6 py-4 my-3">
                      <h1>Back</h1>
                    </div>

                  </div>
                  
                  <div className="h-fit bg-white-200  lg:col-span-3 px-12 ">

                    <div className="font-bold text-3xl px-5 pt-4  my-3">
                      <h1>Resturant Information</h1>
                    </div>

                    <BasicDetails ownerFullName={ownerFullName} resturantName={resturantName} resturantAddress={resturantAddress} onChangeOwnerFullName={setOwnerFullName} onChangeResturantName={setResturantName} onChangeResturantAddress={setResturantAddress} />
                    <Owners_Contact_Details ownerEmailAddress={ownerEmailAddress} ownerPhoneNumber={ownerPhoneNumber} whatsappNumber={whatsappNumber} onChangeOwnerEmailAddress={setOwnerEmailAddress} onChangeOwnerPhoneNumber={setOwnerPhoneNumber}
                    onChangeWhatsappNumber={setWhatsappNumber} isDiffWhatsappNumber={isDiffWhastappNumber} onChangeIsDiffWhatsappNumber={setIsDiffWhatsappNumber} />
                  </div>
                 
                  
                </div>           
              </div>
           
            </div>
      </div>
    </>
  )
}

export default BasicInformation