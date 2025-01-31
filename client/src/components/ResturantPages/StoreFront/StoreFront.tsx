import { FC } from "react"


const StoreFront : FC = () => {
    // const [ResturantName, setResturantName] : string = useState('')

  return (
    <div className="max-w-screen-xl mx-auto mt-10 ">

        <div className="sm:px-4 lg:px-0 px-5">

        
        <div className=" font-bold text-4xl">
            Resturant Info 
        </div>

          <div className="my-8 ">
            <label htmlFor="ResturantName" className="block text-medium font-medium text-gray-700">Restaurant Name</label>

            <input
              type="text"
              id="ResturantName"
              placeholder="What's your restaurant name?"
              className="mt-1 h-10 sm:w-2/5 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <div className=" font-bold text-xl mb-5">
            Resturant Images 
        </div>
        <div>
          

<div className="grid grid-cols-2  gap-4">
   

    <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
        </div>
       
    <div className="grid grid-cols-2 gap-4">
        
       
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
        </div>
    </div>
</div>

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8  ">

            <div>
              <label className="block text-medium font-medium text-gray-700" htmlFor="phone">Phone</label>
              <input
                className=" mt-1 rounded-lg border-gray-200 p-3 text-sm sm:w-4/5 w-full"
                placeholder="(123) 456-7890"
                type="tel"
                id="phone"
              />
            </div>
            <div>

              <label className="block text-medium font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                className=" mt-1 rounded-lg border-gray-200 p-3 text-sm sm:w-4/5 w-full"
                placeholder="you@example.com"
                type="email"
                id="email"
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-700" htmlFor="Address">Street Address</label>
              <input
                className="mt-1 rounded-lg border-gray-200 p-3 text-sm sm:w-4/5 w-full"
                placeholder="1234 Main St"
                type="tel"
                id="Address"
              />
            </div>
            <div>
              <label className="block text-medium font-medium text-gray-700" htmlFor="OptionalAddress">Apt, Suite, Bldg (optional)</label>
              <input
                className=" mt-1 rounded-lg border-gray-200 p-3 text-sm sm:w-4/5 w-full"
                placeholder="Apt 1"
                type="tel"
                id="OptionalAddres"
              />
            </div>

            
          </div>

        </div>


        </div>

    </div>
  )
}

export default StoreFront

