import React, { useContext } from 'react';
// import Link
import { Link } from 'react-router-dom';
// import icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';
// import cart context
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
    // cart context
    const { addToCart } = useContext(CartContext);
    // destructure product
    const { id, category, price, title, image } = product;
    return (
        <div>
            <div className="relative overflow-hidden border border-[#e4e4e4] h-[300px] mb-4 group transition ">
                <div className="w-full h-full flex items-center justify-center">
                    {/* image */}
                    <div className="w-[200px] mx-auto flex items-center justify-center">
                        <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} />
                    </div>
                </div>
                {/* button */}
                <div className="absolute top-6 -right-11 group-hover:right-5 p-2  flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button onClick={() => addToCart(id, product)}>
                        <div className="flex items-center justify-center text-white h-12 w-12 bg-red-500">
                            <BsPlus className="text-3xl" />
                        </div>
                    </button>
                    <Link
                        to={`/product/${id}`}
                        className="flex items-center justify-center w-12 h-12 bg-white text-primary drop-shadow-xl"
                    >
                        <BsEyeFill />
                    </Link>
                </div>
            </div>
            {/* category & title & price */}
            <div>
                <div className="text-sm capitalize mb-1 text-gray-500">{category}</div>
                <Link to={`/product/${id}`}>
                    <h2 className="font-semibold mb-1">{title}</h2>
                </Link>
                <div className="font-semibold">{price}</div>
            </div>
        </div>
    );
};

export default Product;
