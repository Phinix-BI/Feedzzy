
import Setting from "../Setting.tsx";

const Profile = () =>{

    return(
          <>
          <div className=" flex border-0 border-black w-screen h-screen">

          <Setting/>

          <div className="flex flex-col profile border-0 border-purple-500 w-5/6 px-48 py-24">
            <h1 className="text-[2.5rem] font-bold">Edit Profile</h1>
              <form onSubmit={() => {}} className="flex flex-col" >
                <label htmlFor="userName" className="text-[1.5em] mt-4">Full Name</label>
                <input type="text" name="userName" id="userName" className="text-lg py-4 px-2 bg-[rgb(238,238,238)] boroder rounded-md"></input>
                <label htmlFor="phoneNo"  className="text-[1.5em] mt-2">Phone No</label>
                <input type="tel" name="phoneNo" id="phoneNo" className="text-lg  py-4 px-2 bg-[rgb(238,238,238)] boroder rounded-md"></input>
                <label htmlFor="phoneNo"  className="text-[1.5em] mt-2">Address</label>
                <input type="textarea" name="phoneNo" id="phoneNo" className="text-lg py-4 px-2 bg-[rgb(238,238,238)] boroder rounded-md text-wrap"></input>
                <button type="submit" className="p-4 border-0 border-black rounded-md bg-red-300 hover:bg-red-400 w-2/12 my-6">Update</button>
              </form>
          </div>

          </div>
          </>

    )
}

export default Profile;