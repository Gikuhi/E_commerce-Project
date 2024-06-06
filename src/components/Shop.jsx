export default function Shop(){
    document.title = "Shop"
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
                            <a href="/wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            <a href="/shopping_cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
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
                            <a href="#/wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            <a href="/shopping_cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
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
                            <a href="/my_account"><i className="far fa-user"></i></a>
                        </div>
                        <div className="header-search d-none d-sm-block">
                            <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search"></i></a>
                        </div>
                        <div className="header-wishlist d-none d-sm-block">
                            <a href="/wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            <a href="#/shopping_cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
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
                        <a href="index.html"><img src="images/logo/logo-2.webp" alt="Learts Logo"/></a>
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
                            <span className="quantity-price">1 x <span className="amount">Ksh10000.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="/product_details" className="image"><img src="media/2f5a3e4b-e789-48cf-813e-73f6caa6ea97.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="/product_details" className="title">The Gateway</a>
                            <span className="quantity-price">1 x <span className="amount">Ksh3500.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="/product_details" className="image"><img src="media/5 femmes qui ont marqué l'Histoire de l'Art _ Rise Art.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="/product_details" className="title">Femmes Qui Ont</a>
                            <span className="quantity-price">1 x <span className="amount">Ksh5000.00</span></span>
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
                            <span className="quantity-price">1 x <span className="amount">Ksh10000.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="/product_details" className="image"><img src="media/2f5a3e4b-e789-48cf-813e-73f6caa6ea97.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="/product_details" className="title">The Gateway</a>
                            <span className="quantity-price">1 x <span className="amount">Ksh3500.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="/product_details" className="image"><img src="media/5 femmes qui ont marqué l'Histoire de l'Art _ Rise Art.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="/product_details" className="title">Femmes Qui Ont</a>
                            <span className="quantity-price">1 x <span className="amount">Ksh5000.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="foot">
                <div className="sub-total">
                    <strong>Subtotal :</strong>
                    <span className="amount">Ksh18500.00</span>
                </div>
                <div className="buttons">
                    <a href="/shopping_cart" className="btn btn-dark btn-hover-primary">view cart</a>
                    <a href="/checkout" className="btn btn-outline-dark">checkout</a>
                </div>
                <p className="minicart-message">Free Shipping on All Orders Over Ksh10000!</p>
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
                                    <li><a href="/product_details"><span className="menu-text">Basic</span></a></li>
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
                                    <li><a href="/wishlist"><span className="menu-text">Wishlist</span></a></li>
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
                        <a href="/wishlist"><span>3</span><i className="far fa-heart"></i></a>
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
                        <h1 className="title">Shop</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active">Products</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div className="section section-padding pt-0">

        <div className="shop-toolbar border-bottom">
            <div className="container">
                <div className="row learts-mb-n20">

                    <div className="col-md col-12 align-self-center learts-mb-20">
                        <div className="isotope-filter shop-product-filter" data-target="#shop-products">
                            <button className="active" data-filter="*">all</button>
                            <button data-filter=".featured">Hot Products</button>
                            <button data-filter=".new">New Products</button>
                            <button data-filter=".sales">Sales Products</button>
                        </div>
                    </div>

                    <div className="col-md-auto col-12 learts-mb-20">
                        <ul className="shop-toolbar-controls">

                            <li>
                                <div className="product-sorting">
                                    <select className="nice-select">
                                        <option value="menu_order" defaultValue="selected">Default sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by latest</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-desc">Sort by price: high to low</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div className="product-column-toggle d-none d-xl-flex">
                                    <button className="toggle active hintT-top" data-hint="5 Column" data-column="5"><i className="ti-layout-grid4-alt"></i></button>
                                    <button className="toggle hintT-top" data-hint="4 Column" data-column="4"><i className="ti-layout-grid3-alt"></i></button>
                                    <button className="toggle hintT-top" data-hint="3 Column" data-column="3"><i className="ti-layout-grid2-alt"></i></button>
                                </div>
                            </li>
                            <li>
                                <a className="product-filter-toggle" href="#product-filter">Filters</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div id="product-filter" className="product-filter bg-light">
            <div className="container">
                <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 learts-mb-n30">

                    <div className="col learts-mb-30">
                        <h3 className="widget-title product-filter-widget-title">Sort by</h3>
                        <ul className="widget-list product-filter-widget customScroll">
                            <li><a href="#">Popularity</a></li>
                            <li><a href="#">Average rating</a></li>
                            <li><a href="#">Newness</a></li>
                            <li><a href="#">Price: low to high</a></li>
                            <li><a href="#">Price: high to low</a></li>
                        </ul>
                    </div>

                    <div className="col learts-mb-30">
                        <h3 className="widget-title product-filter-widget-title">Price filter</h3>
                        <ul className="widget-list product-filter-widget customScroll">
                            <li> <a href="#">All</a></li>
                            <li> <a href="#"><span className="amount"><span className="cur-symbol">Ksh</span>0.00</span> - <span className="amount"><span className="cur-symbol">£</span>80.00</span></a></li>
                            <li> <a href="#"><span className="amount"><span className="cur-symbol">Ksh</span>8000.00</span> - <span className="amount"><span className="cur-symbol">£</span>160.00</span></a></li>
                            <li> <a href="#"><span className="amount"><span className="cur-symbol">Ksh</span>16000.00</span> - <span className="amount"><span className="cur-symbol">£</span>240.00</span></a></li>
                            <li> <a href="#"><span className="amount"><span className="cur-symbol">Ksh</span>24000.00</span> - <span className="amount"><span className="cur-symbol">£</span>320.00</span></a></li>
                            <li> <a href="#"><span className="amount"><span className="cur-symbol">Ksh</span>32000.00</span> +</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="section learts-mt-70">
            <div className="container">
                <div id="shop-products" className="products isotope-grid row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                    <div className="grid-sizer col-1"></div>

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <img src="media/Yofukuro.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/Yofukuro.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="product_details">Yofukuro</a></h6>
                                <span className="price">
                                    Ksh9000.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <span className="product-badges">
                                        <span className="outofstock"><i className="far fa-frown"></i></span>
                                    </span>
                                    <img src="/media/c62ab731-b052-4df4-a8f3-42179bc13da0.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/c62ab731-b052-4df4-a8f3-42179bc13da0.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="product_details">The Eye</a></h6>
                                <span className="price">
                                    Ksh5500.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <span className="product-badges">
                                    <span className="hot">hot</span>
                                </span>
                                <a href="product_details" className="image">
                                    <img src="media/cab3dfee-eb20-4845-ae26-56a511716ec5.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/cab3dfee-eb20-4845-ae26-56a511716ec5.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Enlightenment</a></h6>
                                <span className="price">
                                    Ksh2500.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <img src="media/Color Exercises.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/Color Exercises.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Color Exercises</a></h6>
                                <span className="price">
                                    Ksh1500.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col sales featured">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <span className="product-badges">
                                        <span className="onsale">-20%</span>
                                    </span>
                                    <img src="media/dde529a1-d557-4193-b637-75cde5994728.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/dde529a1-d557-4193-b637-75cde5994728.jpeg" alt="Product Image"/>
                                </a>
                                <a href="?wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Last Supper</a></h6>
                                <span className="price">
                                    <span className="old">Ksh7000.00</span>
                                <span className="new">Ksh5600.00</span>
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col sales">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <span className="product-badges">
                                        <span className="onsale">-13%</span>
                                    </span>
                                    <img src="media/e0ddb5be-0254-4ea1-88f9-01cf40a2fe9f.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/e0ddb5be-0254-4ea1-88f9-01cf40a2fe9f.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Battleship</a></h6>
                                <span className="price">
                                    <span className="old">Ksh4500.00</span>
                                <span className="new">Ksh3900.00</span>
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <img src="media/GrantWoodFarmersPaintingWallMural.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Grant Wood Farmers</a></h6>
                                <span className="price">
                                    Ksh15000.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <img src="media/Jean-MichelBasquiat _ Furious Man _ MutualArt.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/Jean-MichelBasquiat _ Furious Man _ MutualArt.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Furious Man</a></h6>
                                <span className="price">
                                    Ksh9000.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <img src="/media/Long Time Coming Painting.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/Long Time Coming Painting.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Long Timr Coming</a></h6>
                                <span className="price">
                                    Ksh3500.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <span className="product-badges">
                                        <span className="outofstock"><i className="far fa-frown"></i></span>
                                    </span>
                                    <img src="media/que debería poner en el fondo.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/que debería poner en el fondo.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Mr Sun</a></h6>
                                <span className="price">
                                    Ksh3800.00 - Ksh5000.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <img src="/media/simon-lee-MnnDZX4gAw4-unsplash.jpg" alt="Product Image"/>
                                    <img className="image-hover " src="media/simon-lee-MnnDZX4gAw4-unsplash.jpg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Simon Lee's Moon</a></h6>
                                <span className="price">
                                    Ksh14000.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col sales new">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <span className="product-badges">
                                        <span className="onsale">-13%</span>
                                    </span>
                                    <img src="media/Sunflowers_on_Gold.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Sunflowers on Gold</a></h6>
                                <span className="price">
                                    <span className="old">Ksh4500.00</span>
                                <span className="new">Ksh3900.00</span>
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <span className="product-badges">
                                        <span className="outofstock"><i className="far fa-frown"></i></span>
                                    <span className="hot">hot</span>
                                    </span>
                                    <img src="media/Reaching.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/Reaching.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Reaching</a></h6>
                                <span className="price">
                                    Ksh5000.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <img src="media/adrianna-geo-1rBg5YSi00c-unsplash.jpg" alt="Product Image"/>
                                    <img className="image-hover " src="media/adrianna-geo-1rBg5YSi00c-unsplash.jpg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">Adrianna Geo</a></h6>
                                <span className="price">
                                    Ksh35000.00
                                </span>
                                <div className="product-buttons">
                                    <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                    <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <a href="/product_details" className="image">
                                    <img src="media/Sorrow-JacksonEvilOriginals_OpenSea.jpeg" alt="Product Image"/>
                                    <img className="image-hover " src="media/Sorrow-JacksonEvilOriginals_OpenSea.jpeg" alt="Product Image"/>
                                </a>
                                <a href="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                            </div>
                            <div className="product-info">
                                <h6 className="title"><a href="/product_details">The Devil Cries</a></h6>
                                <span className="price">
                                    Ksh20000.00
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
                <div className="text-center learts-mt-70">
                    <a href="#" className="btn btn-dark btn-outline-hover-dark"><i className="ti-plus"></i> More</a>
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
    {/*<div className="quickViewModal modal fade" id="quickViewModal">*/}
    {/*    <div className="modal-dialog modal-dialog-centered">*/}
    {/*        <div className="modal-content">*/}
    {/*            <button className="close" data-bs-dismiss="modal">&times;</button>*/}
    {/*            <div className="row learts-mb-n30">*/}

    {/*                <div className="col-lg-6 col-12 learts-mb-30">*/}
    {/*                    <div className="product-images">*/}
    {/*                        <div className="product-gallery-slider-quickview">*/}
    {/*                            <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-1.webp">*/}
    {/*                                <img src="assets/images/product/single/1/product-1.webp" alt=""/>*/}
    {/*                            </div>*/}
    {/*                            <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-2.webp">*/}
    {/*                                <img src="assets/images/product/single/1/product-2.webp" alt=""/>*/}
    {/*                            </div>*/}
    {/*                            <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-3.webp">*/}
    {/*                                <img src="assets/images/product/single/1/product-3.webp" alt=""/>*/}
    {/*                            </div>*/}
    {/*                            <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp">*/}
    {/*                                <img src="assets/images/product/single/1/product-4.webp" alt=""/>*/}
    {/*                            </div>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}

    {/*                <div className="col-lg-6 col-12 overflow-hidden position-relative learts-mb-30">*/}
    {/*                    <div className="product-summery customScroll">*/}
    {/*                        <div className="product-ratings">*/}
    {/*                            <span className="star-rating">*/}
    {/*                            <span className="rating-active" >ratings</span>*/}
    {/*                            </span>*/}
    {/*                            <a href="#reviews" className="review-link">(<span className="count">3</span> customer reviews)</a>*/}
    {/*                        </div>*/}
    {/*                        <h3 className="product-title">Cleaning Dustpan & Brush</h3>*/}
    {/*                        <div className="product-price">£38.00 – £50.00</div>*/}
    {/*                        <div className="product-description">*/}
    {/*                            <p>Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles.</p>*/}
    {/*                        </div>*/}
    {/*                        <div className="product-variations">*/}
    {/*                            <table>*/}
    {/*                                <tbody>*/}
    {/*                                    <tr>*/}
    {/*                                        <td className="label"><span>Size</span></td>*/}
    {/*                                        <td className="value">*/}
    {/*                                            <div className="product-sizes">*/}
    {/*                                                <a href="#">Large</a>*/}
    {/*                                                <a href="#">Medium</a>*/}
    {/*                                                <a href="#">Small</a>*/}
    {/*                                            </div>*/}
    {/*                                        </td>*/}
    {/*                                    </tr>*/}
    {/*                                    <tr>*/}
    {/*                                        <td className="label"><span>Color</span></td>*/}
    {/*                                        <td className="value">*/}
    {/*                                            <div className="product-colors">*/}
    {/*                                                <a href="#" data-bg-color="#000000"></a>*/}
    {/*                                                <a href="#" data-bg-color="#ffffff"></a>*/}
    {/*                                            </div>*/}
    {/*                                        </td>*/}
    {/*                                    </tr>*/}
    {/*                                    <tr>*/}
    {/*                                        <td className="label"><span>Quantity</span></td>*/}
    {/*                                        <td className="value">*/}
    {/*                                            <div className="product-quantity">*/}
    {/*                                                <span className="qty-btn minus"><i className="ti-minus"></i></span>*/}
    {/*                                                <input type="text" className="input-qty" defaultValue="1"/>*/}
    {/*                                                <span className="qty-btn plus"><i className="ti-plus"></i></span>*/}
    {/*                                            </div>*/}
    {/*                                        </td>*/}
    {/*                                    </tr>*/}
    {/*                                </tbody>*/}
    {/*                            </table>*/}
    {/*                        </div>*/}
    {/*                        <div className="product-buttons">*/}
    {/*                            <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="far fa-heart"></i></a>*/}
    {/*                            <a href="#" className="btn btn-dark btn-outline-hover-dark"><i className="fas fa-shopping-cart"></i> Add to Cart</a>*/}
    {/*                            <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="fas fa-random"></i></a>*/}
    {/*                        </div>*/}
    {/*                        <div className="product-brands">*/}
    {/*                            <span className="title">Brands</span>*/}
    {/*                            <div className="brands">*/}
    {/*                                <a href="#"><img src="assets/images/brands/brand-3.webp" alt=""/></a>*/}
    {/*                                <a href="#"><img src="assets/images/brands/brand-8.webp" alt=""/></a>*/}
    {/*                            </div>*/}
    {/*                        </div>*/}
    {/*                        <div className="product-meta mb-0">*/}
    {/*                            <table>*/}
    {/*                                <tbody>*/}
    {/*                                    <tr>*/}
    {/*                                        <td className="label"><span>SKU</span></td>*/}
    {/*                                        <td className="value">0404019</td>*/}
    {/*                                    </tr>*/}
    {/*                                    <tr>*/}
    {/*                                        <td className="label"><span>Category</span></td>*/}
    {/*                                        <td className="value">*/}
    {/*                                            <ul className="product-category">*/}
    {/*                                                <li><a href="#">Kitchen</a></li>*/}
    {/*                                            </ul>*/}
    {/*                                        </td>*/}
    {/*                                    </tr>*/}
    {/*                                    <tr>*/}
    {/*                                        <td className="label"><span>Tags</span></td>*/}
    {/*                                        <td className="value">*/}
    {/*                                            <ul className="product-tags">*/}
    {/*                                                <li><a href="#">handmade</a></li>*/}
    {/*                                                <li><a href="#">learts</a></li>*/}
    {/*                                                <li><a href="#">mug</a></li>*/}
    {/*                                                <li><a href="#">product</a></li>*/}
    {/*                                                <li><a href="#">learts</a></li>*/}
    {/*                                            </ul>*/}
    {/*                                        </td>*/}
    {/*                                    </tr>*/}
    {/*                                    <tr>*/}
    {/*                                        <td className="label"><span>Share on</span></td>*/}
    {/*                                        <td className="va">*/}
    {/*                                            <div className="product-share">*/}
    {/*                                                <a href="#"><i className="fab fa-facebook-f"></i></a>*/}
    {/*                                                <a href="#"><i className="fab fa-twitter"></i></a>*/}
    {/*                                                <a href="#"><i className="fab fa-google-plus-g"></i></a>*/}
    {/*                                                <a href="#"><i className="fab fa-pinterest"></i></a>*/}
    {/*                                                <a href="#"><i className="far fa-envelope"></i></a>*/}
    {/*                                            </div>*/}
    {/*                                        </td>*/}
    {/*                                    </tr>*/}
    {/*                                </tbody>*/}
    {/*                            </table>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}

    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*</div>*/}
        
    </>
}