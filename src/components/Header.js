import React, { useContext, useEffect, useState } from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { BsBag } from 'react-icons/bs';
// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
// import logo
import Logo from '../img/logo.svg';

const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    const handleScroll = () => {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header
            className={`${
                isActive ? 'bg-white py-2 shadow-md' : 'py-4 bg-transparent'
            } fixed w-full z-50 transition-all`}
        >
            <div className="container mx-auto flex items-center justify-between h-full">
                <Link to={'/'}>
                    <div>
                        <img src={Logo} className="w-[40px]" />
                    </div>
                </Link>
                <div className="cursor-pointer flex relative " onClick={() => setIsOpen(!isOpen)}>
                    <BsBag className="text-2xl" />
                    {itemAmount ? (
                        <span className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center">
                            {itemAmount}
                        </span>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
