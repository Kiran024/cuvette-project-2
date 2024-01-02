import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import phone from './phone.png'
import logo from './image 4.png'
import girl from './girl.png'
import head from './headphone-removebg-preview.png'
import { Link, useHref } from 'react-router-dom'
import { products } from './data1'



const Home = ({islogin,setOrderdata,setLogin}) => {
    const [data, setData] = useState([])
    const [filteredArray,setFilteredArray] = useState([])
    const [company,setCompany] = useState('company')
    const [color,setColor] = useState('color')
    const [type,setType] = useState('headphone')
    const [price,setPrice] = useState('price')
    const [searchData,setSearchDate] = useState('')

    function handleorder(item){
        setOrderdata((order)=>{
            let obj = [
            ...order,
            item
            

            ]
            return obj
        })
    }
    useEffect(() => {
        let d = products
        setData(products)
        setFilteredArray(products)
    }, [])

    useEffect(()=>{
        const newdata = data.filter((item)=>{
            return (company==item.company || company=='company') && (color==item.color || color=='color') && (type == item.type || type=='headphone') && (price == item.price || price=='price')
        })
        setFilteredArray(newdata)

    },[company,color ,type,price])


    useEffect(()=>{
        const newData = data.filter((item)=>item.company.includes(searchData))
        setFilteredArray(newData)


    },[searchData])

    return (
        <>
            <div className='sm:hidden md:flex justify-around bg-[#2E0052] text-white'>
                <div className='flex'>
                    <img src={phone} alt="" className='h-8' />

                    <p>7348871168</p>
                </div>
                <div>
                    <p>Get 50% off on selected items  |  Shop Now</p>
                </div>
           { !islogin ?     <div>

                    <Link to='/login'>Login | </Link>
                    <Link to='/register'>Register </Link>
                </div>
            :
            <div>

            <div className='bg-green-900 pr-5 pl-5 pt-2 pb-2'>

            <Link to='/placeorder'>View Cart </Link>

        
        </div>
        <div>
            <button onClick={()=>{ setLogin(false); }}>Logout</button>
        </div>
            </div>

            
            }
            </div>
            <div className='flex ml-36 mt-5'>
            <Link to='/'>
        <img src={logo} alt="" className="h-8" />
        </Link>
        <h1 className='text-2xl font-bold pl-2 pr-2'>Musicart</h1>
                <p className='pt-2'>Home</p>
            </div>
            <div className='flex justify-center items-center mt-12'>
                <div className='flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-4/5 rounded-3xl h-48'>
                    <div>
                        <h1 className='xl:text-5xl text-[#2E0052] pl-9'>
                            Grab upto 50% off on <br />Selected headphones
                        </h1>

                        <button className='ml-9 mt-5 pt-2 pb-2 pr-10 pl-10 rounded-full bg-[#2E0052] text-white'>Buy Now</button>
                    </div>
                    <div>
                        <img src={girl} alt="" className='h-64 relative bottom-16' />
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div className='flex justify-center mt-12 '>
                <input type="text" placeholder='Search Product' className='w-4/5 rounded-full h-12 pl-3 border-black  shadow-xl ' value={searchData} onChange={(e)=>setSearchDate(e.target.value)} />
            </div>
            <div className='lg:lg:flex flex-wrap flex justify-center '>
                <select name="" id="" className='bg-[#D9D9D9] rounded-lg p-1 m-2' value={type} onChange={(e)=>setType(e.target.value)}>
                    <option value="headphone">Headphone type</option>
                    <option value="wireless">Wireless</option>
                    <option value="wired">Wired</option>
                </select>
                <select name="" id="" className='bg-[#D9D9D9] rounded-lg p-1 m-2' value={company}
                onChange={(e)=>setCompany(e.target.value)}
                
                >
                    <option value="company">Company</option>
                    <option value="boat">Boat</option>
                    <option value="sony">Sony</option>
                    <option value="jbl">JBL</option>
                    <option value="zebronics">Zebronics</option>
                </select>
                <select name="" id="" className='bg-[#D9D9D9] rounded-lg p-1 m-2' value={color} onChange={(e)=>setColor(e.target.value)}>
                    <option value="color">Color</option>
                    <option value="black">black</option>
                    <option value="blue">blue</option>
                    <option value="white">white</option>
                </select>
                <select name="" id="" className='bg-[#D9D9D9] rounded-lg p-1 m-2' value={price} onChange={(e)=>setPrice(e.target.value)}>
                    <option value="price">Price</option>
                    <option value="500">Rs. 500</option>
                    <option value="1000">Rs. 1000</option>
                    <option value="2500">Rs. 2500</option>
                </select>
                <select name="" id="" className='lg:flex flex-wrap  bg-[#D9D9D9] rounded-lg p-1 m-2'>
                    <option value="">Sort by: Featured</option>
                    <option value="">Price:Lowest</option>
                    <option value="">Price:Highest</option>
                    <option value="">Name:(A-Z)</option>
                    <option value="">Name:(Z-A)</option>
                </select>
            </div>

            <div className='grid grid-cols-4 space-x-7'>
                
                {/* <div>
                    <div className='bg-[#0066FF2B] '>
                        <img src={head} alt="" />
                    </div>
                    <h2 className='font-extrabold'>boAt Rockerz 551ANC</h2>
                    <h3>Price - ₹ 3,000</h3>
                    <p>Blue | On-ear headphone</p>
                </div> */}
                {
                    filteredArray.map((item) => {
                        return (
                            <>
<div onClick={() => { handleorder(item); alert('product added');}}>
                                    <div className='bg-[#0066FF2B] '>
                                       <img src={item.image} alt="" className='h-20'/>
                                    </div>
                                    <h2 className='font-extrabold'>{item.name}</h2>
                                    <h3>Price - ₹ {item.price}</h3>
                                    <p>{item.shortDesc}</p>
                                </div>
                            </>
                        )
                    })
                }
             </div>
            <div className='text-center bg-[#2E0052] text-white p-5 mt-24'>
                Musicart | All rights reserved
            </div>
        </>
    )
}

export default Home