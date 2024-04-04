import React from "react";
import "./index.css";
const Card = ({ imageUrl, heroText }) => {
  return (
    <>
      <div className="relative rounded-lg duration-1000 overflow-hidden w-96 h-96 ">
        <img
          src={imageUrl}
          alt="Card Image"
          className="object-cover w-full h-full "
        />
        <div className="absolute top-0 left-0 w-full  h-full flex items-center justify-center opacity-0 hover:backdrop-blur-lg hover:opacity-100 transition-opacity">
          <h2 className="text-white text-3xl font-bold">{heroText}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
