import React from "react";
import './css/Ecommerce.css';

export const Ecommerce = () => {
    return (
        <div className="ecommerce">
            <header>
                <div className="nav-bar">
                    <div className="nav-logo border">
                        <div className="logo"></div>
                    </div>

                    <div className="nav-address border">
                        <p className="address1">Deliver to</p>
                        <div className="add-icon">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="address2">India</p>
                        </div>
                    </div>

                    <div className="nav-search">
                        <select className="search-select">
                            <option>All</option>
                        </select>
                        <input placeholder="Search Amazon" className="search-input" />
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    <div className="sign-in border">
                        <p><span>Hello, sign in</span></p>
                        <p className="nav-second">Accounts & Lists</p>
                    </div>
                    <div className="nav-return border">
                        <p><span>Returns</span></p>
                        <p className="nav-second">& Orders</p>
                    </div>
                    <div className="nav-cart border">
                        <i className="fa-solid fa-cart-shopping"></i>
                        Cart
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-all border">
                        <i className="fa-solid fa-bars"></i>
                        All
                    </div>
                    <div className="panel-ops">
                        <p>Today's deals</p>
                        <p>Customer Service</p>
                        <p>Registry</p>
                        <p>Gift cards</p>
                        <p>Sell</p>
                    </div>
                    <div className="panel-deals">Shop deals in Electronics</div>
                </div>
            </header>

            <div className="hero-section">
                <div className="hero-message">
                    You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.<a href="#">Click here to go to amazon.in</a>
                </div>
            </div>

            <div className="shop-section">
                <div className="box box1">
                    <div className="box-content">
                        <h2>Clothing</h2>
                        <div className="box-image" style={{ backgroundImage: "url('box1_image.jpg')" }}></div>
                        <p>See more</p>
                    </div>
                </div>
                <div className="box box2">
                    <div className="box-content">
                        <h2>Health and personal care</h2>
                        <div className="box-image" style={{ backgroundImage: "url('box2_image.jpg')" }}></div>
                        <p>See more</p>
                    </div>
                </div>
                <div className="box box3">
                    <div className="box-content">
                        <h2>Furniture</h2>
                        <div className="box-image" style={{ backgroundImage: "url('box3_image.jpg')" }}></div>
                        <p>See more</p>
                    </div>
                </div>
                <div className="box box4">
                    <div className="box-content">
                        <h2>Smart phones</h2>
                        <div className="box-image" style={{ backgroundImage: "url('box4_image.jpg')" }}></div>
                        <p>See more</p>
                    </div>
                </div>
                <div className="box box5">
                    <div className="box-content">
                        <h2>Makeup products</h2>
                        <div className="box-image" style={{ backgroundImage: "url('box5_image.jpg')" }}></div>
                        <p>See more</p>
                    </div>
                </div>
                <div className="box box6">
                    <div className="box-content">
                        <h2>Pet care</h2>
                        <div className="box-image" style={{ backgroundImage: "url('box6_image.jpg')" }}></div>
                        <p>See more</p>
                    </div>
                </div>
                <div className="box box7">
                    <div className="box-content">
                        <h2>New arrivals in toys</h2>
                        <div className="box-image" style={{ backgroundImage: "url('box7_image.jpg')" }}></div>
                        <p>See more</p>
                    </div>
                </div>
                <div className="box box8">
                    <div className="box-content">
                        <h2>Night wears</h2>
                        <div className="box-image" style={{ backgroundImage: "url('box8_image.jpg')" }}></div>
                        <p>See more</p>
                    </div>
                </div>
            </div>

            <footer>
                <div className="foot-panel1">Back to Top</div>
                <div className="foot-panel2">
                    <ul>
                        <p>Get to Know Us</p>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">About Amazon</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Amazon Devices</a>
                        <a href="#">Amazon Science</a>
                    </ul>
                    <ul>
                        <p>Make Money with Us</p>
                        <a href="#">Sell products on Amazon</a>
                        <a href="#">Sell on Amazon Business</a>
                        <a href="#">Sell apps on Amazon</a>
                        <a href="#">Become an Affiliate</a>
                        <a href="#">Advertise Your Products</a>
                        <a href="#">Self-Publish with Us</a>
                        <a href="#">Host an Amazon Hub</a>
                    </ul>
                    <ul>
                        <p>Amazon Payment Products</p>
                        <a href="#">Amazon Business Card</a>
                        <a href="#">Shop with Points</a>
                        <a href="#">Reload Your Balance</a>
                        <a href="#">Amazon Currency Converter</a>
                    </ul>
                    <ul>
                        <p>Let Us Help You</p>
                        <a href="#">Amazon and COVID-19</a>
                        <a href="#">Your Account</a>
                        <a href="#">Your Orders</a>
                        <a href="#">Shipping Rates & Policies</a>
                        <a href="#">Returns & Replacements</a>
                        <a href="#">Manage Your Content and Devices</a>
                        <a href="#">Amazon Assistant</a>
                    </ul>
                </div>
                <div className="foot-panel3">
                    <div className="foot-icon"></div>
                    <button className="button1">
                        <i className="fa-solid fa-globe"></i>
                        English
                    </button>
                    <button className="button2">
                        <i className="fa-solid fa-dollar-sign"></i>
                        USD-U.S. Dollar
                    </button>
                    <button className="button3">
                        <i className="fa-solid fa-flag-usa"></i>
                        United States
                    </button>
                </div>
                <div className="foot-panel4">
                    <div className="pages">
                        <a href="#">Conditions of Use</a>
                        <a href="#">Privacy Notice</a>
                        <a href="#">Your Ads Privacy Choices</a>
                    </div>
                    <div className="copyright">
                        © 1996-2023, Amazon.com, Inc. or its affiliates
                    </div>
                </div>
            </footer>
        </div>
    );
}
