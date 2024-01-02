const products = [
    
  {
  image:'https://m.media-amazon.com/images/I/71h2HWoQBEL.SS700.jpg',
  name:'JBL E55BT Over-Ear Wireless Headphones Black',
  price:2500,
  desc:"Sound Quality: JBL is known for its audio expertise, and the E55BT is expected to deliver a well-balanced sound profile with clear Built-in Microphone: The headphones often come with a built-in microphone, enabling users to take calls without removing the headphones.",
  color:'black',
  company:'JBL',
  type:'wireless',
  shortDesc:'The JBL E55BT Over-Ear Wireless Headphones offer a blend of style, comfort, and impressive audio performance'
},
  {
  image:'https://m.media-amazon.com/images/I/21--f3wS6SL._SX300_SY300_QL70_FMwebp_.jpg',
  name:'Sony WH-1000XM5 Wireless',
  price:2500,
  desc:'Industry-Leading Noise Cancellation: The WH-1000XM5 is renowned for its exceptional noise-canceling capabilities. Sony incorporates advanced technology to analyze and adjust ambient sound, providing an immersive listening experience by blocking out unwanted noise.',
  color:'white',
  company:'Sony',
  type:'wireless',
  shortDesc:'Sony offers a diverse range of headphones that cater to different preferences and needs. Known for their innovation and audio expertise '
},
{
  image:'https://www.boat-lifestyle.com/cdn/shop/products/100-wireless-black_600x.png?v=1612770156',
  name:'boAt 100 wireless',
  price:1000,
  desc:'In-Ear Design: These headphones typically feature an in-ear design, providing a snug fit to help isolate external noise and enhance the listening experience.',
  color:'black',
  company:'boat',
  type:'wireless',
  shortDesc:'Boat is known for producing a variety of audio products, including headphones, earphones, and speakers.'
},

{
  image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MD827?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591744546000',
  name:'EarPods (3.5mm Headphone Plug)',
  price:2500,
  desc:'Unlike traditional, circular earbuds, the design of the EarPods is defined by the geometry of the ear. Which makes them more comfortable for more people than any other earbud-style headphones',
  color:'white',
  company:'Apple',
  type:'wired',
  shortDesc:'Apple EarPods are the standard wired earphones that come bundled with various Apple devices'
},
{
  image:'https://rukminim2.flixcart.com/image/832/832/khmbafk0-0/headphone/b/a/p/zeb-bro-zebronics-original-imafxhhsq9ykgpnx.jpeg?q=70',
  name:'ZEBRONICS ZEB-BRO Wired Headset ',
  price:1000,
  desc:'Unlike traditional, circular earbuds, the design of the EarPods is defined by the geometry of the ear. Which makes them more comfortable for more people than any other earbud-style headphones',
  color:'black',
  company:'Zebronics',
  type:'wired',
  shortDesc:'Zebronics is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1674043598/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/204100_0_rtgop0.png?tr=w-640',
  name:'SONY MDR-XB55AP/LQIN Wired Earphone with Mic',
  price:1000,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'blue',
  company:'Sony',
  type:'wired',
  shortDesc:'Sony is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCzHStmUHGZHayRWRdCKegM610053n8erFvjD7v7ZpCZftmo9mKuxEe4YGrnBCeon1A1kmLvjz8dwQ_IyQjQVzIGpGQ4U66tyEZMXUKeWmExdnUlTr_8IG&usqp=CAE',
  name:'Boult Audio X1 Pro Wired Earphones With Type-C Port, 10mm Bass Drivers ',
  price:1000,
  desc:'Type-C Wired Earphones : Immerse yourself in an unparalleled audio experience, thanks to the remarkable sound quality delivered by our wired earphones with Type-C connectivity. Whether you are on the move or taking a moment to relax, the convenience of Type-C connection enhances your overall enjoyment, ensuring a seamless and uninterrupted',
  color:'black',
  company:'Boult',
  type:'wired',
  shortDesc:'Boult is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTUSdRzuJmJiouTwJwwPfjylERYrd1HIfpWSGtkfKNzUmSSNOTo7g3KmN8FnBtjf3ya4b2xtiJY6qzIW1z6O8fR_YPnf413P15LZjqYQeLZc9sjbYBcZCqBtQ&usqp=CAE',
  name:'boAt Rockerz 103 Pro M Bluetooth Headset  ',
  price:2500,
  desc:'Wireless Earphones with 10 mm Drivers, Single Press Voice Assistant, Up To 20 Hours Uninterrupted, ENx™ Technology the convenience of Type-C connection enhances your overall enjoyment, ensuring a seamless and uninterrupted',
  color:'blue',
  company:'boat',
  type:'wireless',
  shortDesc:'Boat is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Gf3CX1Yt57XLJIW0y1AlvuUAN1F-He1boXAV3kZDF4ia-N05btdMxJH07GZmmKgpBBY&usqp=CAU',
  name:'Intex Standard On-Ear Headphone with Mic',
  price:2500,
  desc:'High-Quality Sound: Intex aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'black',
  company:'Intex',
  type:'wireless',
  shortDesc:'Intex is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-EPOS-PC5-CHAT-03.jpg?v=1644040398&width=1160',
  name:'Realme Headphone',
  price:2500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'black',
  company:'Realme',
  type:'wireless',
  shortDesc:'Realme is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://m.media-amazon.com/images/I/61Wyl9B6XxL._SX679_.jpg',
  name:'Zebronics Zeb-Blitz USB Gaming Wired Over Ear Headphones',
  price:2500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'white',
  company:'Zebronics',
  type:'wireless',
  shortDesc:'Zebronics is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://rukminim1.flixcart.com/image/850/1000/kfvfwy80/microphone/v/q/t/wanzhow-presenting-a-top-selling-universal-headphone-neckband-original-imafg29tvsakwcdj.jpeg?q=90',
  name:'Head Band 3.5M Microphone',
  price:2500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'black',
  company:'boat',
  type:'wired',
  shortDesc:'boat is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://cdn.shopclues.com/images1/thumbnails/115649/280/1/152818022-115649798-1666351452.jpg',
  name:'Nokia buds',
  price:500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'white',
  company:'Nokia',
  type:'wired',
  shortDesc:'Nokia is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://cdn.shopclues.com/images1/thumbnails/114863/280/1/152576120-114863165-1627472818.jpg',
  name:'boAT Microphone',
  price:500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'black',
  company:'boat',
  type:'wired',
  shortDesc:'Boat is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://cdn.shopclues.com/images1/thumbnails/116643/280/1/153176883-116643097-1665542458.jpg',
  name:'Sony Airpod',
  price:2500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'black',
  company:'Sony',
  type:'wireless',
  shortDesc:'Sony is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPL8J6MLf6H1DBTv6CIDX5ca8SolI4ECmCg&usqp=CAU',
  name:'Boat Microphone',
  price:2500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'blue',
  company:'Boat',
  type:'wired',
  shortDesc:'Boat is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61mkcrITp8L._AC_UF1000,1000_QL80_.jpg',
  name:'JBL Headphone',
  price:2500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'blue',
  company:'JBL',
  type:'wireless',
  shortDesc:'JBL is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp5LBRZ4uhuV42_h8x_oMdF3slcxyRvm78Q&usqp=CAU',
  name:'Sony Headphone ',
  price:2500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'blue',
  company:'Sony',
  type:'wireless',
  shortDesc:'Sony is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://images.jdmagicbox.com/quickquotes/images_main/amz-headphones-03-10-2019-b07nkv56mp-175494482-78u8k.png',
  name:'Boat Microphone',
  price:2500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'blue',
  company:'Boat',
  type:'wired',
  shortDesc:'Boat is known for producing a variety of audio products, including headphones, earphones, and speakers'
},
{
  image:'https://m.media-amazon.com/images/I/31QlM6ReDvL._SX300_SY300_QL70_FMwebp_.jpg',
  name:'JBL Microphone',
  price:2500,
  desc:'High-Quality Sound: Realme aims to deliver a good audio experience, with a focus on clear and balanced sound Ergonomic Design: Many Realme earphones are designed for comfort, with considerations for extended use.',
  color:'blue',
  company:'JBL',
  type:'wired',
  shortDesc:'JBL is known for producing a variety of audio products, including headphones, earphones, and speakers'
}
]
export {products}