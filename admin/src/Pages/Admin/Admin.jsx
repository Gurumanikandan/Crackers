import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';


const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/admin/Addproduct' element={<AddProduct />} />
        <Route path='/admin/Listproduct' element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;

/*
import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/listproduct' element={<ListProduct />} />
      </Routes>
    </div>
  )
}

export default Admin*/