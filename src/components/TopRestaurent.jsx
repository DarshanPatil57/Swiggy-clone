import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import restaurant from '../RestaurantData';
import { IoStar } from "react-icons/io5";


export default function TopRestaurant() {
    const [slide, setSlide] = useState(0);
    const visibleItems = 4; 

    function NextSlide() {
        if (slide < restaurant.length - visibleItems) {
            setSlide(slide + 2);
        } else {
            setSlide(0); 
        }
    }

    function PrevSlide() {
        if (slide > 0) {
            setSlide(slide - 2);
        } else {
            setSlide(restaurant.length - visibleItems); 
        }
    }

    return (
        <div className="max-w-[1200px] mx-auto items-center p-4 m-4">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl">Top Restaurant </h1>
                <div className="flex">
                    <div className="w-[30px] h-[30px] bg-[#e2e2e7] flex items-center justify-center rounded-full mx-2 cursor-pointer" onClick={PrevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className="w-[30px] h-[30px] bg-[#e2e2e7] flex items-center justify-center rounded-full mx-2 cursor-pointer" onClick={NextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex p-4 gap-6 overflow-hidden">
                {
                    restaurant.map((res, index) => {
                        return (
                            <div className='w-[260px] shrink-0 m-2 duration-300' key={index} style={{ transform: `translateX(-${slide * 100}%)` }}>
                                <div className="relative h-[180px] rounded-lg overflow-hidden shadow-lg">
                                    <img className='object-cover w-full h-full rounded-lg' src={res.title} alt={res.name} />
                                    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent flex items-center justify-center text-white text-sm font-semibold p-2">
                                        {res.offer}
                                    </div>
                                </div>
                                <div className="left -0text-center mt-2 text-base font-semibold">{res.name}</div>
                                <div className="left-0text-center flex items-center gap-1 text-sm text-gray-600"> <IoStar/> {res.rating} • {res.minTime}m - {res.maxTime}m</div>
                                <div className="left-0text-center font-semibold  text-sm text-gray-600"> {res.place}</div>
                                
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
