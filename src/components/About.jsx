
export default function About(){

    document.title = "About"
return <>
    <div className="header-section section section-fluid bg-white d-none d-xl-block">
        <div className="container">
            <div className="row align-items-center">

                <div className="col-auto">
                    <div className="header-logo">
                        <a href="/"><img src="media/logo(600px).png" alt="Learts Logo"/></a>
                    </div>
                </div>

                <div className="col-auto me-auto">
                    <nav className="site-main-menu site-main-menu-left menu-height-100 justify-content-center">
                        <ul>
                            <li className="has-children"><a href="/shop"><span className="menu-text">Shop</span></a>
                                <ul className="sub-menu mega-menu">
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">PRODUCT & Other PAGES</span></a>
                                        <ul>
                                            <li><a href="/product_details"><span className="menu-text">Product with Background</span></a></li>
                                            <li><a href="/shopping_cart"><span className="menu-text">Shopping Cart</span></a></li>
                                            <li><a href="/checkout"><span className="menu-text">Checkout</span></a></li>
                                            <li><a href="/order_tracking"><span className="menu-text">Order Tracking</span></a></li>
                                            <li><a href="/wishlist"><span className="menu-text">Wishlist</span></a></li>
                                            <li><a href="/login_register"><span className="menu-text">Customer Login</span></a></li>
                                            <li><a href="/my_account"><span className="menu-text">My Account</span></a></li>
                                            <li><a href="/lost_password"><span className="menu-text">Lost Password</span></a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>
                            <li className="has-children"><a href="#"><span className="menu-text">Pages</span></a>
                                <ul className="sub-menu">
                                    <li><a href="/about"><span className="menu-text">About us</span></a></li>
                                    <li><a href="/contact_us"><span className="menu-text">Contact us</span></a></li>
                                    <li><a href="/coming_soon"><span className="menu-text">Coming Soon</span></a></li>
                                    <li><a href="*"><span className="menu-text">Page 404</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>


                <div className="col-auto d-none d-xl-block">
                    <div className="header2-search">
                        <form action="#">
                            <input type="text" placeholder="Search..."/>
                            <button className="btn"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>


                <div className="col-auto">
                    <div className="header-tools justify-content-end">
                        <div className="header-login">
                            <a href="/my_account"><i className="far fa-user"></i></a>
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

    </div>

    <div className="sticky-header section bg-white section-fluid d-none d-xl-block">
        <div className="container">
            <div className="row align-items-center">

                <div className="col-xl-auto col">
                    <div className="header-logo">
                        <a href="/"><img src="media/logo(600px).png" alt="Learts Logo"/></a>
                    </div>
                </div>

                <div className="col-auto me-auto d-none d-xl-block">
                    <nav className="site-main-menu site-main-menu-left justify-content-center">
                        <ul>
                            <li className="has-children"><a href="#"><span className="menu-text">Shop</span></a>
                                <ul className="sub-menu mega-menu">
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">PRODUCT & Other PAGES</span></a>
                                        <ul>
                                            <li><a href="/product_details"><span className="menu-text">Product with Background</span></a></li>
                                            <li><a href="/shopping_cart"><span className="menu-text">Shopping Cart</span></a></li>
                                            <li><a href="/checkout"><span className="menu-text">Checkout</span></a></li>
                                            <li><a href="/order_tracking"><span className="menu-text">Order Tracking</span></a></li>
                                            <li><a href="/wishlist"><span className="menu-text">Wishlist</span></a></li>
                                            <li><a href="/login_register"><span className="menu-text">Customer Login</span></a></li>
                                            <li><a href="/my_account"><span className="menu-text">My Account</span></a></li>
                                            <li><a href="/lost_password"><span className="menu-text">Lost Password</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="has-children"><a href="#"><span className="menu-text">Pages</span></a>
                                <ul className="sub-menu">
                                    <li><a href="/about"><span className="menu-text">About us</span></a></li>
                                    <li><a href="/contact_us"><span className="menu-text">Contact us</span></a></li>
                                    <li><a href="/coming_soon"><span className="menu-text">Coming Soon</span></a></li>
                                    <li><a href="*"><span className="menu-text">Page 404</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>



                <div className="col-auto d-none d-xl-block">
                    <div className="header2-search">
                        <form action="#">
                            <input type="text" placeholder="Search..."/>
                            <button className="btn"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>



                <div className="col-auto">
                    <div className="header-tools justify-content-end">
                        <div className="header-login d-none d-sm-block">
                            <a href="/my_account"><i className="far fa-user"></i></a>
                        </div>
                        <div className="header-search d-none d-sm-block d-xl-none">
                            <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search"></i></a>
                        </div>
                        <div className="header-wishlist d-none d-sm-block">
                            <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
                        </div>
                        <div className="mobile-menu-toggle d-xl-none">
                            <a href="#" className="offcanvas-toggle">
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
                        <a href="/"><img src="media/logo(600px).png" alt="Logo"/></a>
                    </div>
                </div>

                <div className="col-auto">
                    <div className="header-tools justify-content-end">
                        <div className="header-login d-none d-sm-block">
                            <a href="/my_account."><i className="far fa-user"></i></a>
                        </div>
                        <div className="header-search d-none d-sm-block">
                            <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search"></i></a>
                        </div>
                        <div className="header-wishlist d-none d-sm-block">
                            <a href="/wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            <a href="/shopping_cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
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
                        <a href="/"><img src="media/logo(600px).png" alt="Learts Logo"/></a>
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
                                <option value="home-decor">Home Decor</option>
                                <option value="gift-ideas">Gift ideas</option>

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
                        <a href="/product_details" className="image"><img src="media/0faaceb4-98ed-419e-8927-bfbc9f464af2.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="/product_details" className="title">Jesus & Mary</a>
                            <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="/product_details" className="image"><img src="media/2f5a3e4b-e789-48cf-813e-73f6caa6ea97.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="/product_details" className="title">The Gateway</a>
                            <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="/product_details" className="image"><img src="media/5 femmes qui ont marqué l'Histoire de l'Art _ Rise Art.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="/product_details" className="title">Femmes Qui Ont</a>
                            <span className="quantity-price">1 x <span className="amount">$50.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="foot">
                <div className="buttons">
                    <a href="/wishlist" className="btn btn-dark btn-hover-primary">view wishlist</a>
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
                        <a href="/product_details" className="image"><img src="media/0faaceb4-98ed-419e-8927-bfbc9f464af2.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="/product_details" className="title">Jesus & Mary</a>
                            <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="/product_details" className="image"><img src="media/2f5a3e4b-e789-48cf-813e-73f6caa6ea97.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="/product_details" className="title">The Gateway</a>
                            <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="/product_details" className="image"><img src="media/5 femmes qui ont marqué l'Histoire de l'Art _ Rise Art.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="/product_details" className="title">Femmes Qui Ont</a>
                            <span className="quantity-price">1 x <span className="amount">$50.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="foot">
                <div className="sub-total">
                    <strong>Subtotal :</strong>
                    <span className="amount">$185.00</span>
                </div>
                <div className="buttons">
                    <a href="/shopping_cart" className="btn btn-dark btn-hover-primary">view cart</a>
                    <a href="/checkout" className="btn btn-outline-dark">checkout</a>
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

    <div className="page-title-section section" data-bg-image="assets/images/bg/page-title-1.webp">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="page-title">
                        <h1 className="title">About us</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active"><a href="/about">About us</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>

        <div className="section section-padding pb-0">
        <div className="container">
            <div className="row learts-mb-n30">

                <div className="col-md-6 col-12 align-self-center learts-mb-30">
                    <div className="about-us3">
                        <span className="sub-title">Live out your life.</span>
                        <h2 className="title">The happiness of</h2>
                        <h2 className="title">crafting artworks </h2>
                        <div className="desc">
                            <p>It’s all about the joy when finally you have done something beautiful on your own and observe it with quite a great deal of proud & successful feeling.</p>
                        </div>
                        <a href="#" className="link">Learn more</a>
                    </div>
                </div>
                <div className="col-md-6 col-12 text-center learts-mb-30">
                    <img src="media/Hibiscus.jpeg" alt=""/>
                </div>

            </div>
        </div>

    </div>

    <div className="section section-padding">
        <div className="container">
            <div className="row row-cols-md-3 row-cols-1 learts-mb-n30">

                <div className="col learts-mb-30">
                    <div className="icon-box4">
                        <div className="inner">
                            <div className="content">
                                <h6 className="title">FREE SHIPPING</h6>
                                <p>Once receiving your order, we will turn your products around in 3- 5 business days.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col border-left border-right learts-mb-30">
                    <div className="icon-box4">
                        <div className="inner">
                            <div className="content">
                                <h6 className="title">FREE RETURNS</h6>
                                <p>We accept returns for freshly purchased products within 7 days from the payment.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="icon-box4">
                        <div className="inner">
                            <div className="content">
                                <h6 className="title">SECURE PAYMENT</h6>
                                <img className="img-hover-color " src="images/others/pay.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div className="section section-padding">
        <div className="container">

            <div className="section-title2 row justify-content-between align-items-center">
                <div className="col-md-auto col-12">
                    <h2 className="title title-icon-right">We love our cilents</h2>
                </div>
                <div className="col-md-auto col-12 mt-4 mt-md-0">
                    <a href="#" className="btn btn-light btn-hover-black">view all</a>
                </div>
            </div>

            <div className="testimonial-carousel">
                <div className="col">
                    <div className="testimonial">
                        <p>There is nothing would satisfy me much more than a worry-free clean and responsive theme from using a high-traffic site.</p>
                        <div className="author">
                            <img src="images/testimonial/testimonial-1.webp" alt=""/>
                            <div className="content">
                                <h6 className="name">Anais Coulon</h6>
                                <span className="title">Actor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="testimonial">
                        <p>Really good design/documentation, pretty much everything is nicely setup. The best choice for my Home.</p>
                        <div className="author">
                            <img src="images/testimonial/testimonial-2.webp" alt=""/>
                            <div className="content">
                                <h6 className="name">Ian Schneider</h6>
                                <span className="title">Actor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="testimonial">
                        <p>My family loves one of the paintings I bought from here.</p>
                        <div className="author">
                            <img src="images/testimonial/testimonial-3.webp" alt=""/>
                            <div className="content">
                                <h6 className="name">Florence Polla</h6>
                                <span className="title">Customer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="testimonial">
                        <p>Thanks for always keeping your site up to date. Your level of support is second to none.</p>
                        <div className="author">
                            <img src="images/testimonial/testimonial-4.webp" alt=""/>
                            <div className="content">
                                <h6 className="name">Sally Ramsey</h6>
                                <span className="title">Reporter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="section section-padding">
        <div className="container">

            <div className="row learts-mb-n30">

                <div className="col-xl-3 col-lg-4 col-12 me-auto learts-mb-30">
                    <h1 className="fw-400">The difference when you shop Arttherapy!</h1>
                </div>
                <div className="col-lg-8 col-12 learts-mb-30">
                    <div className="row learts-mb-n30">

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Free Shipping</p>
                            <p>Once receiving your order, we will turn your products around in 3-5 business days.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Free Returns</p>
                            <p>We accept returns for freshly purchased products within 7 days from the payment.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Superb Quality</p>
                            <p>We make commitments that the quality of our products will and always will be superb.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Free Wrapping</p>
                            <p>Upon request, items bought from our store can receive free wrapping service.</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>

    <div className="footer2-section section section-padding">
        <div className="container">
            <div className="row learts-mb-n40">

                <div className="col-lg-6 learts-mb-40">
                    <div className="widget-about">
                        <img src="media/logo(600px).png" alt=""/>
                    </div>
                </div>

                <div className="col-lg-4 learts-mb-40">
                    <div className="row">
                        <div className="col">
                            <ul className="widget-list">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Store location</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Orders</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="widget-list">
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Support Policy</a></li>
                                <li><a href="#">Size Guide</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 learts-mb-40">
                    <ul className="widget-list">
                        <li> <i className="fab fa-twitter"></i> <a href="https://www.twitter.com/">Twitter</a></li>
                        <li> <i className="fab fa-facebook-f"></i> <a href="https://www.facebook.com/">Facebook</a></li>
                        <li> <i className="fab fa-instagram"></i> <a href="https://www.instagram.com/">Instagram</a></li>
                        <li> <i className="fab fa-youtube"></i> <a href="https://www.youtube.com/">Youtube</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>

    <div className="footer2-copyright section">
        <div className="container">
            <p className="copyright text-center">&copy; 2023 Arttherapy. All Rights Reserved</p>
        </div>
    </div>

</>



}