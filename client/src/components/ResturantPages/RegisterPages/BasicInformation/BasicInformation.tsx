import NavBar from "../common/NavBar/NavBar.tsx";
import  {  useState } from "react";
import BasicDetails from "../Register1/BasicDetails/BasicDetails.tsx";
import Owners_Contact_Details from "../Register1/Owner_Contact_Details/Owner_Contact_Details.tsx";
import OpeningDates from "../Register1/OpeningDates/OpeningDates.tsx";
import Opening_Closing_Time from "../Register1/Opening_Closing_Time/Opening_Closing_Time.tsx";
import TimeLine from "../TimeLine/TimeLine.tsx";

function BasicInformation() {
  const [ownerFullName, setOwnerFullName] = useState<string>("");
  const [resturantName, setResturantName] = useState<string>("");
  const [resturantAddress, setResturantAddress] = useState<string>("");
  const [ownerEmailAddress, setOwnerEmailAddress] = useState<string>("");
  const [ownerPhoneNumber, setOwnerPhoneNumber] = useState<string>("");
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");
  const [isDiffWhastappNumber, setIsDiffWhatsappNumber] = useState<boolean>(false);
  const [checkedDays, setCheckedDays] = useState<string[]>([]);
  

  return (

    <>
      <NavBar />
      <div className="bg-zinc-100">
        <div className="max-w-screen-xl mx-auto ">
            <div className="px-24 pt-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6 ">
                  
                  <div className="h-fit bg-white-200">
                    <div className="font-semibold text-2xl px-2 py-4 my-3">
                      <h1>Back</h1>
                    </div>
                    <TimeLine />
                  </div>
                  
                  <div className="h-fit bg-white-200 mb-8 lg:col-span-3 px-12 ">

                    <div className="font-bold text-3xl px-5 pt-4  my-3">
                      <h1>Restaurant Information</h1>
                    </div>

                    <BasicDetails ownerFullName={ownerFullName} resturantName={resturantName} resturantAddress={resturantAddress} onChangeOwnerFullName={setOwnerFullName} onChangeResturantName={setResturantName} onChangeResturantAddress={setResturantAddress} />
                    <Owners_Contact_Details ownerEmailAddress={ownerEmailAddress} ownerPhoneNumber={ownerPhoneNumber} whatsappNumber={whatsappNumber} onChangeOwnerEmailAddress={setOwnerEmailAddress} onChangeOwnerPhoneNumber={setOwnerPhoneNumber}
                    onChangeWhatsappNumber={setWhatsappNumber} isDiffWhatsappNumber={isDiffWhastappNumber} onChangeIsDiffWhatsappNumber={setIsDiffWhatsappNumber} />
                    <OpeningDates checkedDays={checkedDays} setCheckedDays={setCheckedDays} />
                    <Opening_Closing_Time />
                    <div className="mt-4 mx-6 py-3  bg-gray-300 text-zinc-400 text-center text-lg text-bold rounded-lg">
                      Proceed
                    </div>
                  </div>

                 
                  
                </div>           
              </div>
           
            </div>
      </div>
    </>
  )
}

export default BasicInformation