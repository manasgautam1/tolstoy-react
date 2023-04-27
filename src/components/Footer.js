import React from 'react';

const Footer = () => {
  return (
    <div className='px-lg-3 footer-container'>
      <footer className='footer p-3'>
        <div className='d-flex align-items-center justify-content-between'>
          <div>2023 &copy; Tolstoy Tech. All rights reserved</div>
          <div>
            <a href='/' className='me-4'>
              {' '}
              Pythag Monitoring & Analytics{' '}
            </a>
            <a href='/' className='me-4'>
              {' '}
              Privacy Policy{' '}
            </a>
            <a href='/' className=''>
              {' '}
              Contact{' '}
            </a>
          </div>
          <div>
            <a href='' className='me-2'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href='' className='me-2'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href='' className='me-2'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href=''>
              <i className='fa-brands fa-twitter'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
