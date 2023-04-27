import React from 'react';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='logo-container py-1 mb-2'>
        <img src='/images/dashboard/dash-logo.png' alt='' />
        <h6 className='text-uppercase mb-0'>clean meat terminal</h6>
      </div>
      <ul className='list-group px-0'>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3 active'>
            <img src='/images/dashboard/sidebar-icons/dashboard.svg' alt='' />
            <span className='d-inline-block ms-3'>Dashboard</span>
          </a>
        </li>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3'>
            <img src='/images/dashboard/sidebar-icons/companies.svg' alt='' />
            <span className='d-inline-block ms-3'>Companies</span>
          </a>
        </li>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3'>
            <img src='/images/dashboard/sidebar-icons/news.svg' alt='' />
            <span className='d-inline-block ms-3'>News</span>
          </a>
        </li>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3'>
            <img src='/images/dashboard/sidebar-icons/location.svg' alt='' />
            <span className='d-inline-block ms-3'>
              Product & Facility Locator
            </span>
          </a>
        </li>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3'>
            <img src='/images/dashboard/sidebar-icons/research.svg' alt='' />
            <span className='d-inline-block ms-3'>Research</span>
          </a>
        </li>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3'>
            <img src='/images/dashboard/sidebar-icons/market.svg' alt='' />
            <span className='d-inline-block ms-3'>Market Data</span>
          </a>
        </li>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3'>
            <img src='/images/dashboard/sidebar-icons/events.svg' alt='' />
            <span className='d-inline-block ms-3'>Events</span>
          </a>
        </li>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3'>
            <img src='/images/dashboard/sidebar-icons/regulation.svg' alt='' />
            <span className='d-inline-block ms-3'>Regulation</span>
          </a>
        </li>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3'>
            <img
              src='./images/dashboard/sidebar-icons/partnership.svg'
              alt=''
            />
            <span className='d-inline-block ms-3'>Partnerships</span>
          </a>
        </li>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3'>
            <img src='/images/dashboard/sidebar-icons/education.svg' alt='' />
            <span className='d-inline-block ms-3'>Education</span>
          </a>
        </li>
        <li className='list-group-item py-1 mb-1'>
          <a href='' className='d-flex align-items-center py-2 px-3'>
            <img src='/images/dashboard/sidebar-icons/contact.svg' alt='' />
            <span className='d-inline-block ms-3'>Contact Support</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
