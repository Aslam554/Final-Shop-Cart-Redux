import React, { useEffect, useState } from 'react';
import { add } from '../Redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchproducts } from '../Redux/ProductSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../component/Navbar';

const Home = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
        toast.success(`${product.title} added to cart!`);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (status === STATUSES.Loading) {
        return <h2 className="font-bold text-2xl">Loading...</h2>;
    }

    return (
        <div>
            <ToastContainer />
            <Navbar onSearch={handleSearch} />
            <div className="mt-20 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-4/5 p-4 mb-[120px]">
                {filteredProducts.map((product) => (
                    <div
                        className="w-[320px] bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center hover:transform hover:scale-105 transition-transform duration-300"
                        key={product.id}
                    >
                        <img className="w-[230px] h-48 object-contain mb-4 rounded-t-lg" src={product.image} alt="img" />
                        <div className="p-2">
                            <h4 className="text-lg font-medium">{product.title}</h4>
                            <h5 className="text-sm text-gray-700">{product.price}</h5>
                            <button
                                className="mt-2 w-full bg-[#3ba079] hover:bg-[#3ba079c2] text-white font-bold py-2 px-4 rounded-b-lg"
                                onClick={() => handleAdd(product)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
