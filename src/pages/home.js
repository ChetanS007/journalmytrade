import React from 'react'
import "./home.css";
import homeImg1 from "./imagesPage/homeImg1.png";
import homeImg2 from "./imagesPage/homeImg2.png";
import homeImg3 from "./imagesPage/homeImg3.png";
import homeImg4 from "./imagesPage/homeImg4.png";
import homeImg5 from "./imagesPage/homeImg5.png";
import homeImg6 from "./imagesPage/homeImg6.png";
import homelogo from "./imagesPage/homelogo.png";
import homelogo2 from "./imagesPage/homelogo2.png";
import homelogo3 from "./imagesPage/homelogo3.png";
import homelogo4 from "./imagesPage/homelogo4.png";
import homelogo5 from "./imagesPage/homelogo5.png";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div class="home-page">
            {/* home */}
            <div class="homeBanner">
                <div class="homeBanner-text-container">
                    <div class="container">
                        <img src={homeImg1} alt="Journal My Trade" class="homeBanner-logo" />
                    </div>
                    <p class="homeBannerPara">An online trading journal to get the pulse of your trade for its healthy growth.</p>
                    <button class="homeBanner-button get-started-button">Get Started</button>
                </div>
                <div class="homeBanner-image-container">
                    <img src={homeImg2} alt="Journal my trade dashboard" class="homeBanner-image" />
                </div>
            </div>
            {/* about */}
            <div className="about ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div className="about-image">
                                <img src={homeImg3} alt="Journal my trade dashboard" className="about-image" />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div className="">
                                <h1 className="about-heading">Journal my trade</h1>
                                <br></br>
                                <p className="about-paragraph">
                                    An online trading journal app for professional stock market traders who want to win at their investment game and know their trading details like the back of their hand.<br /><br />
                                    It is in-depth performance analytics to analyze every aspect of your trading and help you make targeted adjustments to improve every area of your trading at a minimal cost. If you want complete control over your trading, give this user-friendly app a shot for free by clicking the link below.<br />
                                    It is a comprehensive solution to meet the needs of modern traders.
                                </p>
                                <div className="sign-up-container">
                                    <button className="home-button home-sign-up-button">Yes, I want to Sign up for free</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            {/* premium-feature */}
            <div class="premium-features">
                <div class="container">
                    <h2 class="premium-features-heading">Journal my trade Core Premium features that can be game-changers for your trade.</h2>
                    <div class="cards-container">
                        <div class="card-minimal">
                            <img class="premium-feature-icon" src={homelogo} alt="Trading History" />
                            <div class="premium-feature-text-container">
                                <h3 class="premium-feature-heading">Trading History</h3>
                                <p class="premium-feature-description">Log, track, and analyze trades for various assets using filtering and sorting functions.</p>
                            </div>
                        </div>
                        <div class="card-minimal">
                            <img class="premium-feature-icon" src={homelogo2} alt="Market data" />
                            <div class="premium-feature-text-container">
                                <h3 class="premium-feature-heading">Market data</h3>
                                <p class="premium-feature-description">Access real-time and historical market data, news, and insights.</p>
                            </div>
                        </div>
                        <div class="card-minimal">
                            <img class="premium-feature-icon" src={homelogo3} alt="Position Sizing" />
                            <div class="premium-feature-text-container">
                                <h3 class="premium-feature-heading">Position Sizing</h3>
                                <p class="premium-feature-description">Use our advanced position sizing calculator to optimize your trading strategy.</p>
                            </div>
                        </div>
                        <div class="card-minimal">
                            <img class="premium-feature-icon" src={homelogo4} alt="Analytics" />
                            <div class="premium-feature-text-container">
                                <h3 class="premium-feature-heading">Analytics</h3>
                                <p class="premium-feature-description">Use our metrics to track performance and identify patterns.</p>
                            </div>
                        </div>
                    </div>
                    <p class="premium-features-sign-up-instruction">If you want to take advantage of the premium features, sign up here</p>
                    <button class="home-button premium-features-sign-up">Yes, I want to Sign up for Premium App</button>

                </div>
                {/* descriptive-paragraph */}
                <div class="descriptive-paragraph">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <p class="description-para">Are you worried about your investments? Do you think that your gains are small and losses are big? Do you feel that when other stocks are going up, your stocks either go down or stagnate? Do you find yourself repeating your mistakes? Do you fear loss on your investments? If your reply is "yes" to the above questions, it means you need some information you currently don't have. Journalmytrade can help you make informed decisions, reduce stress, and increase your profits by helping you avoid mistakes. Journalmytrade, as the name suggests, helps you log your trading details, analyzes your data, and gives you an insight into your trading patterns that are causing loss to you.</p>
                            </div>
                            <div class="col-md-4">
                                <img src={homeImg4} alt="Journal my trade" class="descriptive-paragraph-image" />

                            </div>
                        </div>
                    </div>
                </div>
                {/* why-section */}
                <div class="why-section">
                    <h2 class="why-heading">Why Journal my trade?</h2>
                    <div class="cards-container container">
                        <div class="card-minimal card-why">
                            <p class="why-card-paragraph">Journal my trade provides in-depth performance analytics, which analyses every aspect of your trading and helps you make targeted adjustments to improve every area of your trading.</p>
                        </div>
                        <br></br>
                        <div class="card-minimal card-why">
                            <p class="why-card-paragraph">Journal my trade provides in-depth performance analytics, which analyses every aspect of your trading and helps you make targeted adjustments to improve every area of your trading.</p>
                        </div>
                        <br></br>
                        <div class="card-minimal card-why">
                            <p class="why-card-paragraph">Journal my trade provides in-depth performance analytics, which analyses every aspect of your trading and helps you make targeted adjustments to improve every area of your trading.</p>
                        </div>
                        <br></br>
                        <div class="card-minimal card-why">
                            <p class="why-card-paragraph">Journal my trade provides in-depth performance analytics, which analyses every aspect of your trading and helps you make targeted adjustments to improve every area of your trading.</p>
                        </div>
                    </div>
                </div>


            </div>
            {/* benefits-section */}
            <div class="benefitsSection">
                <div class="benefits-section container"><div class="row">
                    <div class="col-md-4 benefitsImg">
                    <div class="benefits-img-container">
                        <img src={homeImg5} alt="Journal my trade benefits" class="benefits-tablet" />
                    </div>
                    </div>
                    <div class="col-md-8">
                    <div class="benefits-text-container">
                        <h2 class="benefits-heading">Benefits of Journal my trade</h2>
                        <div class="benefits-list">
                            <div class="d-flex">
                                <div>
                                    <img src={homelogo5} alt="Benefit" class="benefit-list-image" />
                                </div>
                                <div>
                                    <p class="benefit">
                                        Rich and consistent data added to the journal provides rich insights.</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <img src={homelogo5} alt="Benefit" class="benefit-list-image" />
                                </div>
                                <div>
                                    <p class="benefit">
                                        Easy to identify market patterns that help you avoid mistakes.</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <img src={homelogo5} alt="Benefit" class="benefit-list-image" />
                                </div>
                                <div>

                                    <p class="benefit">
                                        Deep analysis of your trading leads to better decision-making.</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <img src={homelogo5} alt="Benefit" class="benefit-list-image" />
                                </div>
                                <div>

                                    <p class="benefit">
                                        Track your progress to observe your mistakes when opening or closing a position.</p>

                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <img src={homelogo5} alt="Benefit" class="benefit-list-image" />
                                </div>
                                <div>

                                    <p class="benefit">
                                        It helps develop a successful trading strategy.</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <img src={homelogo5} alt="Benefit" class="benefit-list-image" />
                                </div>
                                <div>
                                    <p class="benefit">
                                        Opportunity to try different trading strategies that help you find the right trading style.</p>

                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <img src={homelogo5} alt="Benefit" class="benefit-list-image" />
                                </div>
                                <div>
                                    <p class="benefit">
                                        It enables you to recognize your key strengths and weaknesses.</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <img src={homelogo5} alt="Benefit" class="benefit-list-image" />
                                </div>
                                <div>
                                    <p class="benefit">
                                        It helps you become more disciplined as a trader.</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <img src={homelogo5} alt="Benefit" class="benefit-list-image" />
                                </div>
                                <div>
                                    <p class="benefit">
                                        It helps you with risk management.</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div>
                                    <img src={homelogo5} alt="Benefit" class="benefit-list-image" />
                                </div>
                                <div>
                                    <p class="benefit">
                                        It allows you to get some insights into your trading psychology.</p>
                                </div>
                            </div>



                        </div>
                    </div>
                    </div>
                </div>
                   
                   
                </div>
            </div>
            {/* revamp-section */}
            <div class="revamp-section">
                <div class="container">
                    <h2 class="revamp-heading">Revamp your trading strategy with Journal my trade’s unparalleled trading analysis and insights.</h2>
                    <br></br> <h4 class="revamp-semi-heading">Improve your investment decisions, avoid mistakes, and get insights to enhance your investment returns and increase your profits.</h4>
                    <br></br> <p class="revamp-paragraph">Studies show that more than 80% of traders fail and quit trading and investing. The reason why traders fail is that they do not adapt to changing market conditions. It is because they lack access to recent updates and changes in the market condition, whereas the core of winning lies in identifying the strategies that win more money.</p>
                </div>

            </div>
            {/* improvement-tips */}

            <div className="improvement-tips">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div className="improvement-tips-text-container">
                                <div className="improvement-tip">
                                    <h2 className="improvement-tip-heading">How to master long-term profitability?</h2>
                                    <p className="improvement-tip-paragraph">
                                        If you want to master long-term profitability, you need two kinds of skills. The first skill set is about identifying strategies that make you more money than you lose and making these strategies a part of your trading plan. The second skill set is that your strategies should perform well, no matter if the market is bullish or bearish.
                                    </p>
                                </div>
                                <br />
                                <div className="improvement-tip">
                                    <h2 className="improvement-tip-heading">That is where Journal my trade comes into the picture.</h2>
                                    <p className="improvement-tip-paragraph">
                                        Journalmytrade helps you get all the latest updates about market developments and enables you to develop strategies that make you a straight and sure-shot winner.<br />
                                        So do you want to break away from the rest and join the professional minority with a system that enables you to have long-term prosperity?<br />
                                        The second skill set is that your strategies should perform well, no matter if the market is bullish or bearish.<br /><br />
                                        <span className="font-weight-bold">Are you ready to be a winner at your investment game?</span><br />
                                        Start with our free Journalmytrade online app
                                    </p>
                                    <div className="sign-up-container improvement-tips-sign-up">
                                        <button className="home-button home-sign-up-button">Yes, I want to Sign up for free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img src={homeImg6} alt="Improvement Tip" className="improvement-tips-image" />
                        </div>
                    </div>
                </div>
            </div>
            {/* pre-footer   */}
            <div className="pre-footer">
                <h2 className="pre-footer-heading">A chance to elevate your investment game</h2>
                <p className="pre-footer-paragraph">
                    We sincerely hope that you will sign up for the free Journalmytrade online app today so that we can help you elevate your investment right away.
                </p>
                <div className="sign-up-container pre-footer-sign-up">
                    <button className="home-button home-sign-up-button pre-footer-sign-up-button">Yes, I want to Sign up for free</button>
                </div>
            </div>
        </div>
    )
}

export default Home;