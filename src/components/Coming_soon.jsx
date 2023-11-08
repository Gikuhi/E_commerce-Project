export default function Coming_soon(){
    return <>
        <div className="coming-soon-section section section-padding" data-bg-image="assets/images/bg/coming-soon-bg.webp">
        <div className="container">
            <div className="coming-soon-content">
                <div className="logo">
                    <a href="index.html"><img src="assets/images/logo/logo-2.webp" alt=""/></a>
                </div>
                <h2 className="title">Coming soon</h2>
                <div className="countdown3" data-countdown="2024/01/01"></div>
                <div className="coming-soon-subscribe">
                    <form id="mc-form" className="mc-form widget-subscibe">
                        <input id="mc-email" className="bg-light" autoComplete="off" type="email" placeholder="Enter your e-mail address"/>
                        <button id="mc-submit" className="btn btn-dark">subscibe</button>
                    </form>
                    <div className="mailchimp-alerts text-centre">
                        <div className="mailchimp-submitting"></div>
                        <div className="mailchimp-success text-success"></div>
                        <div className="mailchimp-error text-danger"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </>
}