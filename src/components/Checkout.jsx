export default function Checkout(){
    return <>
    <div className="header-section section section-fluid bg-white d-none d-xl-block">
        <div className="container">
            <div className="row align-items-center">

                <div className="col-auto">
                    <div className="header-logo">
                        <a href="index.html"><img src="public/assets/media/logo(600px).png" alt="Learts Logo"/></a>
                    </div>
                </div>

                <div className="col-auto me-auto">
                    <nav className="site-main-menu site-main-menu-left menu-height-100 justify-content-center">
                        <ul>
                            <li className="has-children"><a href="#"><span className="menu-text">Shop</span></a>
                                <ul className="sub-menu mega-menu">
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
                                    <li><a href="contact-us.html"><span className="menu-text">Contact us</span></a></li>
                                    <li><a href="coming-soon.html"><span className="menu-text">Coming Soon</span></a></li>
                                    <li><a href="404.html"><span className="menu-text">Page 404</span></a></li>
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
                            <a href="my-account.html"><i className="far fa-user"></i></a>
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
                        <a href="index.html"><img src="public/assets/media/logo(600px).png" alt="Learts Logo"/></a>
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
                            <a href="my-account.html"><i className="far fa-user"></i></a>
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
                        <a href="product-details.html" className="image"><img src="public/assets/media/0faaceb4-98ed-419e-8927-bfbc9f464af2.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">Jesus & Mary</a>
                            <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-details.html" className="image"><img src="public/assets/media/2f5a3e4b-e789-48cf-813e-73f6caa6ea97.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">The Gateway</a>
                            <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-details.html" className="image"><img src="public/assets/media/5 femmes qui ont marqué l'Histoire de l'Art _ Rise Art.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">Femmes Qui Ont</a>
                            <span className="quantity-price">1 x <span className="amount">$50.00</span></span>
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
                        <a href="product-details.html" className="image"><img src="public/assets/media/0faaceb4-98ed-419e-8927-bfbc9f464af2.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">Jesus & Mary</a>
                            <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-details.html" className="image"><img src="public/assets/media/2f5a3e4b-e789-48cf-813e-73f6caa6ea97.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">The Gateway</a>
                            <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                            <a href="#" className="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-details.html" className="image"><img src="public/assets/media/5 femmes qui ont marqué l'Histoire de l'Art _ Rise Art.jpeg" alt="Cart product Image"/></a>
                        <div className="content">
                            <a href="product-details.html" className="title">Femmes Qui Ont</a>
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

    <div className="page-title-section section" data-bg-image="assets/images/bg/page-title-1.webp">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="page-title">
                        <h1 className="title">Checkout</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Checkout</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>

            <div className="section section-padding">
        <div className="container">
            <div className="checkout-coupon">
                <p className="coupon-toggle">Have a coupon? <a href="#checkout-coupon-form" data-bs-toggle="collapse">Click here to enter your code</a></p>
                <div id="checkout-coupon-form" className="collapse">
                    <div className="coupon-form">
                        <p>If you have a coupon code, please apply it below.</p>
                        <form action="#" className="learts-mb-n10">
                            <input className="learts-mb-10" type="text" placeholder="Coupon code"/>
                            <button className="btn btn-dark btn-outline-hover-dark learts-mb-10">apply coupon</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="section-title2">
                <h2 className="title">Billing details</h2>
            </div>
            <form action="#" className="checkout-form learts-mb-50">
                <div className="row">
                    <div className="col-md-6 col-12 learts-mb-20">
                        <label htmlFor="bdFirstName">FIrst Name <abbr className="required">*</abbr></label>
                        <input type="text" id="bdFirstName"/>
                    </div>
                    <div className="col-md-6 col-12 learts-mb-20">
                        <label htmlFor="bdLastName">Last Name <abbr className="required">*</abbr></label>
                        <input type="text" id="bdLastName"/>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdCompanyName">Company name (optional)</label>
                        <input type="text" id="bdCompanyName"/>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdCountry">Country <abbr className="required">*</abbr></label>
                        <select id="bdCountry" className="select2-basic">
                            <option value="">Select a country…</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD" selected>Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="PW">Belau</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo (Brazzaville)</option>
                            <option value="CD">Congo (Kinshasa)</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">Heard Island and McDonald Islands</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="CI">Ivory Coast</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Laos</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="KP">North Korea</option>
                            <option value="MK">North Macedonia</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PS">Palestinian Territory</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russia</option>
                            <option value="RW">Rwanda</option>
                            <option value="ST">São Tomé and Príncipe</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="SX">Saint Martin (Dutch part)</option>
                            <option value="MF">Saint Martin (French part)</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia/Sandwich Islands</option>
                            <option value="KR">South Korea</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syria</option>
                            <option value="TW">Taiwan</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom (UK)</option>
                            <option value="US">United States (US)</option>
                            <option value="UM">United States (US) Minor Outlying Islands</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VA">Vatican</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Vietnam</option>
                            <option value="VG">Virgin Islands (British)</option>
                            <option value="VI">Virgin Islands (US)</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                        </select>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdAddress1">Street address <abbr className="required">*</abbr></label>
                        <input type="text" id="bdAddress1" placeholder="House number and street name"/>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdAddress2" className="sr-only">Apartment, suite, unit etc. (optional)</label>
                        <input type="text" id="bdAddress2" placeholder="Apartment, suite, unit etc. (optional) "/>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdTownOrCity">Town / City <abbr className="required">*</abbr></label>
                        <input type="text" id="bdTownOrCity"/>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdDistrict">District <abbr className="required">*</abbr></label>
                        <select id="bdDistrict" className="select2-basic">
                            <option value="">Select an option…</option>
                            <option value="BD-05">Bagerhat</option>
                            <option value="BD-01">Bandarban</option>
                            <option value="BD-02">Barguna</option>
                            <option value="BD-06">Barishal</option>
                            <option value="BD-07">Bhola</option>
                            <option value="BD-03">Bogura</option>
                            <option value="BD-04">Brahmanbaria</option>
                            <option value="BD-09">Chandpur</option>
                            <option value="BD-10">Chattogram</option>
                            <option value="BD-12">Chuadanga</option>
                            <option value="BD-11">Cox's Bazar</option>
                            <option value="BD-08">Cumilla</option>
                            <option value="BD-13">Dhaka</option>
                            <option value="BD-14">Dinajpur</option>
                            <option value="BD-15">Faridpur </option>
                            <option value="BD-16">Feni</option>
                            <option value="BD-19">Gaibandha</option>
                            <option value="BD-18">Gazipur</option>
                            <option value="BD-17">Gopalganj</option>
                            <option value="BD-20">Habiganj</option>
                            <option value="BD-21">Jamalpur</option>
                            <option value="BD-22">Jashore</option>
                            <option value="BD-25">Jhalokati</option>
                            <option value="BD-23">Jhenaidah</option>
                            <option value="BD-24">Joypurhat</option>
                            <option value="BD-29">Khagrachhari</option>
                            <option value="BD-27">Khulna</option>
                            <option value="BD-26">Kishoreganj</option>
                            <option value="BD-28">Kurigram</option>
                            <option value="BD-30">Kushtia</option>
                            <option value="BD-31">Lakshmipur</option>
                            <option value="BD-32">Lalmonirhat</option>
                            <option value="BD-36">Madaripur</option>
                            <option value="BD-37">Magura</option>
                            <option value="BD-33">Manikganj </option>
                            <option value="BD-39">Meherpur</option>
                            <option value="BD-38">Moulvibazar</option>
                            <option value="BD-35">Munshiganj</option>
                            <option value="BD-34">Mymensingh</option>
                            <option value="BD-48">Naogaon</option>
                            <option value="BD-43">Narail</option>
                            <option value="BD-40">Narayanganj</option>
                            <option value="BD-42">Narsingdi</option>
                            <option value="BD-44">Natore</option>
                            <option value="BD-45">Nawabganj</option>
                            <option value="BD-41">Netrakona</option>
                            <option value="BD-46">Nilphamari</option>
                            <option value="BD-47">Noakhali</option>
                            <option value="BD-49">Pabna</option>
                            <option value="BD-52">Panchagarh</option>
                            <option value="BD-51">Patuakhali</option>
                            <option value="BD-50">Pirojpur</option>
                            <option value="BD-53">Rajbari</option>
                            <option value="BD-54">Rajshahi</option>
                            <option value="BD-56">Rangamati</option>
                            <option value="BD-55">Rangpur</option>
                            <option value="BD-58">Satkhira</option>
                            <option value="BD-62">Shariatpur</option>
                            <option value="BD-57">Sherpur</option>
                            <option value="BD-59">Sirajganj</option>
                            <option value="BD-61">Sunamganj</option>
                            <option value="BD-60">Sylhet</option>
                            <option value="BD-63">Tangail</option>
                            <option value="BD-64">Thakurgaon</option>
                        </select>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdPostcode">Postcode / ZIP (optional)</label>
                        <input type="text" id="bdPostcode"/>
                    </div>
                    <div className="col-md-6 col-12 learts-mb-20">
                        <label htmlFor="bdEmail">Email address <abbr className="required">*</abbr></label>
                        <input type="text" id="bdEmail"/>
                    </div>
                    <div className="col-md-6 col-12 learts-mb-30">
                        <label htmlFor="bdPhone">Phone <abbr className="required">*</abbr></label>
                        <input type="text" id="bdPhone"/>
                    </div>
                    <div className="col-12 learts-mb-40">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Create an account?</label>
                        </div>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdOrderNote">Order Notes (optional)</label>
                        <textarea id="bdOrderNote" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    </div>
                </div>
            </form>
            <div className="section-title2 text-center">
                <h2 className="title">Your order</h2>
            </div>
            <div className="row learts-mb-n30">
                <div className="col-lg-6 order-lg-2 learts-mb-30">
                    <div className="order-review">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="name">Product</th>
                                    <th className="total">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="name">Jesus & Mary&nbsp; <strong className="quantity">×&nbsp;1</strong></td>
                                    <td className="total"><span>$100.00</span></td>
                                </tr>
                                <tr>
                                    <td className="name">The Gateway&nbsp; <strong className="quantity">×&nbsp;1</strong></td>
                                    <td className="total"><span>$22.00</span></td>
                                </tr>
                                <tr>
                                    <td className="name">Minimalist Ceramic Pot - Pearl river, Large&nbsp; <strong className="quantity">×&nbsp;1</strong></td>
                                    <td className="total"><span>$120.00</span></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="subtotal">
                                    <th>Subtotal</th>
                                    <td><span>$185.00</span></td>
                                </tr>
                                <tr className="total">
                                    <th>Total</th>
                                    <td><strong><span>£185.00</span></strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1 learts-mb-30">
                    <div className="order-payment">
                        <div className="payment-method">
                            <div className="accordion" id="paymentMethod">
                                <div className="card active">
                                    <div className="card-header">
                                        <button data-bs-toggle="collapse" data-bs-target="#checkPayments">Check payments</button>
                                    </div>
                                    <div id="checkPayments" className="collapse show" data-bs-parent="#paymentMethod">
                                        <div className="card-body">
                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <button data-bs-toggle="collapse" data-bs-target="#cashkPayments">Cash on delivery </button>
                                    </div>
                                    <div id="cashkPayments" className="collapse" data-bs-parent="#paymentMethod">
                                        <div className="card-body">
                                            <p>Pay with cash upon delivery.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <button data-bs-toggle="collapse" data-bs-target="#payPalPayments">PayPal <img src="assets/images/others/pay-2.webp" alt=""/></button>
                                    </div>
                                    <div id="payPalPayments" className="collapse" data-bs-parent="#paymentMethod">
                                        <div className="card-body">
                                            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="payment-note">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                            <button className="btn btn-dark btn-outline-hover-dark">place order</button>
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
                        <img src="assets/images/logo/logo-2.webp" alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque recusandae commodi mollitia facere iure nisi, laudantium quis quas perferendis a minus dolores.</p>
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