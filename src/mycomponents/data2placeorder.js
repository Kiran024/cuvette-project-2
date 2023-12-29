import image from './headphone-removebg-preview.png';

let total = 3500;
let discount = 0;
let Convenience = 45;

const order = [
    {
        image: image,
        ProductName: 'Sony',
        color: 'black',
        stock: 'in stock',
        price: 3500,
        Quantity: 12,
        total: total,
        totalmrp: total,
        discount: discount,
        Convenience: Convenience,
        totalamount: total + discount + Convenience,
    }
];

export { order };
