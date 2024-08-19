import React from 'react'
import restaurant from '../RestaurantData';
export default function OnlineDelivery() {
  return (
    <div className="max-w-[1200px] mx-auto items-center p-4 m-4">

    <div className="flex items-center justify-between">
      <h1 className="font-bold text-2xl"> Restaurants with online food delivery in Surat </h1>
    </div>
    <div className="grid grid-cols-4 mt-4 gap-6 p-4">
                {
                    restaurant.map((res, index) => {
                        return (
                            <div key={index} className='w-[260px]'>
                                <div className=" relative h-[180px]  shadow-lg ">
                                    <img className='object-cover rounded-lg mt-2 w-full h-full' src={res.title} alt={res.name} />
                                    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent flex items-center justify-center text-white text-sm font-semibold p-2">
                                        {res.offer}
                                    </div>
                                </div>
                                <div className="left -0text-center mt-2 text-base font-semibold">{res.name}</div>
                                <div className="left-0text-center flex items-center gap-1 text-sm text-gray-600">  {res.rating} • {res.minTime}m - {res.maxTime}m</div>
                                <div className="left-0text-center font-semibold  text-sm text-gray-600"> {res.place}</div>
                                
                            </div>
                        );
                    })
                }
            </div>
    </div>
  )
}
