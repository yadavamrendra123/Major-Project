import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiProtectionGlasses } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div>
      <nav className="navbar bg-[#000042] ">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-white">
            Best Glasses Delivering Experience with us 🎉✨
          </h1>
          <div className="text-white flex justify-between items-center">
            <p className=" text-sm font-medium">Join Us</p>
            <IoIosContacts className="w-7 h-7 mx-2 cursor-pointer" />
          </div>
        </div>
      </nav>

      <div className="shadow-md flex justify-between items-center p-1">
        <div className="flex">
          <div className="flex items-center justify-end text-[#000042]">
            <Link to="/">
              <h1 className="font-extrabold text-3xl mx-4">VisionVenture</h1>
            </Link>
          </div>

          <div className="flex justify-between">
            <ul className="flex items-center text-base font-medium  gap-4 ">
              <li className="cursor-pointer">Sunglasses</li>
              <li className="cursor-pointer">Eyeglasses</li>
              <li className="cursor-pointer">Collections</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 p-4 items-center justify-center">
          <span className="cursor-pointer">Sign In</span>
          <span className="cursor-pointer">Sign Up</span>
          <AiOutlineShoppingCart className=" w-5 h-5 mx-2 cursor-pointer" />
          <p>|</p>
          <BsSearch className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
