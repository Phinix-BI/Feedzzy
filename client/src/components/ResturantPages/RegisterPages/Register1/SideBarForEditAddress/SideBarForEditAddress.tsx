import React from 'react';


interface SidebarForEditAddressProps {
    isAddressSideBarOpen: boolean;
    setIsAddressSideBarOpen: (isAddressSideBarOpen: boolean) => void;
}
const SideBarForEditAddress: React.FC<SidebarForEditAddressProps> = ({isAddressSideBarOpen, setIsAddressSideBarOpen}) => {

    const toggleSidebar = (): void => {
         setIsAddressSideBarOpen(!isAddressSideBarOpen);
      };

  return (
    <>
     
      {isAddressSideBarOpen && (
        <div>
        <div className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0  bottom-0 z-[60] w-1/3 bg-white border-e border-gray-200  overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb] rounded-tl-3xl :bg-slate-500 " style={{"right" : 0}}>
          {/* Your sidebar content goes here */}
          <div className="px-8 py-6 bg-zinc-50">
            <a className="flex-none text-2xl font-bold" href="#" aria-label="Brand">
              Brand
            </a>
          </div>
          {/* Navigation items */}
        
        {/* cross icon */}
        <div>
        <button
          type="button"
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-600"
          onClick={toggleSidebar}
          aria-label="Close navigation"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        </div>
        </div>
        </div>
      )}

      
    </>
  );
};

export default SideBarForEditAddress;
