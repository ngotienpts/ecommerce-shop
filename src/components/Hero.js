import React from 'react';
// import woman
import womanImg from '../img/woman_hero.png';
// import link
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="bg-hero bg-no-repeat bg-cover bg-center h-[800px] bg-[##f5e6e0] py-24">
            <div className="container mx-auto flex justify-around h-full">
                {/* text */}
                <div className="flex flex-col justify-center">
                    {/* pretitle */}
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
                    </div>
                    {/* title */}
                    <h1 className="uppercase text-[70px] leading-[1.1] font-light mb-4">
                        autumn sale stylish <br />
                        <span className="font-semibold">womens</span>
                    </h1>
                    <Link to={'/'} className="self-start uppercase border-primary border-b-2 font-semibold">
                        Discover More
                    </Link>
                </div>
                {/* image */}
                <div className="hidden lg:block">
                    <img src={womanImg} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
