import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// import components
import CartItem from '../components/CartItem';
// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// import cart context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);

    const { cart, clearCart, total, itemAmount } = useContext(CartContext);

    return (
        <div
            className={`${
                isOpen ? 'right-0' : '-right-full'
            } fixed top-0 bg-white w-full h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-[100] px-4 lg:px-[35px]`}
        >
            <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
                {/* icon */}
                <div className="cursor-pointer w-8 h-8 flex items-center justify-center" onClick={handleClose}>
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>
            <div className="overflow-auto h-[calc(100vh-330px)] lg:h-[calc(100vh-300px)]">
                {cart.map((item) => {
                    return <CartItem key={item.id} item={item} />;
                })}
            </div>
            <div className="flex flex-col gap-y-3 py-4 mt-4">
                {total ? (
                    <div className="flex items-center justify-between w-full">
                        {/* total */}
                        <div className="uppercase font-semibold">
                            <span className="mr-2">Total:</span> $ {parseFloat(total).toFixed(2)}
                        </div>
                        {/* clear cart icon */}
                        <div
                            className="cursor-pointer py-4 w-12 h-12 flex items-center justify-center bg-red-500 text-white text-xl"
                            onClick={clearCart}
                        >
                            <FiTrash2 />
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-semibold">There are no products in the cart</p>
                )}
            </div>
            <Link
                to={'/'}
                className="bg-gray-200 flex items-center justify-center text-primary w-full font-medium p-4 mb-4"
            >
                View cart
            </Link>
            <Link to={'/'} className="bg-primary flex items-center justify-center text-white w-full font-medium p-4">
                Checkout
            </Link>
        </div>
    );
};

export default Sidebar;
