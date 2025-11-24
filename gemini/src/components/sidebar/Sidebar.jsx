import { useState } from "react";
import { assets } from "../../assets/assets.js";
import { motion } from "framer-motion";


export default function Sidebar() {
  const [extended, setExtended] = useState(true);

  return (
    <div className="text-neutral-700 font-inter font-semibold  inline-flex justify-between flex-col  bg-[#f0f4f9]  p-7    border-1 border-neutral-100 ">
      <div className="" name="top">
        <img onClick={()=>setExtended(prev=>!prev)}
          src={assets.menu_icon}
          alt=""
          className="cursor-pointer   display-block  hover:bg-gray-200 rounded-full p-2 size-9"
        />
        <motion.div initial={{opacity:0}}
        animate={{opacity:100}} transition={{duration:1}}
          id="newchat"
          className="inline-flex bg-gray-200 items-center   rounded-2xl cursor-pointer  mt-5 p-3 space-x-2 text-sm    "
        >
          <img src={assets.plus_icon} alt="" className=" custom-img" />
          {extended ? <p>New chat</p> : null}
        </motion.div>

        {extended ? (
          <div id="recent" className="flex flex-col ml-1 ">
            <p className="mt-5 mb-3">Recent</p>
            <div
              id="recent-entry"
              className="inline-flex text-xs cursor-pointer 
              justify-center items-center ml-1 rounded-4xl hover:bg-gray-200 py-2 px-2 w-30 "
            >
              
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className=" justify-center text-sm flex flex-col  " id="bottom">
        <div
          id="bottom-item"
          className="inline-flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-3xl"
        >
          <img src={assets.question_icon} alt="" className="custom-img"/>
          { extended ? <p>Help</p> : null}
        </div>

        <div
          id="Activity"
          className="inline-flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-3xl"
        >
          <img src={assets.history_icon} alt="" className="custom-img" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div
          id="settings"
          className="inline-flex items-center gap-2 hover:bg-gray-200 py-2 px-2 rounded-3xl"
        >
          <img src={assets.setting_icon} alt="" className="custom-img" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}
