import React from "react";
import phone from "./phone.png";
import { Link } from "react-router-dom";
import logo from "./image 4.png";
import head from "./headphone-removebg-preview.png";
import head1 from "./image 24.png";
import head2 from "./image 25.png";
import head3 from "./image 26.png";

const Cart = () => {
  return (
    <>
      <div className="sm:hidden md:flex justify-around bg-[#2E0052] text-white">
        <div className="flex">
          <img src={phone} alt="" className="h-8" />

          <p>7348871168</p>
        </div>
        <div>
          <p>Get 50% off on selected items | Shop Now</p>
        </div>
        <div>
          <Link to="/login">Login | </Link>
          <Link to="/register">Register </Link>
        </div>
      </div>
      <div className="flex ml-12 mt-5">
        <Link to="/">
          <img src={logo} alt="" className="h-8" />
        </Link>{" "}
        <h1 className="text-2xl font-bold pl-2 pr-2">Musicart</h1>
        <p className="pt-2">Home / Sony WH-CH720N</p>
        <br />
      </div>
      <div className="flex ml-12 mt-8">
        <Link to='/'
           className="bg-[#2E0052] text-white p-2 rounded-lg">
            Back to products
        </Link>
      </div>
      <div className="flex ml-12 mt-9">
        <h1 className="font-bold text-2xl">
          Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones
          with Mic, up to 50 Hours
          <br /> Playtime, Multi-Point Connection, App Support, AUX & Voice
          Assistant Support for Mobile Phones <br />
          (Black)
        </h1>
      </div>
      <div className="flex justify-between">
        <div>
          <img
            src={head}
            alt=""
            className="border-solid border-4 border-black p-24 ml-10 rounded-2xl"
          />
        </div>
        <div>
          <h1>Sony WH-CH720N</h1>
          <p>Price - ₹ 3,500</p>
          <p>Black | Over-ear headphone</p>
          <p>About this item</p>
          <ul>
            <li>Sony’s lightest Wireless Noise-cancelling headband ever</li>
            <li>
              Up to 50-hour battery life with quick charging (3 min charge for
              up to 1 hour playback)
            </li>
            <li>
              Multi-Point Connection helps to pair with two Bluetooth devices at
              the same time
            </li>
            <li>
              Take noise cancelling to the next level with Sony’s Integrated
              Processor V1,so you fully immerse yourself in the music
            </li>
            <li>Super comfortable and lightweight design ( 192 Grams )</li>
            <li>High sound quality and well-balanced sound tuning</li>
          </ul>
          <p>Available - In stock</p>
          <p>Brand - Sony</p>
        </div>
      </div>

      <div className="flex h-28 m-7">
        <img src={head1} alt="" className="p-1" />
        <img src={head2} alt="" className="p-1" />
        <img src={head3} alt="" className="p-1" />
      </div>
      <div className="text-center bg-[#2E0052] text-white p-5 mt-36">
        Musicart | All rights reserved
      </div>
    </>
  );
};

export default Cart;
