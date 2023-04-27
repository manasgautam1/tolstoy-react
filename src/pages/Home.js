import React from 'react';
import SocialChart from '../components/charts/SocialChart';
import InvestChart from '../components/charts/InvestChart';
import MyCalendar from '../components/calendar/Calendar';

const Home = () => {
  return (
    <section className='pt-4 px-3 mb-5 pb-2'>
      <div className='row mx-0 mb-4'>
        <div className='col-lg-8 main-featured mb-4 order-1'>
          <div className='featured-news mb-3'>
            <h5 className='mb-0 d-flex align-items-center justify-content-between px-3 pt-3 pb-3'>
              Featured News
              <div className='dropdown'>
                <button
                  className='btn btn-outline-secondary dropdown-toggle'
                  type='button'
                  id='searchbar-dropdown'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Last Week
                </button>
                <div
                  className='dropdown-menu'
                  aria-labelledby='searchbar-dropdown'
                >
                  <button className='dropdown-item' type='button'>
                    All Time
                  </button>
                  <button className='dropdown-item' type='button'>
                    Last Week
                  </button>
                  <button className='dropdown-item' type='button'>
                    Last Month
                  </button>
                  <button className='dropdown-item' type='button'>
                    Last Year
                  </button>
                </div>
              </div>
            </h5>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'
            >
              <ul className='carousel-indicators'>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='0'
                  className='active'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='1'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='2'
                ></li>
              </ul>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img
                    className='d-block w-100'
                    src='./images/dashboard/showcase-img.png'
                    alt='First slide'
                  />
                  <div className='carousel-caption'>
                    <h6>
                      FDA completes first pre market consultation for businesses
                    </h6>
                    <div className='d-flex align-items-center justify-content-start'>
                      <div className='author d-flex align-items-center me-3'>
                        <img
                          src='./images/dashboard/news/new-author-img.png'
                          alt=''
                          className='me-2'
                        />
                        Crunch
                      </div>
                      <div className='time me-3'>1 hrs ago</div>
                      <span className='badge badge-green'> Invest </span>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <img
                    className='d-block w-100'
                    src='./images/dashboard/showcase-img.png'
                    alt='Second slide'
                  />
                  <div className='carousel-caption'>
                    <h6>
                      FDA completes first pre market consultation for businesses
                    </h6>
                    <div className='d-flex align-items-center justify-content-start'>
                      <div className='author d-flex align-items-center me-3'>
                        <img
                          src='./images/dashboard/news/new-author-img.png'
                          alt=''
                          className='me-2'
                        />
                        Crunch
                      </div>
                      <div className='time me-3'>1 hrs ago</div>
                      <span className='badge badge-green'> Invest </span>
                    </div>
                  </div>
                </div>
                <div className='carousel-item'>
                  <img
                    className='d-block w-100'
                    src='./images/dashboard/showcase-img.png'
                    alt='Third slide'
                  />
                  <div className='carousel-caption'>
                    <h6>
                      FDA completes first pre market consultation for businesses
                    </h6>
                    <div className='d-flex align-items-center justify-content-start'>
                      <div className='author d-flex align-items-center me-3'>
                        <img
                          src='./images/dashboard/news/new-author-img.png'
                          alt=''
                          className='me-2'
                        />
                        Crunch
                      </div>
                      <div className='time me-3'>1 hrs ago</div>
                      <span className='badge badge-green'> Invest </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row social-invest mx-0'>
            <div className='col-md-6 mb-md-0 mb-4 ps-0'>
              <div className='social-media py-4 px-3'>
                <h5 className='mb-3'>Social Media</h5>
                <div className='row mx-0'>
                  <div className='col-4 px-0'>
                    <div>
                      <h6 className='d-flex align-items-center mb-2'>
                        <img
                          className='me-2'
                          src='./images/dashboard/twitter.png'
                          alt=''
                        />
                        50 M
                      </h6>
                      <p className='mb-0'>Total Followers</p>
                    </div>
                    <hr className='my-3' />
                    <div>
                      <h6 className='d-flex align-items-center mb-2'>
                        <img
                          className='me-2'
                          src='./images/dashboard/instagram.png'
                          alt=''
                        />
                        2.2 M
                      </h6>
                      <p className='mb-1'>Total Followers</p>
                    </div>
                  </div>
                  <div className='col-8'>
                    <SocialChart />
                    {/* <img
                      src='./images/dashboard/chart.png'
                      className='d-block w-100'
                      alt=''
                      height='133.63px'
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 pe-0'>
              <div className='investment py-4 px-3'>
                <h5 className='mb-3'>Investment by Quarter</h5>
                <div className=''>
                  <InvestChart />
                  {/* <img
                    src='./images/dashboard/chart.png'
                    className='d-block w-100'
                    alt=''
                    height='133.63px'
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 mb-4 order-2'>
          <div className='latest-news py-4 px-3'>
            <h5 className='mb-3'>Latest News</h5>
            <div className='news-container'>
              <div className='news-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-1.png' alt='' />
                <div>
                  <h6>Determining when to engage with politcs & client</h6>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='author d-flex align-items-center'>
                      <img
                        src='./images/dashboard/news/new-author-img.png'
                        alt=''
                      />
                      Crunch
                    </div>
                    <div className='time'>1 hrs ago</div>
                    <span className='badge badge-red'> Invest </span>
                  </div>
                </div>
              </div>
              <div className='news-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-2.png' alt='' />
                <div>
                  <h6>Determining when to engage with politcs & client</h6>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='author d-flex align-items-center'>
                      <img
                        src='./images/dashboard/news/new-author-img.png'
                        alt=''
                      />
                      Crunch
                    </div>
                    <div className='time'>1 hrs ago</div>
                    <span className='badge badge-green'> Sports </span>
                  </div>
                </div>
              </div>
              <div className='news-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-3.png' alt='' />
                <div>
                  <h6>Determining when to engage with politcs & client</h6>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='author d-flex align-items-center'>
                      <img
                        src='./images/dashboard/news/new-author-img.png'
                        alt=''
                      />
                      Crunch
                    </div>
                    <div className='time'>1 hrs ago</div>
                    <span className='badge badge-green'> Sports </span>
                  </div>
                </div>
              </div>
              <div className='news-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-4.png' alt='' />
                <div>
                  <h6>Determining when to engage with politcs & client</h6>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='author d-flex align-items-center'>
                      <img
                        src='./images/dashboard/news/new-author-img.png'
                        alt=''
                      />
                      Crunch
                    </div>
                    <div className='time'>1 hrs ago</div>
                    <span className='badge badge-pink'> Invest </span>
                  </div>
                </div>
              </div>
              <div className='news-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-1.png' alt='' />
                <div>
                  <h6>Determining when to engage with politcs & client</h6>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='author d-flex align-items-center'>
                      <img
                        src='./images/dashboard/news/new-author-img.png'
                        alt=''
                      />
                      Crunch
                    </div>
                    <div className='time'>1 hrs ago</div>
                    <span className='badge badge-red'> Invest </span>
                  </div>
                </div>
              </div>
              <div className='news-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-2.png' alt='' />
                <div>
                  <h6>Determining when to engage with politcs & client</h6>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='author d-flex align-items-center'>
                      <img
                        src='./images/dashboard/news/new-author-img.png'
                        alt=''
                      />
                      Crunch
                    </div>
                    <div className='time'>1 hrs ago</div>
                    <span className='badge badge-green'> Sports </span>
                  </div>
                </div>
              </div>
              <div className='news-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-3.png' alt='' />
                <div>
                  <h6>Determining when to engage with politcs & client</h6>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='author d-flex align-items-center'>
                      <img
                        src='./images/dashboard/news/new-author-img.png'
                        alt=''
                      />
                      Crunch
                    </div>
                    <div className='time'>1 hrs ago</div>
                    <span className='badge badge-green'> Sports </span>
                  </div>
                </div>
              </div>
              <div className='news-card d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-4.png' alt='' />
                <div>
                  <h6>Determining when to engage with politcs & client</h6>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='author d-flex align-items-center'>
                      <img
                        src='./images/dashboard/news/new-author-img.png'
                        alt=''
                      />
                      Crunch
                    </div>
                    <div className='time'>1 hrs ago</div>
                    <span className='badge badge-pink'> Invest </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center mt-3'>
              <button className='btn btn-outline-secondary'>
                Show New Articles
              </button>
            </div>
          </div>
        </div>
        <div className='col-lg-8 order-lg-3 order-md-4 order-3 mb-md-0 mb-4'>
          <div className='row mx-0 pt-4 events-container pb-4 px-2'>
            <div className='col-md-6 mb-md-0 mb-4'>
              <h5 className='mb-4'>Events</h5>
              <div className='calendar-container'>
                {/* <img
                  src='./images/dashboard/calendar.png'
                  className='w-100'
                  alt=''
                /> */}
                <MyCalendar />
              </div>
            </div>
            <div className='col-md-6'>
              <h5 className='mb-4'>Upcoming Events</h5>
              <div className='events-container'>
                <div className='events-card d-flex align-items-center justify-content-between pb-3 mb-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <img src='./images/dashboard/news/news-img-1.png' alt='' />
                    <div>Future Food Tech</div>
                  </div>
                  <div>March 16-17</div>
                </div>
                <div className='events-card d-flex align-items-center justify-content-between pb-3 mb-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <img src='./images/dashboard/news/news-img-2.png' alt='' />
                    <div>Future Food Tech</div>
                  </div>
                  <div>March 16-17</div>
                </div>
                <div className='events-card d-flex align-items-center justify-content-between pb-3 mb-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <img src='./images/dashboard/news/news-img-3.png' alt='' />
                    <div>Future Food Tech</div>
                  </div>
                  <div>March 16-17</div>
                </div>
                <div className='events-card d-flex align-items-center justify-content-between pb-3 mb-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <img src='./images/dashboard/news/news-img-4.png' alt='' />
                    <div>Future Food Tech</div>
                  </div>
                  <div>March 16-17</div>
                </div>
                <div className='events-card d-flex align-items-center justify-content-between pb-3'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <img src='./images/dashboard/news/news-img-1.png' alt='' />
                    <div>Future Food Tech</div>
                  </div>
                  <div>March 16-17</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 order-lg-4 order-md-3 order-4'>
          <div className='latest-research py-4 pb-3 px-3'>
            <h5 className='mb-2'>Latest Research</h5>
            <div className='research-container'>
              <div className='research-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-1.png' alt='' />
                <div>
                  <h6 className='mb-1'>
                    Determining when to engage with politcs & client
                  </h6>
                  <p className='mb-0'>
                    Oklahama State University | August 18,2022
                  </p>
                </div>
              </div>
              <div className='research-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-2.png' alt='' />
                <div>
                  <h6 className='mb-1'>
                    Determining when to engage with politcs & client
                  </h6>
                  <p className='mb-0'>
                    Oklahama State University | August 18,2022
                  </p>
                </div>
              </div>
              <div className='research-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-3.png' alt='' />
                <div>
                  <h6 className='mb-1'>
                    Determining when to engage with politcs & client
                  </h6>
                  <p className='mb-0'>
                    Oklahama State University | August 18,2022
                  </p>
                </div>
              </div>
              <div className='research-card mb-3 d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-4.png' alt='' />
                <div>
                  <h6 className='mb-1'>
                    Determining when to engage with politcs & client
                  </h6>
                  <p className='mb-0'>
                    Oklahama State University | August 18,2022
                  </p>
                </div>
              </div>
              <div className='research-card d-flex p-2 align-items-center'>
                <img src='./images/dashboard/news/news-img-1.png' alt='' />
                <div>
                  <h6 className='mb-1'>
                    Determining when to engage with politcs & client
                  </h6>
                  <p className='mb-0'>
                    Oklahama State University | August 18,2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
