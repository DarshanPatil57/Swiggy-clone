import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import restaurant from '../RestaurantData';

export default function TopRestaurent() {
    const [slide,setSlide] = useState(0)

    function NextSlide(){
        console.log(restaurant.length);
        if(restaurant.length - 8 == slide) return false
        
        setSlide(slide + 3)
    }

    function PrevSlide(){
        if(slide == 0) return false
        setSlide(slide - 3)
    }
    return (
        <div className="max-w-[1200px] mx-auto items-center p-4 m-4">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl">Top Restaurant in Surat</h1>
                <div className="flex">
                    <div className="w-[30px] h-[30px] bg-[#e2e2e7] flex items-center justify-center rounded-full mx-2 cursor-pointer" onClick={PrevSlide}>
                        <FaArrowLeft />
                    </div>
                    <div className="w-[30px] h-[30px] bg-[#e2e2e7] flex items-center justify-center rounded-full mx-2 cursor-pointer" onClick={NextSlide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            <div className='overflow-hidden'>
                <div className='flex p-4 gap-6' style={{ transform: `translateX(-${slide * 200}%)`, transition: 'transform 0.5s ease' }}>
                    {
                        restaurant.map((res, index) => (
                            <div className='h-[200px] w-[280px] m-2 shrink-0 shadow-lg relative' key={index}>
                                <img className='object-cover w-full h-full rounded-lg' src={res.title} alt={res.name} />
                                <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-black to-transparent rounded-b-lg flex items-center px-4  text-white font-bold text-xl">
                                    {res.offer ? res.offer : "Special Offers Available"}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
