import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import categoryData from "../CategoryData";

export default function Category() {
    const [slide,setSlide] = useState(0)

    function NextSlide(){
        console.log(categoryData.length);
        if(categoryData.length - 8 == slide) return false
        
        setSlide(slide + 3)
    }

    function PrevSlide(){
        if(slide == 0) return false
        setSlide(slide - 3)
    }

  return (
    <div className="max-w-[1200px] mx-auto items-center p-4 m-4">

        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl"> What's on your mind? </h1>
          <div className="flex">

            <div className="w-[30px] h-[30px] bg-[#e2e2e7] flex items-center justify-center rounded-full mx-2 cursor-pointer" onClick={PrevSlide}> <FaArrowLeft /> </div>

            <div className="w-[30px] h-[30px] bg-[#e2e2e7] flex items-center justify-center rounded-full mx-2 cursor-pointer" onClick={NextSlide}> <FaArrowRight />  </div>

          </div>
        </div>
        <div className="flex overflow-hidden">
            {
                categoryData.map((cat,index) => {
                    return(
                        <div style={{transform:`translateX(-${slide * 100}%)`}} key={index} className="w-[150px] shrink-0 duration-500 pt-2 p-4 "> 
                            <img src={cat.path} alt={cat.image} />
                        </div>
                    )
                })
            }
        </div>  
        <p className="my-4 border-[1px]" />
    </div>
  );
}
