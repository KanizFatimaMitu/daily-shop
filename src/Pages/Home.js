import React from 'react';
import './Home.css'
import SideNav from '../Components/SideNav'
import Content from '../Components/Content'
import AddToCart from '../Components/AddToCart'

const Home = () => {
    return (
        <div className='appGlass'>
           <SideNav></SideNav>
           <Content></Content>
           <AddToCart></AddToCart>
        </div>
    );
};

export default Home;