import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ onSearch }) => {
    const items = useSelector((state) => state.cart);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="fixed w-full bg-[#3BA079C6] text-white text-lg py-2 px-4 flex flex-col md:flex-row items-center justify-between z-50 mt-[-80px]">
            <span className="text-center md:text-left mb-2 md:mb-0">Redux Tutorial Shopping Cart</span>
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex items-center mb-2 md:mb-0">
                    <Link className="navLink font-bold text-white no-underline mr-4 hover:bg-purple-600 p-2 rounded-md" to="/">Home</Link>
                    <Link className="navLink font-bold text-white no-underline mr-4 hover:bg-purple-600 p-2 rounded-md" to="/cart">Cart</Link>
                    <span className="font-bold flex items-center relative">
                        <ShoppingCart size={24} />
                        <span className="absolute top-[-15px] right-0 bg-red-500 text-white font-bold rounded-full px-1 text-sm">{items.length}</span>
                    </span>
                </div>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="searchInput w-full md:w-2/5 mx-2 p-1 bg-white text-black"
                />
            </div>
            <div className="totalPrice ml-4 font-bold mt-2 md:mt-0">
                Total Price: ₹{totalPrice.toFixed(2)}
            </div>
        </div>
    );
};

export default Navbar;
