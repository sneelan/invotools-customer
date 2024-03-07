import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Inner_Page_Root = ({ title, children }) => {
  return (
    <>
      <section className='px-2 pt-3 pb-2 border-top'>
        <div className='text-center text-lg-start xbg-theme-secondary-1 text-secondary'>
          <div className="container-xl">
            <h3 className={`m-0 weight-medium text-secondary fw-bold`}>{title}</h3>
          </div> 
        </div>
        <div className="container-xl mt-3 p-2 p-xl-5 bg-white rounded shadow-sm border border-theme-secondary-verylight">
          {children}
        </div>
      </section>     
    </>
  );
};

export default Inner_Page_Root;