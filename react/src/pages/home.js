import React, { useContext } from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mantine/core";
import listIcon from "./list-icon.png"; // Update the path accordingly

function Home() {
  return (
    <div class="home-page newContainer">
      {/* home */}
      <div class="container-fluid">
        <div class="row pb-5">
          <div class="col-12 col-md-12 col-lg-6 pb-5">
            <div class="text-center">
              <img
                class="w-100"
                src="https://journalmytrade.com/static/media/homeImg1.43c9e504af773ba3d4fd.png"
              />
            </div>

            <div class="poppins-medium homeBannerPara">
              An online trading journal to get the pulse of your trade for its
              healthy growth.
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6 pt-5 pb-5">
            <img
              class="w-100"
              src="https://journalmytrade.com/static/media/homeImg2.c4514af57189e99b91b9.png"
            />
          </div>
        </div>
      </div>

      <div class="bg-gray">
        <div class="container ">
          <div class="row py-5">
            <div class="col-12 col-md-12 col-lg-6 text-center py-5">
              <img
                class="w-100 pt-5"
                src="https://journalmytrade.com/static/media/homeImg3.b99ce75898981d3cb270.png"
              />
            </div>

            <div class="col-12 col-md-12 col-lg-6 py-5 ps-5 mob-ps-5">
              <div class="poppins-bold title">Journal my trade</div>

              <div class="para-text">
                An online trading journal app for professional stock market
                traders who want to win at their investment game and know their
                trading details like the back of their hand. It is in-depth
                performance analytics to analyze every aspect of your trading
                and help you make targeted adjustments to improve every area of
                your trading at a minimal cost. If you want complete control
                over your trading, give this user-friendly app a shot for free
                by clicking the link below. It is a comprehensive solution to
                meet the needs of modern traders.
              </div>

              <div class="pt-5">
                <button type="button" class="btn button-all ">
                  Yes, I want to Sign up for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="poppins-bold title pt-5 px-5 text-center">
          Journal my trade Core Premium features that can be game-changers for
          your trade.
        </div>
        <div class="row container-fluid py-5 ">
          <div class="col-12 col-md-6 col-lg-6 pt-5">
            <div class="card-minimal">
              <div class="d-flex">
                <div>
                  <img
                    class="premium-feature-icon"
                    src="https://journalmytrade.com/static/media/homelogo.e01b8d2ee98d4db10433.png"
                    alt="Trading History"
                  />
                </div>

                <div>
                  <div class="premium-feature-heading">Trading History</div>
                  <div class="para-text">
                    Log, track, and analyze trades for various assets using
                    filtering and sorting functions.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6 pt-5">
            <div class="card-minimal">
              <div class="d-flex">
                <div>
                  <img
                    class="premium-feature-icon"
                    src="https://journalmytrade.com/static/media/homelogo2.790c190ba1e27e4aa78d.png"
                    alt="Market data"
                  />
                </div>

                <div>
                  <div class="premium-feature-heading">Market data</div>
                  <div class="para-text">
                    Access real-time and historical market data, news, and
                    insights.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <div class="card-minimal">
              <div class="d-flex">
                <div>
                  <img
                    class="premium-feature-icon"
                    src="https://journalmytrade.com/static/media/homelogo.e01b8d2ee98d4db10433.png"
                    alt="Trading History"
                  />
                </div>

                <div>
                  <div class="premium-feature-heading">Position Sizing</div>
                  <div class="para-text">
                    Use our advanced position sizing calculator to optimize your
                    trading strategy.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <div class="card-minimal">
              <div class="d-flex">
                <div>
                  <img
                    class="premium-feature-icon"
                    src="https://journalmytrade.com/static/media/homelogo2.790c190ba1e27e4aa78d.png"
                    alt="Market data"
                  />
                </div>

                <div>
                  <div class="premium-feature-heading">Analytics</div>
                  <div class="para-text">
                    Use our metrics to track performance and identify patterns.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center para-text my-0">
          If you want to take advantage of the premium features, sign up here
        </div>

        <div class="pt-5 text-center">
          <button type="button" class="btn button-all ">
            Yes, I want to Sign up for Premium App
          </button>
        </div>
      </div>

      <div class="bg-blue">
        <div class="container">
          <div class="row py-5">
            <div class="col-12 col-md-12 col-lg-6 py-5 ps-5 mob-ps-5">
              <div class="para-text">
                Are you worried about your investments? Do you think that your
                gains are small and losses are big? Do you feel that when other
                stocks are going up, your stocks either go down or stagnate? Do
                you find yourself repeating your mistakes? Do you fear loss on
                your investments? If your reply is "yes" to the above questions,
                it means you need some information you currently don't have.
                Journalmytrade can help you make informed decisions, reduce
                stress, and increase your profits by helping you avoid mistakes.
                Journalmytrade, as the name suggests, helps you log your trading
                details, analyzes your data, and gives you an insight into your
                trading patterns that are causing loss to you.
              </div>
            </div>

            <div class="col-12 col-md-12 col-lg-6 text-center py-5">
              <img
                class="w-100 pt-5"
                src="https://journalmytrade.com/static/media/homeImg4.b05ffb4701aafcffbbb8.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="poppins-bold title pt-5 px-5 text-center">
          Why Journal my trade?
        </div>
        <div class="row container-fluid py-5">
          <div class="col-12 col-md-6 col-lg-6 pt-5">
            <div class="card-minimal border-left-style">
              <div>
                <div class="para-text">
                  Journal my trade provides in-depth performance analytics,
                  which analyses every aspect of your trading and helps you make
                  targeted adjustments to improve every area of your trading.
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6 pt-5">
            <div class="card-minimal border-left-style">
              <div>
                <div class="para-text">
                  Journal my trade provides in-depth performance analytics,
                  which analyses every aspect of your trading and helps you make
                  targeted adjustments to improve every area of your trading.
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <div class="card-minimal border-left-style">
              <div>
                <div class="para-text">
                  Journal my trade provides in-depth performance analytics,
                  which analyses every aspect of your trading and helps you make
                  targeted adjustments to improve every area of your trading.
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <div class="card-minimal border-left-style">
              <div>
                <div class="para-text">
                  Journal my trade provides in-depth performance analytics,
                  which analyses every aspect of your trading and helps you make
                  targeted adjustments to improve every area of your trading.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray">
        <div class="container ">
          <div class="poppins-bold title pt-5 px-5 text-center">
            Why Journal my trade?
          </div>

          <div class="row py-5">
            <div class="col-12 col-md-12 col-lg-6 text-center py-5">
              <img
                class="w-100 pt-5 mt-5"
                src="https://journalmytrade.com/static/media/homeImg5.0f0375f11a1b6615e458.png"
              />
            </div>

            <div class="col-12 col-md-12 col-lg-6 py-5 ps-5 mob-ps-5">
              <ul class="list-view">
                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>
                      Rich and consistent data added to the journal provides
                      rich insights.
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>
                      Easy to identify market patterns that help you avoid
                      mistakes.
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>
                      Deep analysis of your trading leads to better
                      decision-making.
                    </div>
                  </div>
                </li>

                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>
                      Track your progress to observe your mistakes when opening
                      or closing a position.
                    </div>
                  </div>
                </li>

                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>
                      Track your progress to observe your mistakes when opening
                      or closing a position.
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>It helps develop a successful trading strategy.</div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>
                      Opportunity to try different trading strategies that help
                      you find the right trading style.
                    </div>
                  </div>
                </li>

                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>
                      It enables you to recognize your key strengths and
                      weaknesses.
                    </div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>It helps you become more disciplined as a trader.</div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>It helps you with risk management.</div>
                  </div>
                </li>
                <li>
                  <div class="d-flex">
                    <div>
                      <img class="list-icon" src={listIcon} />
                    </div>
                    <div>
                      It allows you to get some insights into your trading
                      psychology.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="poppins-bold title pt-5 px-5 text-center">
          Revamp your trading strategy with Journal my trade’s unparalleled
          trading analysis and insights.
        </div>

        <div class="text-center para-text px-5 poppins-semibold">
          Improve your investment decisions, avoid mistakes, and get insights to
          enhance your investment returns and increase your profits.
        </div>

        <div class="para-text text-center">
          Studies show that more than 80% of traders fail and quit trading and
          investing. The reason why traders fail is that they do not adapt to
          changing market conditions. It is because they lack access to recent
          updates and changes in the market condition, whereas the core of
          winning lies in identifying the strategies that win more money.
        </div>
      </div>

      <div class="bg-gray">
        <div class="container ">
          <div class="row py-5">
            <div class="col-12 col-md-12 col-lg-7  py-5">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="poppins-bold text-title">
                    How to master long-term profitability?
                  </div>

                  <div class="para-text">
                    If you want to master long-term profitability, you need two
                    kinds of skills. The first skill set is about identifying
                    strategies that make you more money than you lose and making
                    these strategies a part of your trading plan. The second
                    skill set is that your strategies should perform well, no
                    matter if the market is bullish or bearish.
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                  <div class="poppins-bold text-title">
                    That is where Journal my trade comes into the picture.
                  </div>

                  <div class="para-text">
                    Journal my trade helps you get all the latest updates about
                    market developments and enables you to develop strategies
                    that make you a straight and sure-shot winner. So do you
                    want to break away from the rest and join the professional
                    minority with a system that enables you to have long-term
                    prosperity? The second skill set is that your strategies
                    should perform well, no matter if the market is bullish or
                    bearish.
                  </div>
                </div>

                <div class="col-12 col-md-12 col-lg-12 text-center">
                  <div class="poppins-medium text-title">
                    Are you ready to be a winner at your investment game?
                  </div>

                  <div class="para-text text-center">
                    Start with our free Journalmytrade online app
                  </div>

                  <button type="button" class="btn button-all ">
                    Yes, I want to Sign up for free
                  </button>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-12 col-lg-5 py-5 ps-5 mob-ps-5">
              <img
                class="w-100 pt-5 "
                src="https://journalmytrade.com/static/media/homeImg6.da442518d4dc1732ffbd.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
