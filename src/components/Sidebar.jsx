import React from "react";
import {assets} from '../assets/assets'
import { useNavigate } from "react-router-dom";

const Sidebar = () => {


  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex ">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around ">
        <div onClick={() => navigate('/')} className="flex items-center gap-3 p-5 cursor-pointer">
            <img className="w-6" src={assets.home_icon} alt=""/>
            <p className="font-bold">HOME</p>
        </div>
        <div className="flex items-center gap-3 p-4 cursor-pointer">
            <img className="w-6" src={assets.search_icon} alt=""/>
            <p className="font-bold">search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon}/>
            <p className="font-semibold">Your Library</p>
        </div>
        <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt=""/>
             <img className="w-5" src={assets.plus_icon} alt=""/>
        </div>
      </div>

     <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4">
                <h1>create your first playlist</h1>
                <p className="font-light">it's easy I will help</p>
                <button className="px-4 py-1.5 bg-white text-black rounded-full mt-4">create playlist</button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4">
                <h1>let's find some podcasts to follow</h1>
                <p className="font-light">I will keep you updated on new episodes</p>
                <button className="px-4 py-1.5 bg-white text-black rounded-full mt-4">Browse for podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
