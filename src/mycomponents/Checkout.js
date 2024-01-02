import React from "react";
import { Link } from "react-router-dom";
import phone from "./phone.png";
import { FaShoppingCart } from "react-icons/fa";
import logo from "./image 4.png";
import head from "./headphone-removebg-preview.png";
import { useState } from "react";
import { useEffect } from "react";

const Checkout = ({ orderdata, setOrderdata }) => {
  const [data, setData] = useState([]);
  const [total,setTotal] = useState(0)

  const handleDelete = (index) => {
    const updatedOrderData = [...orderdata];
    updatedOrderData.splice(index, 1);
    setOrderdata(updatedOrderData)
    

    // setData(updatedOrderData);
  };

  useEffect(()=>{
    console.log('jhgj',orderdata)
    const totalCartPrice = orderdata.reduce((total, product) => total + product.price, 0);
    setTotal(totalCartPrice)

  },[])
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
          <Link to="/placeorder">Check out </Link>
        </div>
      </div>
      <div className="flex ml-36 mt-5">
        <Link to="/">
          <img src={logo} alt="" className="h-8" />
        </Link>
        <h1 className="text-2xl font-bold pl-2 pr-2">Musicart</h1>
        <p className="pt-2">Home / Checkout</p>
      </div>
      <div className="flex ml-36 mt-5 ">
        <Link
          to={"/placeorder"}
          className="bg-[#2E0052] text-white p-2 rounded-lg"
        >
          Back to cart
        </Link>
      </div>
      <div className="flex justify-center mt-10">
        <h1 className="text-2xl font-bold">Checkout</h1>
      </div>
      <div className="grid grid-cols-3 mt-20 border-b-2">
        <div>
          <h1 className=" text-red-500 font-bold">1. Delivery Adress</h1>
        </div>
        <div>
          <h1>Kiran Guttedar</h1>
          <p>104</p>
          <p>Sharanbasva University</p>
          <p>Kalaburagi 585102</p>
        </div>
        <div className="border-2">
          <Link
            to="/succesfull"
            className="p-full pr-32 pl-32 bg-yellow-500 mt-24"
          >
            Place Your Order
          </Link>
          <p className="text-center border-b-2">
            By placing your order you agree to music cart privacy notice and
            condition of use
          </p>
          <h1 className="text-center">Order Summary</h1>
          <div className="flex justify-between pl-2 pr-2 border-b-2">
            <div>
              <p>Items: </p>
              <p>Delivery: </p>
            </div>
            <div>
              <p>₹3500.00</p>
              <p>₹45.00</p>
            </div>
          </div>
          <div className="flex justify-between pl-2 pr-2 mb-7 mt-2">
            <div>Order Total:</div>
            <div>{total}</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border-b-2 pb-4 p-4">
        <div>
          <h1 className="text-red-500 font-bold">2. Payment Method</h1>
        </div>
        <div>
          <h1>Pay on delivery (Cash/Card)</h1>
        </div>
      </div>

      <h1 className="text-red-500 font-bold">3. Review Items and delivery</h1>

      {orderdata.map((value, index) => {
        return (
          <div key={index}>
            <div className="grid grid-cols-2 pb-4 p-8">
              <div></div>
              <div>
                <img src={value.image} alt="" className="border-2 h-32" />
                <h1>{value.name}</h1>
                <p>{value.color}</p>
                <p>In Stock</p>
                <p>Estimated Delivery: </p>
                <p>Monday - Free Standard Delivery</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="border-2 flex w-3/4">
        <div>
          <Link to="/succesfull" className="p-full m-12 bg-yellow-500">
            Place Your Order
          </Link>
        </div>

        <div>
          <p>Order Total {total}</p>

          <p>
            By placing your order you agree to music cart privacy notice and
            condition of use
          </p>
        </div>
      </div>
      <div className="text-center bg-[#2E0052] text-white p-5 mt-24">
        Musicart | All rights reserved
      </div>
    </>
  );
};

export default Checkout;
