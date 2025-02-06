import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../Redux/Cartslice';
import Navbar from '../component/Navbar';

const Cart = () => {
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart);
    
    const handleRemove = (id) => {
        dispatch(remove({ id }));
    };

    return (
        <div className="p-4">
            <Navbar />
            <div className="flex justify-between items-center mt-6 mb-8">
                <h3 className="font-bold text-2xl text-center">Cart Page</h3>
                <Link to="/" className="bg-[#3ba079] hover:bg-[#3ba079c2] text-white font-bold py-2 px-4 rounded">
                    Back to Home
                </Link>
            </div>
            <div className="cartWrapper space-y-4">
                {cartitems.map((item) => (
                    <div className="cartCard flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md p-4" key={item.id}>
                        <img className="w-24 h-24 object-cover mb-4 md:mb-0 md:mr-4 rounded" src={item.image} alt="img" />
                        <div className="flex flex-col items-center md:items-start flex-1">
                            <h5 className="text-lg font-medium">{item.title}</h5>
                            <h5 className="text-sm text-gray-700">₹{item.price}</h5>
                            <h5 className="text-sm text-gray-700">Quantity: {item.quantity}</h5>
                        </div>
                        <button
                            className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0"
                            onClick={() => handleRemove(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
