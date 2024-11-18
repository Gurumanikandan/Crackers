import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import shop_cart from '../../assets/shopping_cart.png'
import shop_list from '../../assets/cart_list.png'
import display from '../../assets/display.png'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to={'/admin/addproduct'} style={{ textDecoration: "none" }} >
                <div className="sidebar-items">
                    <img src={shop_cart} alt='' className='side-img' />
                    <p>ADD PRODUCT</p>
                </div>
            </Link>
            <Link to={'/admin/listproduct'} style={{ textDecoration: "none" }} >
                <div className="sidebar-items">
                    <img src={shop_list} alt='' className='side-img' />
                    <p>LIST PRODUCT</p>
                </div>
            </Link>
            <Link to={'/admin/Display'} style={{ textDecoration: "none" }} >
                <div className="sidebar-items">
                    <img src={display} alt='' className='side-img' />
                    <p>DISPLAY PRODUCT</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar