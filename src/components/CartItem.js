import React from 'react';
// import link
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
    // destructure item
    const { id, title, image, price, amount } = item;
    return (
        <div className="flex">
            <div className="w-full flex items-center gap-x-4 min-h-[150px]">
                {/* image */}
                <Link to={`/product/${id}`}>
                    <img src={image} className="max-w-[80px]" alt={title} />
                </Link>
            </div>
        </div>
    );
};

export default CartItem;
