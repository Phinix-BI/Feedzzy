import React from 'react';

const TimeLine: React.FC = () => {
  return (
    <div className='ml-4'>
      <ol className="border-s-2 h-auto border-dotted border-gray-300 border-primary dark:border-primary-500">
        {/* First item */}
        <li>
          <div className="flex-start flex items-center">
            <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500 bg-gray-300 sr-only"></div>
           {/* Glowing green circle */}
           <div className="glowing-circle bg-green-500 -ms-[6px] -mt-2 me-3 flex items-center justify-center"></div>

             <p className='-mt-2 ml-5 mb-3 text-xs'>STEP 1</p>
          </div>
          <div className="mb-2 ms-10 pb-2">
            <h4 className="-mt-2 text-lg font-semibold">Restaurant Information</h4>
            <p className="mb-2 text-sm text-zinc-400">
              Location, Owner details, Open & Close hrs.
            </p>
          </div>
        </li>

        {/* Second item */}
        <li>
          <div className="flex-start flex items-center">
            <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500 bg-gray-300"></div>
             <p className='-mt-2 ml-5 mb-3 text-xs'>STEP 2</p>
          </div>
          <div className="mb-2 ms-10 pb-2">
            <h4 className="-mt-2 text-lg font-semibold">Restaurant Documents</h4>
            <p className="mb-2  text-sm text-neutral-600 dark:text-neutral-300 sr-only">
              Location, Owner details, Open & Close hrs.
            </p>
          </div>
        </li>

        {/* Third item */}
        <li>
          <div className="flex-start flex items-center">
            <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500 bg-gray-300"></div>
             <p className='-mt-2 ml-5 mb-3 text-xs'>STEP 3</p>
          </div>
          <div className="mb-2 ms-10 pb-2">
            <h4 className="-mt-2 text-lg font-semibold">Menu Setup</h4>
            <p className="mb-2  text-sm text-neutral-600 dark:text-neutral-300 sr-only">
              Location, Owner details, Open & Close hrs.
            </p>
          </div>
        </li>

        <li>
          <div className="flex-start flex items-center">
            <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500 bg-gray-300"></div>
             <p className='-mt-2 ml-5 mb-3 text-xs'>STEP 4</p>
          </div>
          <div className="mb-2 ms-10 pb-2">
            <h4 className="-mt-2 text-lg font-semibold">Partner Contract</h4>
            <p className=" text-sm text-neutral-700 dark:text-neutral-500 sr-only">
              Location, Owner details, Open & Close hrs.
            </p>
          </div>
        </li>
      </ol>
        <div className='w-7 h-12 bg-zinc-100 relative bottom-10 right-2'></div>
    
    </div>
  );
};

export default TimeLine;
