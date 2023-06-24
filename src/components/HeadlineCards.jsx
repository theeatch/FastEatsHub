import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/60 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
          src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/60 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Too</p>
          <p className="px-2">Tatsy Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
          src="https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/60 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
          src="https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
