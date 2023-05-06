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

    const { cart, clearCart } = useContext(CartContext);
    return (
        <div
            className={`${
                isOpen ? 'right-0' : '-right-full'
            } fixed top-0 bg-white w-full h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
        >
            <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
                {/* icon */}
                <div className="cursor-pointer w-8 h-8 flex items-center justify-center" onClick={handleClose}>
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>
            <div>
                {cart.map((item) => {
                    return <CartItem key={item.id} item={item} />;
                })}
            </div>
            <div>
                <div className="bg-pink-200 flex items-center justify-between w-full">
                    {/* total */}
                    <div>
                        <span>Total:</span> $ 1000
                    </div>
                    {/* clear cart icon */}
                    <div
                        className="cursor-pointer py-4 w-12 h-12 flex items-center justify-center bg-red-500 text-white text-xl"
                        onClick={clearCart}
                    >
                        <FiTrash2 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
