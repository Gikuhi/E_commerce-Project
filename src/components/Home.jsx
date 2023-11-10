import {Dimensions, Image} from 'react-native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;

export default function Home(){
return <>

    <Image
     style={{height: imageHeight, width: imageWidth}}
     resizeMode="contain"
     source={{
       uri: 'public/assets/media/logo(600px).png',
     }}
   />

    <div className="topbar-section section bg-success">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-auto col-12">
                    <p className="text-white text-center text-md-left my-2">Free shipping for orders over $59 !</p>
                </div>
                <div className="col-auto d-none d-md-block">
                    <div className="topbar-menu">
                        <ul>
                            <li><a href="#" className="text-white"><i className="fa fa-map-marker-alt"></i>Store Location</a></li>
                            <li><a href="#" className="text-white"><i className="fa fa-truck"></i>Order Status</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="header-section section bg-white d-none d-xl-block">
        <div className="container">
            <div className="row row-cols-lg-3 align-items-center">

                <div className="col">
                    <ul className="header-lan-curr">
                        <li><a href="#">English</a>
                            <ul className="curr-lan-sub-menu">
                                <li><a href="#">Français</a></li>
                                <li><a href="#">Deutsch</a></li>
                            </ul>
                        </li>
                        <li><a href="#">USD</a>
                            <ul className="curr-lan-sub-menu">
                                <li><a href="#">EUR</a></li>
                                <li><a href="#">GBP</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <div className="header-logo justify-content-center">
                        <a href="index.html"><img src="public/assets/media/logo(600px).png" alt="Logo"/></a>
                    </div>
                </div>

                <div className="col">
                    <div className="header-tools justify-content-end">
                        <div className="header-login">
                            <a href="my-account.html"><i className="far fa-user"></i></a>
                        </div>
                        <div className="header-search">
                            <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search"></i></a>
                        </div>
                        <div className="header-wishlist">
                            <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="site-menu-section section">
            <div className="container">
                <nav className="site-main-menu justify-content-center">
                    <ul>
                        <li className="has-children"><a href="#"><span className="menu-text">Home</span></a>
                            <ul className="sub-menu mega-menu">
                                <li>
                                    <a href="#" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                    <ul>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-01.webp" alt="home-01"/> <a href="index.html"><span className="menu-text">Arts Propelled</span></a></li>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-02.webp" alt="home-02"/> <a href="index-2.html"><span className="menu-text">Decor Thriving</span></a></li>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-03.webp" alt="home-03"/> <a href="index-3.html"><span className="menu-text">Savvy Delight</span></a></li>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-04.webp" alt="home-04"/> <a href="index-4.html"><span className="menu-text">Perfect Escapes</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                    <ul>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-05.webp" alt="home-05"/> <a href="index-5.html"><span className="menu-text">Kitchen Cozy</span></a></li>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-06.webp" alt="home-06"/> <a href="index-6.html"><span className="menu-text">Dreamy Designs</span></a></li>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-07.webp" alt="home-07"/> <a href="index-7.html"><span className="menu-text">Crispy Recipes</span></a></li>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-08.webp" alt="home-08"/> <a href="index-8.html"><span className="menu-text">Decoholic Chic</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                    <ul>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-9.webp" alt="home-9"/> <a href="index-9.html"><span className="menu-text">Reblended Dish</span></a></li>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-10.webp" alt="home-10"/> <a href="index-10.html"><span className="menu-text">Craftin House</span></a></li>
                                        <li> <img className="mmh_img " src="assets/images/demo/menu/home-11.webp" alt="home-11"/> <a href="index-11.html"><span className="menu-text">Craftswork Biz</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="menu-banner"><img src="assets/images/banner/menu-banner-1.webp" alt="Home Menu Banner"/></a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-children"><a href="#"><span className="menu-text">Shop</span></a>
                            <ul className="sub-menu mega-menu">
                                <li>
                                    <a href="#" className="mega-menu-title"><span className="menu-text">SHOP PAGES</span></a>
                                    <ul>
                                        <li><a href="shop.html"><span className="menu-text">Shop No Sidebar</span></a></li>
                                        <li><a href="shop-left-sidebar.html"><span className="menu-text">Shop Left Sidebar</span></a></li>
                                        <li><a href="shop-right-sidebar.html"><span className="menu-text">Shop Right Sidebar</span></a></li>
                                        <li><a href="shop-fullwidth-no-gutters.html"><span className="menu-text">Shop Fullwidth No Space</span></a></li>
                                        <li><a href="shop-fullwidth.html"><span className="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                                        <li><a href="shop-fullwidth-left-sidebar.html"><span className="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                                        <li><a href="shop-fullwidth-right-sidebar.html"><span className="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="mega-menu-title"><span className="menu-text">PRODUCT PAGES</span></a>
                                    <ul>
                                        <li><a href="product-details.html"><span className="menu-text">Basic</span></a></li>
                                        <li><a href="product-details-fullwidth.html"><span className="menu-text">Fullwidth</span></a></li>
                                        <li><a href="product-details-sticky.html"><span className="menu-text">Sticky Details</span></a></li>
                                        <li><a href="product-details-sidebar.html"><span className="menu-text">Width Sidebar</span></a></li>
                                        <li><a href="product-details-extra-content.html"><span className="menu-text">Extra Content</span></a></li>
                                        <li><a href="product-details-image-variation.html"><span className="menu-text">Variations Images</span></a></li>
                                        <li><a href="product-details-group.html"><span className="menu-text">Bought Together</span></a></li>
                                        <li><a href="product-details-360.html"><span className="menu-text">Product 360</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="mega-menu-title"><span className="menu-text">PRODUCT & Other PAGES</span></a>
                                    <ul>
                                        <li><a href="product-details-background.html"><span className="menu-text">Product with Background</span></a></li>
                                        <li><a href="shopping-cart.html"><span className="menu-text">Shopping Cart</span></a></li>
                                        <li><a href="checkout.html"><span className="menu-text">Checkout</span></a></li>
                                        <li><a href="order-tracking.html"><span className="menu-text">Order Tracking</span></a></li>
                                        <li><a href="wishlist.html"><span className="menu-text">Wishlist</span></a></li>
                                        <li><a href="login-register.html"><span className="menu-text">Customer Login</span></a></li>
                                        <li><a href="my-account.html"><span className="menu-text">My Account</span></a></li>
                                        <li><a href="lost-password.html"><span className="menu-text">Lost Password</span></a></li>
                                    </ul>
                                </li>
                                <li className="align-self-center">
                                    <a href="#" className="menu-banner"><img src="assets/images/banner/menu-banner-2.webp" alt="Shop Menu Banner"/></a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-children"><a href="#"><span className="menu-text">Elements</span></a>
                            <ul className="sub-menu mega-menu">
                                <li>
                                    <a href="#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
                                    <ul>
                                        <li><a href="elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                                        <li><a href="elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                                        <li><a href="elements-product-sale-banner.html"><span className="menu-text">Product & Sale Banner</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
                                    <ul>
                                        <li><a href="elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                                        <li><a href="elements-team.html"><span className="menu-text">Team Member</span></a></li>
                                        <li><a href="elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
                                    <ul>
                                        <li><a href="elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                                        <li><a href="elements-map.html"><span className="menu-text">Google Map</span></a></li>
                                        <li><a href="elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
                                    <ul>
                                        <li><a href="elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                                        <li><a href="elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                                        <li><a href="elements-brands.html"><span className="menu-text">Brands</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="has-children"><a href="#"><span className="menu-text">Pages</span></a>
                            <ul className="sub-menu">
                                <li><a href="about-us.html"><span className="menu-text">About us</span></a></li>
                                <li><a href="about-us-2.html"><span className="menu-text">About us 02</span></a></li>
                                <li><a href="contact-us.html"><span className="menu-text">Contact us</span></a></li>
                                <li><a href="coming-soon.html"><span className="menu-text">Coming Soon</span></a></li>
                                <li><a href="404.html"><span className="menu-text">Page 404</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    </div>

    <div className="sticky-header header-menu-center section bg-white d-none d-xl-block">
        <div className="container">
            <div className="row align-items-center">

                <div className="col">
                    <div className="header-logo">
                        <a href="index.html"><img src="assets/images/logo/logo-2.webp" alt="Learts Logo"/></a>
                    </div>
                </div>

                <div className="col d-none d-xl-block">
                    <nav className="site-main-menu justify-content-center">
                        <ul>
                            <li className="has-children"><a href="#"><span className="menu-text">Home</span></a>
                                <ul className="sub-menu mega-menu">
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-01.webp" alt="home-01"/> <a href="index.html"><span className="menu-text">Arts Propelled</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-02.webp" alt="home-02"/> <a href="index-2.html"><span className="menu-text">Decor Thriving</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-03.webp" alt="home-03"/> <a href="index-3.html"><span className="menu-text">Savvy Delight</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-04.webp" alt="home-04"/> <a href="index-4.html"><span className="menu-text">Perfect Escapes</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-05.webp" alt="home-05"/> <a href="index-5.html"><span className="menu-text">Kitchen Cozy</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-06.webp" alt="home-06"/> <a href="index-6.html"><span className="menu-text">Dreamy Designs</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-07.webp" alt="home-07"/> <a href="index-7.html"><span className="menu-text">Crispy Recipes</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-08.webp" alt="home-08"/> <a href="index-8.html"><span className="menu-text">Decoholic Chic</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-9.webp" alt="home-9"/> <a href="index-9.html"><span className="menu-text">Reblended Dish</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-10.webp" alt="home-10"/> <a href="index-10.html"><span className="menu-text">Craftin House</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-11.webp" alt="home-11"/> <a href="index-11.html"><span className="menu-text">Craftswork Biz</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="menu-banner"><img src="assets/images/banner/menu-banner-1.webp" alt="Home Menu Banner"/></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-children"><a href="#"><span className="menu-text">Shop</span></a>
                                <ul className="sub-menu mega-menu">
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">SHOP PAGES</span></a>
                                        <ul>
                                            <li><a href="shop.html"><span className="menu-text">Shop No Sidebar</span></a></li>
                                            <li><a href="shop-left-sidebar.html"><span className="menu-text">Shop Left Sidebar</span></a></li>
                                            <li><a href="shop-right-sidebar.html"><span className="menu-text">Shop Right Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-no-gutters.html"><span className="menu-text">Shop Fullwidth No Space</span></a></li>
                                            <li><a href="shop-fullwidth.html"><span className="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-left-sidebar.html"><span className="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-right-sidebar.html"><span className="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">PRODUCT PAGES</span></a>
                                        <ul>
                                            <li><a href="product-details.html"><span className="menu-text">Basic</span></a></li>
                                            <li><a href="product-details-fullwidth.html"><span className="menu-text">Fullwidth</span></a></li>
                                            <li><a href="product-details-sticky.html"><span className="menu-text">Sticky Details</span></a></li>
                                            <li><a href="product-details-sidebar.html"><span className="menu-text">Width Sidebar</span></a></li>
                                            <li><a href="product-details-extra-content.html"><span className="menu-text">Extra Content</span></a></li>
                                            <li><a href="product-details-image-variation.html"><span className="menu-text">Variations Images</span></a></li>
                                            <li><a href="product-details-group.html"><span className="menu-text">Bought Together</span></a></li>
                                            <li><a href="product-details-360.html"><span className="menu-text">Product 360</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">PRODUCT & Other PAGES</span></a>
                                        <ul>
                                            <li><a href="product-details-background.html"><span className="menu-text">Product with Background</span></a></li>
                                            <li><a href="shopping-cart.html"><span className="menu-text">Shopping Cart</span></a></li>
                                            <li><a href="checkout.html"><span className="menu-text">Checkout</span></a></li>
                                            <li><a href="order-tracking.html"><span className="menu-text">Order Tracking</span></a></li>
                                            <li><a href="wishlist.html"><span className="menu-text">Wishlist</span></a></li>
                                            <li><a href="login-register.html"><span className="menu-text">Customer Login</span></a></li>
                                            <li><a href="my-account.html"><span className="menu-text">My Account</span></a></li>
                                            <li><a href="lost-password.html"><span className="menu-text">Lost Password</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="align-self-center">
                                        <a href="#" className="menu-banner"><img src="assets/images/banner/menu-banner-2.webp" alt="Shop Menu Banner"/></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-children"><a href="#"><span className="menu-text">Elements</span></a>
                                <ul className="sub-menu mega-menu">
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
                                        <ul>
                                            <li><a href="elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                                            <li><a href="elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                                            <li><a href="elements-product-sale-banner.html"><span className="menu-text">Product & Sale Banner</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
                                        <ul>
                                            <li><a href="elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                                            <li><a href="elements-team.html"><span className="menu-text">Team Member</span></a></li>
                                            <li><a href="elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
                                        <ul>
                                            <li><a href="elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                                            <li><a href="elements-map.html"><span className="menu-text">Google Map</span></a></li>
                                            <li><a href="elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
                                        <ul>
                                            <li><a href="elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                                            <li><a href="elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                                            <li><a href="elements-brands.html"><span className="menu-text">Brands</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-children"><a href="#"><span className="menu-text">Pages</span></a>
                                <ul className="sub-menu">
                                    <li><a href="about-us.html"><span className="menu-text">About us</span></a></li>
                                    <li><a href="about-us-2.html"><span className="menu-text">About us 02</span></a></li>
                                    <li><a href="contact-us.html"><span className="menu-text">Contact us</span></a></li>
                                    <li><a href="coming-soon.html"><span className="menu-text">Coming Soon</span></a></li>
                                    <li><a href="404.html"><span className="menu-text">Page 404</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="col-auto">
                    <div className="header-tools justify-content-end">
                        <div className="header-login">
                            <a href="my-account.html"><i className="far fa-user"></i></a>
                        </div>
                        <div className="header-search d-none d-sm-block">
                            <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search"></i></a>
                        </div>
                        <div className="header-wishlist">
                            <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
                        </div>
                        <div className="mobile-menu-toggle d-xl-none">
                            <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                                <svg viewBox="0 0 800 600">
                                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                                    <path d="M300,320 L540,320" className="middle"></path>
                                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>


    <div className="mobile-header bg-white section d-xl-none">
        <div className="container">
            <div className="row align-items-center">


                <div className="col">
                    <div className="header-logo">
                        <a href="index.html"><img src="assets/images/logo/logo-2.webp" alt="Learts Logo"/></a>
                    </div>
                </div>


                <div className="col-auto">
                    <div className="header-tools justify-content-end">
                        <div className="header-login d-none d-sm-block">
                            <a href="my-account.html"><i className="far fa-user"></i></a>
                        </div>
                        <div className="header-search d-none d-sm-block">
                            <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search"></i></a>
                        </div>
                        <div className="header-wishlist d-none d-sm-block">
                            <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
                        </div>
                        <div className="mobile-menu-toggle">
                            <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                                <svg viewBox="0 0 800 600">
                                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                                    <path d="M300,320 L540,320" className="middle"></path>
                                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


<div className="mobile-header sticky-header bg-white section d-xl-none">
        <div className="container">
            <div className="row align-items-center">

                <div className="col">
                    <div className="header-logo">
                        <a href="index.html"><img src="assets/images/logo/logo-2.webp" alt="Learts Logo"/></a>
                    </div>
                </div>

                <div className="col-auto">
                    <div className="header-tools justify-content-end">
                        <div className="header-login d-none d-sm-block">
                            <a href="my-account.html"><i className="far fa-user"></i></a>
                        </div>
                        <div className="header-search d-none d-sm-block">
                            <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search"></i></a>
                        </div>
                        <div className="header-wishlist d-none d-sm-block">
                            <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
                        </div>
                        <div className="mobile-menu-toggle">
                            <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                                <svg viewBox="0 0 800 600">
                                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                                    <path d="M300,320 L540,320" className="middle"></path>
                                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div id="offcanvas-search" className="offcanvas offcanvas-search">
        <div className="inner">
            <div className="offcanvas-search-form">
                <button className="offcanvas-close">×</button>
                <form action="#">
                    <div className="row mb-n3">
                        <div className="col-lg-8 col-12 mb-3"><input type="text" placeholder="Search Products..."/></div>
                        <div className="col-lg-4 col-12 mb-3">
                            <select className="search-select select2-basic">
                                <option value="0">All Categories</option>
                                <option value="kids-babies">Kids &amp; Babies</option>
                                <option value="home-decor">Home Decor</option>
                                <option value="gift-ideas">Gift ideas</option>
                                <option value="kitchen">Kitchen</option>
                                <option value="toys">Toys</option>
                                <option value="kniting-sewing">Kniting &amp; Sewing</option>
                                <option value="pots">Pots</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <p className="search-description text-body-light mt-2"> <span># Type at least 1 character to search</span> <span># Hit enter to search or ESC to close</span></p>

        </div>
    </div>

    <div id="offcanvas-wishlist" className="offcanvas offcanvas-wishlist">
        <div className="inner">
            <div className="head">
                <span className="title">Wishlist</span>
                <button className="offcanvas-close">×</button>
            </div>
            <div className="body customScroll">
                <ul className="minicart-product-list">
                    <li>
                        <a href="product-details.html" className="image"><img src="assets/images/product/cart-product-1.webp" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">Walnut Cutting Board</a>
                            <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-details.html" className="image"><img src="assets/images/product/cart-product-2.webp" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">Lucky Wooden Elephant</a>
                            <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-details.html" className="image"><img src="assets/images/product/cart-product-3.webp" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">Fish Cut Out Set</a>
                            <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="foot">
                <div className="buttons">
                    <a href="wishlist.html" className="btn btn-dark btn-hover-primary">view wishlist</a>
                </div>
            </div>
        </div>
    </div>

<div id="offcanvas-cart" className="offcanvas offcanvas-cart">
        <div className="inner">
            <div className="head">
                <span className="title">Cart</span>
                <button className="offcanvas-close">×</button>
            </div>
            <div className="body customScroll">
                <ul className="minicart-product-list">
                    <li>
                        <a href="product-details.html" className="image"><img src="assets/images/product/cart-product-1.webp" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">Walnut Cutting Board</a>
                            <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-details.html" className="image"><img src="assets/images/product/cart-product-2.webp" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">Lucky Wooden Elephant</a>
                            <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-details.html" className="image"><img src="assets/images/product/cart-product-3.webp" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">Fish Cut Out Set</a>
                            <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="foot">
                <div className="sub-total">
                    <strong>Subtotal :</strong>
                    <span className="amount">$144.00</span>
                </div>
                <div className="buttons">
                    <a href="shopping-cart.html" className="btn btn-dark btn-hover-primary">view cart</a>
                    <a href="checkout.html" className="btn btn-outline-dark">checkout</a>
                </div>
                <p className="minicart-message">Free Shipping on All Orders Over $100!</p>
            </div>
        </div>
    </div>

    <div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
        <div className="inner customScroll">
            <div className="offcanvas-menu-search-form">
                <form action="#">
                    <input type="text" placeholder="Search..."/>
                    <button><i className="fas fa-search"></i></button>
                    </form>
            </div>
            <div className="offcanvas-menu">
                <ul>
                    <li><a href="#"><span className="menu-text">Home</span></a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#"><span className="menu-text">Home Group</span></a>
                                <ul className="sub-menu">
                                    <li><a href="index.html"><span className="menu-text">Arts Propelled</span></a></li>
                                    <li><a href="index-2.html"><span className="menu-text">Decor Thriving</span></a></li>
                                    <li><a href="index-3.html"><span className="menu-text">Savvy Delight</span></a></li>
                                    <li><a href="index-4.html"><span className="menu-text">Perfect Escapes</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><span className="menu-text">Home Group</span></a>
                                <ul className="sub-menu">
                                    <li><a href="index-5.html"><span className="menu-text">Kitchen Cozy</span></a></li>
                                    <li><a href="index-6.html"><span className="menu-text">Dreamy Designs</span></a></li>
                                    <li><a href="index-7.html"><span className="menu-text">Crispy Recipes</span></a></li>
                                    <li><a href="index-8.html"><span className="menu-text">Decoholic Chic</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><span className="menu-text">Home Group</span></a>
                                <ul className="sub-menu">
                                    <li><a href="index-9.html"><span className="menu-text">Reblended Dish</span></a></li>
                                    <li><a href="index-10.html"><span className="menu-text">Craftin House</span></a></li>
                                    <li><a href="index-11.html"><span className="menu-text">Craftswork Biz</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#"><span className="menu-text">Shop</span></a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#"><span className="menu-text">Shop Pages</span></a>
                                <ul className="sub-menu">
                                    <li><a href="shop.html"><span className="menu-text">Shop No Sidebar</span></a></li>
                                    <li><a href="shop-left-sidebar.html"><span className="menu-text">Shop Left Sidebar</span></a></li>
                                    <li><a href="shop-right-sidebar.html"><span className="menu-text">Shop Right Sidebar</span></a></li>
                                    <li><a href="shop-fullwidth-no-gutters.html"><span className="menu-text">Shop Fullwidth No Space</span></a></li>
                                    <li><a href="shop-fullwidth.html"><span className="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                                    <li><a href="shop-fullwidth-left-sidebar.html"><span className="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                                    <li><a href="shop-fullwidth-right-sidebar.html"><span className="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><span className="menu-text">Product Pages</span></a>
                                <ul className="sub-menu">
                                    <li><a href="product-details.html"><span className="menu-text">Basic</span></a></li>
                                    <li><a href="product-details-fullwidth.html"><span className="menu-text">Fullwidth</span></a></li>
                                    <li><a href="product-details-sticky.html"><span className="menu-text">Sticky Details</span></a></li>
                                    <li><a href="product-details-sidebar.html"><span className="menu-text">Width Sidebar</span></a></li>
                                    <li><a href="product-details-extra-content.html"><span className="menu-text">Extra Content</span></a></li>
                                    <li><a href="product-details-image-variation.html"><span className="menu-text">Variations Images</span></a></li>
                                    <li><a href="product-details-group.html"><span className="menu-text">Bought Together</span></a></li>
                                    <li><a href="product-details-360.html"><span className="menu-text">Product 360</span></a></li>
                                    <li><a href="product-details-background.html"><span className="menu-text">Product with Background</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="mega-menu-title"><span className="menu-text">PRODUCT & Other PAGES</span></a>
                                <ul className="sub-menu">
                                    <li><a href="shopping-cart.html"><span className="menu-text">Shopping Cart</span></a></li>
                                    <li><a href="checkout.html"><span className="menu-text">Checkout</span></a></li>
                                    <li><a href="order-tracking.html"><span className="menu-text">Order Tracking</span></a></li>
                                    <li><a href="wishlist.html"><span className="menu-text">Wishlist</span></a></li>
                                    <li><a href="login-register.html"><span className="menu-text">Customer Login</span></a></li>
                                    <li><a href="my-account.html"><span className="menu-text">My Account</span></a></li>
                                    <li><a href="lost-password.html"><span className="menu-text">Lost Password</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#"><span className="menu-text">Project</span></a>
                        <ul className="sub-menu">
                            <li><a href="portfolio-3-columns.html"><span className="menu-text">Portfolio 3 Columns</span></a></li>
                            <li><a href="portfolio-4-columns.html"><span className="menu-text">Portfolio 4 Columns</span></a></li>
                            <li><a href="portfolio-5-columns.html"><span className="menu-text">Portfolio 5 Columns</span></a></li>
                            <li><a href="portfolio-details.html"><span className="menu-text">Portfolio Details</span></a></li>
                        </ul>
                    </li>
                    <li><a href="#"><span className="menu-text">Elements</span></a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
                                <ul className="sub-menu">
                                    <li><a href="elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                                    <li><a href="elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                                    <li><a href="elements-product-sale-banner.html"><span className="menu-text">Product & Sale Banner</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
                                <ul className="sub-menu">
                                    <li><a href="elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                                    <li><a href="elements-team.html"><span className="menu-text">Team Member</span></a></li>
                                    <li><a href="elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
                                <ul className="sub-menu">
                                    <li><a href="elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                                    <li><a href="elements-map.html"><span className="menu-text">Google Map</span></a></li>
                                    <li><a href="elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
                                <ul className="sub-menu">
                                    <li><a href="elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                                    <li><a href="elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                                    <li><a href="elements-brands.html"><span className="menu-text">Brands</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#"><span className="menu-text">Blog</span></a>
                        <ul className="sub-menu">
                            <li><a href="#"><span className="menu-text">Standard Layout</span></a>
                                <ul className="sub-menu">
                                    <li><a href="blog-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                                    <li><a href="blog-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                                    <li><a href="blog-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                                </ul>
                            </li>
                            <li><a href="#"><span className="menu-text">Grid Layout</span></a>
                                <ul className="sub-menu">
                                    <li><a href="blog-grid-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                                    <li><a href="blog-grid-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                                    <li><a href="blog-grid-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                                </ul>
                            </li>
                            <li><a href="#"><span className="menu-text">List Layout</span></a>
                                <ul className="sub-menu">
                                    <li><a href="blog-list-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                                    <li><a href="blog-list-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                                    <li><a href="blog-list-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                                </ul>
                            </li>
                            <li><a href="#"><span className="menu-text">Masonry Layout</span></a>
                                <ul className="sub-menu">
                                    <li><a href="blog-masonry-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                                    <li><a href="blog-masonry-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                                    <li><a href="blog-masonry-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                                </ul>
                            </li>
                            <li><a href="#"><span className="menu-text">Single Post Layout</span></a>
                                <ul className="sub-menu">
                                    <li><a href="blog-details-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                                    <li><a href="blog-details-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                                    <li><a href="blog-details-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#"><span className="menu-text">Pages</span></a>
                        <ul className="sub-menu">
                            <li><a href="about-us.html"><span className="menu-text">About us</span></a></li>
                            <li><a href="about-us-2.html"><span className="menu-text">About us 02</span></a></li>
                            <li><a href="contact-us.html"><span className="menu-text">Contact us</span></a></li>
                            <li><a href="coming-soon.html"><span className="menu-text">Coming Soon</span></a></li>
                            <li><a href="404.html"><span className="menu-text">Page 404</span></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="offcanvas-buttons">
                <div className="header-tools">
                    <div className="header-login">
                        <a href="my-account.html"><i className="far fa-user"></i></a>
                    </div>
                    <div className="header-wishlist">
                        <a href="wishlist.html"><span>3</span><i className="far fa-heart"></i></a>
                    </div>
                    <div className="header-cart">
                        <a href="shopping-cart.html"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>
            <div className="offcanvas-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
        </div>
    </div>


    <div className="offcanvas-overlay"></div>


    <div className="section section-padding">
        <div className="container">


            <div className="section-title text-center">
                <h3>Just for you</h3>
                <h2 className="title title-icon-both">Making & crafting</h2>
            </div>


            <div className="row learts-mb-n40">

                <div className="col-lg-5 col-md-6 col-12 me-auto learts-mb-40">
                    <div className="sale-banner1" data-bg-image="assets/images/banner/sale/sale-banner1-1.webp">
                        <div className="inner">
                            <img src="assets/images/banner/sale/sale-banner1-1.1.webp" alt="Sale Banner Icon"/>
                            <span className="title">Spring sale</span>
                            <h2 className="sale-percent">
                                <span className="number">40</span> % off
                            </h2>
                            <a href="shop.html" className="link">shop now</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 learts-mb-40">
                    <div className="sale-banner2">
                        <div className="inner">
                            <div className="image"><img src="public/assets/media/Vincent Van Gogh Sorrowing Old Man - At Eternity's Gate 1890, High quality Hand painted oil painting reproduction.jpeg" alt=""/></div>
                            <div className="content row justify-content-between mb-n3">
                                <div className="col-auto mb-3">
                                    <h2 className="sale-percent">10% off</h2>
                                    <span className="text">YOUR NEXT PURCHASE</span>
                                </div>
                                <div className="col-auto mb-3">
                                    <a className="btn btn-hover-dark" href="shop.html">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div className="section section-fluid section-padding pt-0">
        <div className="container">

            <div className="section-title text-center">
                <h3 className="subtitle">Shop now</h3>
                <h2 className="title title-icon-both">Shop our bestsellers</h2>
            </div>

            <div className="products row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <a href="product-details.html" className="image">
                                <span className="product-badges">
                                    <span className="onsale">-13%</span>
                                </span>
                                <img src="assets/images/product/s328/product-1.webp" alt="Product Image"/>
                                <img className="image-hover " src="assets/images/product/s328/product-1-hover.webp" alt="Product Image"/>
                            </a>
                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><a href="product-details.html">Boho Beard Mug</a></h6>
                            <span className="price">
                                <span className="old">$45.00</span>
                            <span className="new">$39.00</span>
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <a href="product-details.html" className="image">
                                <img src="assets/images/product/s328/product-2.webp" alt="Product Image"/>
                                <img className="image-hover " src="assets/images/product/s328/product-2-hover.webp" alt="Product Image"/>
                            </a>
                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><a href="product-details.html">Motorized Tricycle</a></h6>
                            <span className="price">
                                $35.00
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <span className="product-badges">
                                <span className="hot">hot</span>
                            </span>
                            <a href="product-details.html" className="image">
                                <img src="assets/images/product/s328/product-3.webp" alt="Product Image"/>
                                <img className="image-hover " src="assets/images/product/s328/product-3-hover.webp" alt="Product Image"/>
                            </a>
                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><a href="product-details.html">Walnut Cutting Board</a></h6>
                            <span className="price">
                                $100.00
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <a href="product-details.html" className="image">
                                <span className="product-badges">
                                    <span className="onsale">-27%</span>
                                </span>
                                <img src="assets/images/product/s328/product-4.webp" alt="Product Image"/>
                                <img className="image-hover " src="assets/images/product/s328/product-4-hover.webp" alt="Product Image"/>
                            </a>
                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><a href="product-details.html">Pizza Plate Tray</a></h6>
                            <span className="price">
                                <span className="old">$30.00</span>
                            <span className="new">$22.00</span>
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <a href="product-details.html" className="image">
                                <img src="assets/images/product/s328/product-5.webp" alt="Product Image"/>
                                <img className="image-hover " src="assets/images/product/s328/product-5-hover.webp" alt="Product Image"/>
                            </a>
                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            <div className="product-options">
                                <ul className="colors">
                                    <li>color one</li>
                                    <li>color two</li>
                                    <li>color three</li>
                                </ul>
                                <ul className="sizes">
                                    <li>Large</li>
                                    <li>Medium</li>
                                    <li>Small</li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><a href="product-details.html">Minimalist Ceramic Pot</a></h6>
                            <span className="price">
                                $120.00
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <a href="product-details.html" className="image">
                                <img src="assets/images/product/s328/product-6.webp" alt="Product Image"/>
                                <img className="image-hover " src="assets/images/product/s328/product-6-hover.webp" alt="Product Image"/>
                            </a>
                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><a href="product-details.html">Clear Silicate Teapot</a></h6>
                            <span className="price">
                                $140.00
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <a href="product-details.html" className="image">
                                <span className="product-badges">
                                    <span className="hot">hot</span>
                                </span>
                                <img src="assets/images/product/s328/product-7.webp" alt="Product Image"/>
                                <img className="image-hover " src="assets/images/product/s328/product-7-hover.webp" alt="Product Image"/>
                            </a>
                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><a href="product-details.html">Lucky Wooden Elephant</a></h6>
                            <span className="price">
                                $35.00
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <a href="product-details.html" className="image">
                                <span className="product-badges">
                                    <span className="outofstock"><i className="far fa-frown"></i></span>
                                <span className="hot">hot</span>
                                </span>
                                <img src="assets/images/product/s328/product-8.webp" alt="Product Image"/>
                                <img className="image-hover " src="assets/images/product/s328/product-8-hover.webp" alt="Product Image"/>
                            </a>
                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            <div className="product-options">
                                <ul className="colors">
                                    <li>color one</li>
                                    <li>color two</li>
                                </ul>
                                <ul className="sizes">
                                    <li>Large</li>
                                    <li>Medium</li>
                                    <li>Small</li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><a href="product-details.html">Decorative Christmas Fox</a></h6>
                            <span className="price">
                                $50.00
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <a href="product-details.html" className="image">
                                <img src="assets/images/product/s328/product-9.webp" alt="Product Image"/>
                                <img className="image-hover " src="assets/images/product/s328/product-9-hover.webp" alt="Product Image"/>
                            </a>
                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><a href="product-details.html">Aluminum Equestrian</a></h6>
                            <span className="price">
                                $100.00
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <a href="product-details.html" className="image">
                                <img src="assets/images/product/s328/product-10.webp" alt="Product Image"/>
                                <img className="image-hover " src="assets/images/product/s328/product-10-hover.webp" alt="Product Image"/>
                            </a>
                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><a href="product-details.html">Fish Cut Out Set</a></h6>
                            <span className="price">
                                $9.00
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    </div>


    <div className="footer1-section section section-padding">
        <div className="container">
            <div className="row text-center row-cols-1">

                <div className="footer1-logo col text-center">
                    <img src="assets/images/logo/logo.webp" alt=""/>
                </div>

                <div className="footer1-menu col">
                    <ul className="widget-menu justify-content-center">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Store location</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div className="footer1-subscribe d-flex flex-column col">
                    <form id="mc-form" className="mc-form widget-subscibe">
                        <input id="mc-email" autoComplete="off" type="email" placeholder="Enter your e-mail address"/>
                        <button id="mc-submit" className="btn btn-dark">subscibe</button>
                    </form>

                    <div className="mailchimp-alerts text-centre">
                        <div className="mailchimp-submitting"></div>
                        <div className="mailchimp-success text-success"></div>
                        <div className="mailchimp-error text-danger"></div>
                    </div>

                </div>
                <div className="footer1-social col">
                    <ul className="widget-social justify-content-center">
                        <li className="hintT-top" data-hint="Twitter"> <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
                        <li className="hintT-top" data-hint="Facebook"> <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="hintT-top" data-hint="Instagram"> <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                        <li className="hintT-top" data-hint="Youtube"> <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div className="footer1-copyright col">
                    <p className="copyright">&copy; 2023 learts. All Rights Reserved | <strong>(+00) 123 567990</strong> | <a href="mailto:contact@learts.com">contact@learts.com</a></p>
                </div>

            </div>
        </div>
    </div>

    <div className="quickViewModal modal fade" id="quickViewModal">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <button className="close" data-bs-dismiss="modal">&times;</button>
                <div className="row learts-mb-n30">

                    <div className="col-lg-6 col-12 learts-mb-30">
                        <div className="product-images">
                            <div className="product-gallery-slider-quickview">
                                <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-1.webp">
                                    <img src="assets/images/product/single/1/product-1.webp" alt=""/>
                                </div>
                                <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-2.webp">
                                    <img src="assets/images/product/single/1/product-2.webp" alt=""/>
                                </div>
                                <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-3.webp">
                                    <img src="assets/images/product/single/1/product-3.webp" alt=""/>
                                </div>
                                <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp">
                                    <img src="assets/images/product/single/1/product-4.webp" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-6 col-12 overflow-hidden position-relative learts-mb-30">
                        <div className="product-summery customScroll">
                            <div className="product-ratings">
                                <span className="star-rating">
                                <span className="rating-active" >ratings</span>
                                </span>
                                <a href="#reviews" className="review-link"><span className="count">3</span> (customer reviews)</a>
                            </div>
                            <h3 className="product-title">Cleaning Dustpan & Brush</h3>
                            <div className="product-price">£38.00 – £50.00</div>
                            <div className="product-description">
                                <p>Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles.</p>
                            </div>
                            <div className="product-variations">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="label"><span>Size</span></td>
                                            <td className="value">
                                                <div className="product-sizes">
                                                    <a href="#">Large</a>
                                                    <a href="#">Medium</a>
                                                    <a href="#">Small</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Color</span></td>
                                            <td className="value">
                                                <div className="product-colors">
                                                    <a href="#" data-bg-color="#000000"></a>
                                                    <a href="#" data-bg-color="#ffffff"></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Quantity</span></td>
                                            <td className="value">
                                                <div className="product-quantity">
                                                    <span className="qty-btn minus"><i className="ti-minus"></i></span>
                                                    <input type="text" className="input-qty" value="1"/>
                                                    <span className="qty-btn plus"><i className="ti-plus"></i></span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="product-buttons">
                                <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="far fa-heart"></i></a>
                                <a href="#" className="btn btn-dark btn-outline-hover-dark"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                                <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="fas fa-random"></i></a>
                            </div>
                            <div className="product-brands">
                                <span className="title">Brands</span>
                                <div className="brands">
                                    <a href="#"><img src="assets/images/brands/brand-3.webp" alt=""/></a>
                                    <a href="#"><img src="assets/images/brands/brand-8.webp" alt=""/></a>
                                </div>
                            </div>
                            <div className="product-meta mb-0">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="label"><span>SKU</span></td>
                                            <td className="value">0404019</td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Category</span></td>
                                            <td className="value">
                                                <ul className="product-category">
                                                    <li><a href="#">Kitchen</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Tags</span></td>
                                            <td className="value">
                                                <ul className="product-tags">
                                                    <li><a href="#">handmade</a></li>
                                                    <li><a href="#">learts</a></li>
                                                    <li><a href="#">mug</a></li>
                                                    <li><a href="#">product</a></li>
                                                    <li><a href="#">learts</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Share on</span></td>
                                            <td className="va">
                                                <div className="product-share">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                    <a href="#"><i className="far fa-envelope"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>





    
</>
}