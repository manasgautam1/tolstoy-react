import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='topbar d-flex align-items-center justify-content-between py-3 px-3 d-lg-flex d-none'>
        <h6 className='mb-0'>Dashboard</h6>
        <div className='searchbar-container input-group'>
          <div className='input-group-prepend'>
            {/* <select className='form-select' aria-label='Default select example'>
              <option className='select-option' selected>
                All
              </option>
              <option className='select-option' value='1'>
                Option 1
              </option>
              <option className='select-option' value='2'>
                Option 1
              </option>
              <option className='select-option' value='3'>
                Option 1
              </option>
            </select> */}
            <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                id='searchbar-dropdown'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                All
              </button>
              <div
                className='dropdown-menu'
                aria-labelledby='searchbar-dropdown'
              >
                <button className='dropdown-item' type='button'>
                  Option 1
                </button>
                <button className='dropdown-item' type='button'>
                  Option 2
                </button>
                <button className='dropdown-item' type='button'>
                  Option 3
                </button>
              </div>
            </div>
          </div>
          <input type='text' className='form-control' placeholder='Search...' />
          <div className='input-group-append'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <div className='dropdown profile-dropdown-cont'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            id='profile-dropdown'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <img
              src='/images/dashboard/profile-img.png'
              className='profile-img'
              alt=''
            />
            Darrell Steward
          </button>
          <div className='dropdown-menu' aria-labelledby='profile-dropdown'>
            <button className='dropdown-item' type='button'>
              <i className='fa-solid fa-user me-2'></i> My Profile
            </button>
            <button className='dropdown-item' type='button'>
              <i className='fa-solid fa-gear me-2'></i> Settings
            </button>
            <button className='dropdown-item' type='button'>
              <i className='fa-solid fa-right-from-bracket me-2'></i> Logout
            </button>
          </div>
        </div>
      </nav>
      <div className='mobile-nav d-lg-none d-block'>
        <nav className='topbar d-flex align-items-baseline justify-content-between py-3 px-3'>
          <span>
            <i className='fa-solid fa-bars'></i>
          </span>
          <div className='logo-container py-0 mb-0'>
            <img src='/images/dashboard/dash-logo.png' alt='' />
            <h6 className='text-uppercase mb-0'>clean meat terminal</h6>
          </div>
          <div className='dropdown profile-dropdown-cont'>
            <button
              className='btn btn-secondary dropdown-toggle'
              type='button'
              id='profile-dropdown'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <img
                src='/images/dashboard/profile-img.png'
                className='profile-img'
                alt=''
              />
            </button>
            <div className='dropdown-menu' aria-labelledby='profile-dropdown'>
              <button className='dropdown-item' type='button'>
                <i className='fa-solid fa-user me-2'></i> My Profile
              </button>
              <button className='dropdown-item' type='button'>
                <i className='fa-solid fa-gear me-2'></i> Settings
              </button>
              <button className='dropdown-item' type='button'>
                <i className='fa-solid fa-right-from-bracket me-2'></i> Logout
              </button>
            </div>
          </div>
        </nav>
        <nav className='topbar d-flex align-items-baseline justify-content-between pb-3 px-3'>
          <div className='searchbar-container input-group'>
            <div className='input-group-prepend'>
              <select
                className='form-select'
                aria-label='Default select example'
              >
                <option className='select-option' selected>
                  All
                </option>
                <option className='select-option' value='1'>
                  Option 1
                </option>
                <option className='select-option' value='2'>
                  Option 1
                </option>
                <option className='select-option' value='3'>
                  Option 1
                </option>
              </select>
              {/* <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="searchbar-dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All
                </button>
                <div className="dropdown-menu" aria-labelledby="searchbar-dropdown">
                  <button className="dropdown-item" type="button">Option 1</button>
                  <button className="dropdown-item" type="button">Option 2</button>
                  <button className="dropdown-item" type="button">Option 3</button>
                </div>
              </div> */}
            </div>
            <input
              type='text'
              className='form-control'
              placeholder='Search...'
            />
            <div className='input-group-append'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </div>
          </div>
        </nav>
        <nav className='topbar heading-container py-3 px-3'>
          <h6>Dashboard</h6>
          <p>Monitoring & Analytics</p>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
