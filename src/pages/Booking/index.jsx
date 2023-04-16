import React from "react";

import '@styles/pages/_booking.scss';

export default function BookingPage (){
    return(
        <>
            <div className="app-container">
                <section className="navigation">
                    <a href="#" className="app-link">Travelers</a>
                    <div className="navigation-links">
                        <a href="#" className="nav-link ">Destinations</a>
                        <a href="#" className="nav-link active">Hotels</a>
                        <a href="#" className="nav-link">Camping</a>
                        <a href="#" className="nav-link">Car Rent</a>
                    </div>
                    <div className="nav-right-side">
                        <button className="mode-switch">
                            <svg className="sun feather feather-sun" fill="none" stroke="#fbb046" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  viewBox="0 0 24 24"><defs/><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                            <svg className="moon feather feather-moon" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><defs/><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                        </button>
                        <button className="profile-btn">
                            <span>Ryan Evans</span>
                            <img src="https://images.unsplash.com/photo-1492633397843-92adffad3d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80" alt="pp"/>;
                        </button>
                    </div>  
                </section>
                <section className="app-actions">
                    <div className="app-actions-line">
                        <div className="search-wrapper">
                            <button className="loaction-btn">
                                <svg className="btn-icon feather feather-map-pin" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  viewBox="0 0 24 24">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </button>
                            <input type="text" className="search-input" value="San Francisco, Stockton Street"/>
                            <button className="search-btn">Find Hotel</button>
                        </div>
                        <div className="contact-actions-wrapper">
                            <div className="contact-actions">
                                <span>Contact us: </span>
                                <a href="#" className="contact-link">
                                    <svg className="btn-icon feather feather-phone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </a>
                                <a href="#" className="contact-link">
                                    <svg className="btn-icon feather feather-message-circle" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="contact-actions socials">
                              <span>Follow us: </span>
                                <a href="#" className="contact-link facebook">
                                  <svg className="btn-icon feather feather-facebook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                </a>
                                <a href="#" className="contact-link">
                                  <svg className="btn-icon feather feather-twitter" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                  </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="app-actions-line filter-line">
                        <div className="filter-action-buttons">
                            <button className="filter-btn">
                                <div className="filter-icon">
                                    <svg className="btn-icon feather feather-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                </div>
                              <span className="filter-text">Sat,Nov 10-Fri,Nov 22</span>
                            </button>
                            <button className="filter-btn">
                                <div className="filter-icon">
                                  <svg className="btn-icon feather feather-book" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                                </div>
                              <span className="filter-text">Rooms - 2</span>
                            </button>
                            <button className="filter-btn">
                                <div className="filter-icon">
                                  <svg className="btn-icon feather feather-users" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                      <circle cx="9" cy="7" r="4"/>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                                  </svg>
                                </div>
                              <span className="filter-text">Adults - 2</span>
                              </button>
                                <button className="filter-btn">
                                  <div className="filter-icon">
                                    <svg className="btn-icon feather feather-users" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  viewBox="0 0 24 24">
                                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                                    </svg>
                                  </div>
                                <span className="filter-text">Child - 1</span>
                              </button>
                              <button className="filter-btn more">
                                <div className="filter-icon">
                                  <svg className="btn-icon feather feather-sliders" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>
                                  </svg>
                                </div>
                                <span className="filter-text">More</span>
                              </button>
                        </div>
                    </div>
                </section>
                <section className="app-main">
                  <div className="app-main-left cards-area">
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?sculpture,hotel" alt="Hotel"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">The Grand Budapest Hotel</div>
                            <div className="card-text small">Stockton Street</div>
                              <div className="card-text small">
                                Starts from: 
                                <span className="card-price"> $1000</span>
                              </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?architecture,hotel" alt="Hotel"/>
                        </div>
                          <div className="card-info">
                            <div className="card-text big cardText-js">The Grand Canyon Hotel</div>
                            <div className="card-text small">Stockton Street</div>
                            <div className="card-text small">
                              Starts from: 
                              <span className="card-price"> $1500</span>
                            </div>
                          </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?hotel-room,hotel" alt="Hotel"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">The Beakman Spa Hotel</div>
                            <div className="card-text small">Stockton Street</div>
                          <div className="card-text small">
                              Starts from: 
                            <span className="card-price"> $1300</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?hotel,design" alt="Hotel"/>
                        </div>
                        <div className="card-info">
                            <div className="card-text big cardText-js">Paloma Hotel & Spa</div>
                            <div className="card-text small">Stockton Street</div>
                          <div className="card-text small">
                            Starts from: 
                            <span className="card-price"> $700</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?interior,design" alt="Hotel"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">The Golden Hours Hotel</div>
                            <div className="card-text small">Stockton Street</div>
                              <div className="card-text small">
                                Starts from: 
                                <span className="card-price"> $700</span>
                              </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?interior,architecture" alt="Hotel"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">The Daydream Hotel & Spa</div>
                          <div className="card-text small">Stockton Street</div>
                          <div className="card-text small">
                            Starts from: 
                            <span className="card-price"> $1250</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?interior,modern" alt="Hotel"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">The Harmony Hotel</div>
                            <div className="card-text small">Stockton Street</div>
                              <div className="card-text small">
                                Starts from: 
                                <span className="card-price"> $500</span>
                              </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                        <img src="https://source.unsplash.com/featured/1200x900/?architecture,modern" alt="Hotel"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">The Hotel Star Pasific</div>
                          <div className="card-text small">Stockton Street</div>
                          <div className="card-text small">
                            Starts from: 
                            <span className="card-price"> $1400</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?hotel,modern" alt="Hotel"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">Hotel Roller Coaster </div>
                          <div className="card-text small">Stockton Street</div>
                          <div className="card-text small">
                            Starts from: 
                            <span className="card-price"> $1800</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="app-main-right cards-area">
                    <div className="app-main-right-header">
                      <span>Latest Deals</span>
                        <a href="#">See More</a>
                      </div>
                    <div className="card-wrapper main-card">
                        <a className="card cardItemjs"  onclick="openModal()">
                          <div className="card-image-wrapper">
                            <img src="https://source.unsplash.com/featured/1200x900/?hotel-room,interior"/>
                          </div>
                          <div className="card-info">
                            <div className="card-text big cardText-js">Hotel Conrad</div>
                            <div className="card-text small">Stockton Street</div>
                            <div className="card-text small">
                              Starts from: 
                              <span  className="card-price"> $1000</span>
                            </div>
                          </div>
                        </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?interior,hotel"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">The Hotel Riviera</div>
                          <div className="card-text small">Stockton Street</div>
                          <div className="card-text small">
                            Starts from: 
                            <span  className="card-price"> $300</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?architecture,modern"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">The Hotel Star Pasific</div>
                          <div className="card-text small">Stockton Street</div>
                          <div className="card-text small">
                            Starts from: 
                            <span className="card-price"> $1400</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?hotel,modern"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">Hotel Instant Destiny </div>
                          <div className="card-text small">Stockton Street</div>
                          <div className="card-text small">
                            Starts from: 
                            <span className="card-price"> $1800</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                        <img src="https://source.unsplash.com/featured/1200x900/?architecture,modern" alt="Hotel"/>
                        </div>
                          <div className="card-info">
                            <div className="card-text big cardText-js">The White Roses Hotel</div>
                            <div className="card-text small">Stockton Street</div>
                            <div className="card-text small">
                              Starts from: 
                              <span className="card-price"> $700</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="card-wrapper main-card">
                      <a className="card cardItemjs"  onclick="openModal()">
                        <div className="card-image-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?hotel,modern" alt="Hotel"/>
                        </div>
                        <div className="card-info">
                          <div className="card-text big cardText-js">Hotel Tom's Dinner</div>
                          <div className="card-text small">Stockton Street</div>
                          <div className="card-text small">
                            Starts from: 
                            <span className="card-price"> $1500</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
            </div>
            <div id="modal-window" className="shadow">
              <div className="main-modal">
                <div className="modal-left">
                  <div className="modal-image-wrapper">
                    <img src="https://source.unsplash.com/featured/1200x900/?design,hotel"/>
                  </div>
                  <div className="modal-info-header">
                    <div className="left-side">
                      <h1 className="modalHeader-js"></h1>
                      <p>Stockton Street</p>
                    </div>
                    <div className="right-side">
                      Starts from:
                      <span className="amount">$1000</span>
                    </div>
                  </div>
                  <div className="info-bar">
                    <div className="info-wrapper">
                      <div className="info-icon">
                        <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                      </div>
                      <span>2 Bedrooms</span>
                    </div>
                    <div className="info-wrapper">
                      <div className="info-icon">
                        <svg className="btn-icon feather feather-wind" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>
                        </div>
                        <span>2 Bathrooms</span>
                    </div>
                    <div className="info-wrapper">
                      <div className="info-icon">
                        <svg className="btn-icon feather feather-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
                      </div>
                      <span>1250m2</span>
                    </div>
                    <div className="info-wrapper">
                      <div className="info-icon">
                        <svg className="btn-icon feather feather-shield" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                        <span>Highly Secured</span>
                    </div>
                  </div>
                  <div className="desc-wrapper">
                    <div className="modal-info-header">
                      <h1>Description</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="desc-actions">
                      <button className="btn-book">Book Now</button>
                        <div className="add-favourite">
                          <input type="checkbox" id="favourite"/>
                          <label for="favourite">
                            <span className="favourite-icon">
                              <svg className="btn-icon feather feather-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>  
                            </span>
                            <span>Add to favourites</span>
                          </label>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="modal-right">
                  <div className="app-main-right-header">
                    <span>Reviews</span>
                      <a href="#">See All</a>
                  </div>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="profile-info-wrapper">
                        <div className="profile-img-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?woman,cool" alt="Review"/>
                        </div>
                        <p>Jessica Finnick</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="profile-info-wrapper">
                        <div className="profile-img-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?woman,latina" alt="Review"/>
                        </div>
                        <p>Gloria Ramirez</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="profile-info-wrapper">
                        <div className="profile-img-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?man,art" alt="Review"/>
                        </div>
                        <p>Luck Besson</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="profile-info-wrapper">
                        <div className="profile-img-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?woman,adventure" alt="Review"/>
                        </div>
                        <p>Luna Rosa</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="profile-info-wrapper">
                        <div className="profile-img-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?man,modern" alt="Review"/>
                        </div>
                        <p>John mayer</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="profile-info-wrapper">
                        <div className="profile-img-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?woman" alt="Review"/>
                        </div>
                        <p>Tina Finnick</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                  </div>
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="profile-info-wrapper">
                        <div className="profile-img-wrapper">
                          <img src="https://source.unsplash.com/featured/1200x900/?woman,modern" alt="Review"/>
                        </div>
                        <p>July Wallock</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                  </div>
                </div>
                <button className="btn btn-close" onclick="closeM()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>    
            </div>
            </>
          )
  }
