import React from "react";

export default function HighLightedCard(props) {
  return (
    <div className=" bg-Swhite border-[px]  flex flex-col border-black   drop-shadow-xl  rounded-md h-[450px] sm:h-[490px] px-[5vw] sm:px-[48px] py-[20px]  ">
      <div className="border-Pyellow w-[250px] sm:w-[310px] sm:h-[210px] overflow-hidden mx-auto border-[7px]  rounded-md ">
        <img src={props.dishImage} className="w-[250px] sm:w-[310px]" alt="" />
      </div>
      <div className="flex flex-row space-x-[30px] sm:space-x-[120px]">
        <h1 className="text-start font-primary w-[130px] text-[26px] mt-2 text-Pgreen">
          {props.dishName}
        </h1>
        <h1 className="text-start font-primary text-[30px] mt-2 text-Pgreen">
          {props.dishPrice}$
        </h1>
      </div>

      <p className="font-secondary h-[100px] text-Sgray w-[250px] sm:w-[300px]">
        {props.dishDescription}
      </p>
      <div className=" mx-auto mt-[40px]">
        <a
          href="#"
          className="py-3 px-10 rounded-full font-primary text-[20px]  bg-Pyellow hover:bg-Pgreen hover:text-Swhite"
        >
          Order for dilvery
        </a>
      </div>
    </div>
  );
}
