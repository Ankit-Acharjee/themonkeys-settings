
import React, { useEffect, useState } from "react";
// import Settings from '../../Assets/settings.png';
import "./sidebar.css";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineWidgets } from "react-icons/md";
import { BsDatabaseCheck } from "react-icons/bs";
import { AiOutlineUserDelete } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { VscVerifiedFilled } from "react-icons/vsc";

const Sidebar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  

  const handleToggle = () => {
    console.log("hello");
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggle = () => {
    return window.innerWidth < 768;
  };

  const [small, setSmall] = useState(toggle);
  // const [style, setStyle] = useState();

  useEffect(() => {
    const handleResize = () => {
      setSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const myStyle = () => {
  //   if (small === true) {
  //     setStyle({
  //       paddingTop: "3px",
  //       paddingBottom: "3px",
  //       hover: "",
  //     });
  //   }
  // };

  return (
    <div
      className={`${
        small === false
          ? "sidebar h-[100vh] my-0 bg-white  max-w-full flex flex-col p-4 rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
          : "sidebar h-[100vh] my-0 bg-gray-200 w-[50px] flex flex-col p-4 pt-0"
      } `}
    >


        {/* settings */}

      {!small && (
        <div className="logoDiv flex  cursor-pointer mb-4 pb-2 gap-3">
          {/* <img src={Settings} alt="Image Name" className=" w-20 h-auto mr-2 bg-gray-300 rounded p-2" /> */}
          <LuSettings className="text-4xl" />
          <h2 className="text-primary font-bold text-3xl ">Settings</h2>
        </div>
      )}


          {/* //menu */}


      <div className="menuDiv p-4">

          {/* //Profile Picture */}

        <div className="flex items-center justify-center gap-2">
          <img
            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
            className={` ${
              small === true ? "relative left-2 h-[50px]" : "h-[63px] w-[63px]"
            } rounded-full items-start border-white border-2 shadow-lg `}
            alt=""
          />
          <span className="divTittle text-2xl font-bold text-black text-center">
            Hi, Ankit
          </span>
          <VscVerifiedFilled className="text-2xl text-green-600" />
        </div>

            {/* //menu */}

        <ul className="menuLists ">


              {/* //account */}

          <li className="listItem relative py-3 px-4  ">
            <a
              href="/"
              className="menuLink flex items-center text-gray-600 font-medium transition duration-300 text-xl hover:text-blue-300"
            >
              <CgProfile className="icon mr-3" />
              <span className="smallText">Account</span>
            </a>
          </li>

            {/* //password */}


          <li className="listItem relative py-3 px-4 hover:bg-blue-500 hover:rounded-md ">
            <a
              href="/"
              className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:text-gray-50  text-xl"
            >
              <RiLockPasswordFill className="icon mr-3" />
              <span className="smallText">Password</span>
            </a>
          </li>


              {/* //privacy */}


          <li className="listItem relative py-3 px-4 hover:bg-blue-500 hover:rounded-md ">
            <a
              href="/"
              className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:text-gray-50  text-xl"
            >
              <MdOutlinePrivacyTip className="icon mr-3" />
              <span className="smallText">Privacy and Safety</span>
            </a>
          </li>


            {/* //Email */}


          <li className="listItem relative py-3 px-4 hover:bg-blue-500 hover:rounded-md ">
            <a
              href="/"
              className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:text-gray-50  text-xl"
            >
              <BiLogoGmail className="icon mr-3" />
              <span className="smallText">Email Notification</span>
            </a>
          </li>


            {/* //Web */}


          <li className="listItem relative py-3 px-4 hover:bg-blue-500 hover:rounded-md ">
            <a
              href="/"
              className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:text-gray-50  text-xl"
            >
              <AiOutlineBell className="icon mr-3" />
              <span className="smallText">Web Notification</span>
            </a>
          </li>


              {/* //Widgets */}


          <li className="listItem relative py-3 px-4 hover:bg-blue-500 hover:rounded-md ">
            <a
              href="/"
              className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:text-gray-50  text-xl"
            >
              <MdOutlineWidgets className="icon mr-3" />
              <span className="smallText">Widgets</span>
            </a>
          </li>


              {/* //data */}


          <li className="listItem relative py-3 px-4 hover:bg-blue-500 hover:rounded-md ">
            <a
              href="/"
              className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:text-gray-50  text-xl"
            >
              <BsDatabaseCheck className="icon mr-3" />
              <span className="smallText">Your data</span>
            </a>
          </li>


              {/* //Delete */}

            
          <li className="listItem relative py-3 px-4 hover:bg-blue-500 hover:rounded-md ">
            <a
              href="/"
              className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:text-gray-50  text-xl"
            >
              <AiOutlineUserDelete className="icon mr-3" />
              <span className="smallText">Delete account</span>
            </a>
          </li>
        </ul>
      </div>


            {/* //toggleSection */}

            

      {!small && (
        <div className="flex flex-col">
          <div className="form-control w-52">
            <label className="cursor-pointer label flex justify-center">
              <span className="label-text text-lg smallText text-gray-600">
                Theme mode
              </span>
              <input
                type="checkbox"
                className="toggle toggle-primary "
                checked={theme === "dark"}
                onChange={handleToggle}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;