import React from 'react';

const SideNav = () => {
    return (
        <div className='p-4 w-auto'>
            <div className='text-center'>
                {/* <img src=''/> */}
                <h1>Daily</h1>
                <br></br>
                <h1>Shopping</h1>
            </div>
            <ul className="menu bg-base-200 w-56 rounded-xl ">
                <li className='text-lg font-bold'><a>All Product</a></li>
                <li className='text-lg font-bold'><a>Catagory</a></li>
                <li className='text-lg font-bold'><a>Deal for today</a></li>
                <li className='text-lg font-bold'><a>BOGO</a></li>
            </ul>
        </div>
    );
};

export default SideNav;