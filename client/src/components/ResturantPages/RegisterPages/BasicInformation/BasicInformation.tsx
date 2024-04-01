import NavBar from "../common/NavBar/NavBar.tsx";
import  {  useState } from "react";
import BasicDetails from "../Register1/BasicDetails/BasicDetails.tsx";

function BasicInformation() {
  const [ownerFullName, setOwnerFullName] = useState<string>("");
  const [resturantName, setResturantName] = useState<string>("");
  const [resturantAddress, setResturantAddress] = useState<string>("");


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

                    {/* <button type="button" className="inline-block rounded bg-orange-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none" onClick={handleNext}>Next</button> */}
                  </div>
                 
                  
                </div>           
              </div>
           
            </div>
      </div>
    </>
  )
}

export default BasicInformation