import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Iprops {
  name: string;
  image: string;
  price: number;
  id: number;
}

const GlassCard: React.FC<Iprops> = ({
  name,
  image,
  price,
  id,
}): JSX.Element => {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className=" flex flex-col items-center justify-center p-1 relative rounded cursor-pointer">
      <div className=" ">
        <Link to={`/product/${id}`}>
          <img src={image} />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[20px] text-[#333] font-medium">{name}</h1>
        <p className="text-[18px] text-[#76baac] font-bold leading-[150%]">
          ${price}
        </p>
      </div>

      <BsFillHeartFill
        className={`absolute  text-xl right-10 bottom-10 cursor-pointer${
          isFav ? " text-red-500" : " text-gray-400"
        }`}
        onClick={() => {
          setIsFav(!isFav);
        }}
      />
    </div>
  );
};

export default GlassCard;
