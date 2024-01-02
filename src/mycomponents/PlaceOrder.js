import React, { useEffect, useState } from "react";
import phone from "./phone.png";
import { Link } from "react-router-dom";
import logo from "./image 4.png";
import { FaShoppingCart } from "react-icons/fa";
import Succesfully from './Succesfully';
import { products } from "./data1";

const PlaceOrder = ({ orderdata,setOrderdata }) => {
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
          <Link to="/placeorder">Check
          out </Link>
        </div>
      </div>
      <div className="flex ml-36 mt-5">
      <Link to='/'>
        <img src={logo} alt="" className="h-8" />
        </Link>        <h1 className="text-2xl font-bold pl-2 pr-2">Musicart</h1>
        <p className="pt-2">Home / View Cart</p>
      </div>
      <div className="flex ml-36 mt-5 ">
        <Link
          to='/'
          className="bg-[#2E0052] text-white p-2 rounded-lg"
        >
          Back to products
        </Link>
      </div>
      <div className="flex justify-center mt-10">
        <FaShoppingCart size={40} />
        <h1 className="text-2xl">My Cart</h1>
      </div>

      {orderdata.map((value, index) => {
        return (
          <div key={index}>
            <div className="flex justify-around">
              <div className="flex justify-between border-4 w-3/4 mt-8">
                <div className="border-2 p-10 m-8">
                  <img src={value.image} alt="" />
                </div>
                <div className="m-8">
                  <h1>{value.name}</h1>
                  <h1>color:{value.color}</h1>
                  <h1>Stock:{value.Stock}</h1>
                </div>
                <div className="m-8">
                  <h1>
                    Price:
                    <br />
                    {value.price}
                  </h1>
                </div>
                <div className="m-8">
                  { <h1>
                    Quantity:
                    <br />
                    <select fdprocessdid="n6u7m" >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </h1> }
                </div>
                <div className="m-8">
                  { <h1>
                    Total:
                    <br />₹ {value.price}
                  </h1> }
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                    className="p-2 bg-red-500 rounded text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div>
                <div className="mt-10 mr-9 p-6">
                  { /*
                 <h1>Price Details</h1>
                  <h1 className="pt-2">Total MRP:{value.total}</h1>
                  <h1 className="pt-2">Discount on MRP:{value.discount}</h1>
                  <h1 className="pt-2">Convenience Fee:{value.Convenience}</h1> */}
                </div>
              </div>
            </div>
            <div className="flex justify-around">
              <div>
                <div className="flex">
                  <h1>1 Item</h1>
                </div>
                <div>
                  <h1>{value.total}</h1>
                </div>
              </div>
              
            </div>
          </div>
        );
      })}
      <div className="flex">
                <div>
                  <h1>Total Amount: </h1>
                </div>
                <div>
                  <h1>{total}</h1>
                </div>
              </div>

      <div className="flex justify-end mr-10">
        <Link to='/checkout' className="p-4 bg-[yellow] rounded">
          Place Order
        </Link>
      </div>
    </>
  );
};

export default PlaceOrder;

/*{ 
                 <h1>Price Details</h1>
                  <h1 className="pt-2">Total MRP:{value.total}</h1>
                  <h1 className="pt-2">Discount on MRP:{value.discount}</h1>
                  <h1 className="pt-2">Convenience Fee:{value.Convenience}</h1> }*/