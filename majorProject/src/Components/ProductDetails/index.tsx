import { useParams } from "react-router-dom";
import glasses from "../../GlassData";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutline360 } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrow90DegDown } from "react-icons/bs";

const ProductDetails: React.FC = (): JSX.Element => {
  const [glassImg, setGlassImg] = useState<string>();
  const { id } = useParams();
  let glass;
  if (id) {
    glass = glasses.find((glass) => glass.id === parseInt(id));
  }

  const glassIds = [6, 7, 8, 17];
  const glassImglist = glasses.filter((glass) => glassIds.includes(glass.id));

  return (
    <div className="p-4">
      <div>
        <span className="text-sm flex items-center gap-2 text-[#333]">
          HOME <IoIosArrowForward />
          GLASSES / {glass?.name.toUpperCase()}
        </span>
      </div>
      <div className="flex  gap-16">
        <div className=" flex p-6 w-10/12 flex-col">
          <div className="border-[1.5px] rounded-md p-4">
            <div className="p-2 border-2 border-[#378061] rounded-lg h-16 w-16 cursor-pointer">
              <p className="text-[#378061] text-sm font-bold translate-y-3 ">
                360 &deg;
              </p>
              <MdOutline360 className="w-7 h-7 text-[#378061]" />
            </div>
            <img
              src={glassImg ? glassImg : glass?.image}
              className=" scale-90 hover:scale-100 transition-all duration-300"
            />
          </div>
          <div className=" flex p-4 mt-4 justify-around items-center gap-4">
            {glassImglist.map((glass) => {
              return (
                <div
                  className="border-[1.5px] p-4 cursor-pointer"
                  key={glass.id}
                  onClick={() => {
                    setGlassImg(glass.image);
                  }}
                >
                  <img src={glass.image} />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-2/5">
          <div className="w-full ">
            <div className="flex justify-between w-full p-2">
              <div>
                <h1 className="text-[#414b56] text-[24px] font-semibold">
                  {glass?.name}
                </h1>
                <p className="text-[#6D6D6D] font-medium text-sm">
                  Trending in the market
                </p>
                <div className="flex ">
                  <AiTwotoneStar className="text-[#378061] " />
                  <AiTwotoneStar className="text-[#378061] " />
                  <AiTwotoneStar className="text-[#378061]" />
                </div>
              </div>
              <div>
                <p className="text-[#414b56] text-[24px] font-semibold">
                  ${glass?.price}
                </p>
              </div>
            </div>
            <hr />

            <div>
              <div>
                <button className="bg-[#f18132] w-full text-white p-4 mt-4 rounded text-base font-medium">
                  SELECT LENSES
                </button>
              </div>
              <div className="border-[1.5px] mt-2 p-4">
                <div>
                  <h1 className="text-base font-medium ">Description</h1>
                  <p className=" text-sm text-[#414b56]  mt-2">
                    Need to face the work week in style? This signature Air
                    Classic frame has got the confidence you need. Quality Ultem
                    materials give this blue frame its signature warmth, while
                    sleek rectangle lenses keep the look fit and tidy for any
                    situation. Meet the future of fashionable eyewear.
                  </p>
                </div>
                <div className="border-b-[1.5px] flex items-center justify-between">
                  <h1 className="text-base font-medium mt-4">Details</h1>
                  <IoIosArrowDown className="cursor-pointer" />
                </div>

                <div className="border-b-[1.5px] flex items-center justify-between">
                  <h1 className="text-base font-medium mt-4">Measurement</h1>
                  <IoIosArrowDown className="cursor-pointer" />
                </div>
                <div className="border-b-[1.5px] flex items-center justify-between">
                  <h1 className="text-base font-medium mt-4">
                    Delivery Details
                  </h1>
                  <IoIosArrowDown className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
