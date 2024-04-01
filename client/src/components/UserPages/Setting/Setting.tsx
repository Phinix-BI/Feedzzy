
import List from "./List/List.tsx";

const Setting = () =>{
    return(
        <nav className='sidebar border-0 border-black w-1/6 h-screen shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] flex flex-col'>
        <div className="sidebar-top-wrapper">
          <div className="sidebar-top border-0 border-black p-4">
            <a href="#" className="logo-wrapper w-full  flex flex-row justify-around ">
              <img src="https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1616867477~hmac=2b6b3b7f3c0f8b6b0b2b8e3a6c3d4d3a" alt="logo" />
              <h3 className='text-xl text-red-600 font-bold'>FeedZZy</h3>
            </a>
          </div>
          <div className="expand-btn"></div>
        </div>
        <div className="sidebar-links h-full">
          <ul className="w-full ">
            <List name="Profile"/>
            <List name="Orders"/>
            <List name="Likes"/>
            <List name="Wallet"/>
          </ul>
        </div>

     </nav>
    )
}

export default Setting;