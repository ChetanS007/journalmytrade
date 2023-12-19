import React from 'react'
import "./home.css";
import "./blog.css";
import homelogo from "./imagesPage/homelogo.png";
import homelogo2 from "./imagesPage/homelogo2.png";
import homelogo3 from "./imagesPage/homelogo3.png";
import homelogo4 from "./imagesPage/homelogo4.png";
import homelogo5 from "./imagesPage/homelogo5.png";
import homeImg4 from "./imagesPage/homeImg4.png";
function Blog() {
  return (
    <div>
      {/* premium-feature */}
      <div class="premium-features">
        <div class="container">
          <h2 class="premium-features-heading">Why 90% of Traders Lose Money in the Stock Market and How to Avoid Being One of Them.</h2>
          <br></br>
          <p class="blog-para">The stock market is a tempting place to invest your money and potentially earn big returns. However, the truth is that the vast majority of traders end up losing money. In fact, statistics show that approximately 90% of traders lose money in the stock market. So, why is this the case and how can you avoid being one of them?</p>
          <div class="cards-container">
            <div class="card-minimal">
              <img class="premium-feature-icon" src={homelogo} alt="Trading History" />
              <div class="premium-feature-text-container">
                <h3 class="premium-feature-heading">Lack of education: </h3>
                <p class="premium-feature-description">Many traders enter the stock market without a proper understanding of how it works or the strategies involved. They may have heard stories of others making quick profits and assume it's easy to do the same. However, the reality is that successful trading requires a lot of education and research to make informed decisions.</p>
              </div>
            </div>
            <div class="card-minimal">
              <img class="premium-feature-icon" src={homelogo2} alt="Market data" />
              <div class="premium-feature-text-container">
                <h3 class="premium-feature-heading">Emotional trading: </h3>
                <p class="premium-feature-description">Another common reason traders lose money is due to emotional trading. They may panic when the market dips or get greedy when it rises, leading to poor investment decisions. It's important to keep emotions in check and make decisions based on logic and analysis rather than fear or greed.</p>
              </div>
            </div>
            <div class="card-minimal">
              <img class="premium-feature-icon" src={homelogo3} alt="Position Sizing" />
              <div class="premium-feature-text-container">
                <h3 class="premium-feature-heading">Lack of discipline: </h3>
                <p class="premium-feature-description">Successful traders have a disciplined approach to investing. They have a clear trading plan, stick to their strategy, and avoid making impulsive decisions. In contrast, traders who lack discipline may jump from one investment to another, leading to inconsistent results.</p>
              </div>
            </div>
            <div class="card-minimal">
              <img class="premium-feature-icon" src={homelogo4} alt="Analytics" />
              <div class="premium-feature-text-container">
                <h3 class="premium-feature-heading">Overtrading: </h3>
                <p class="premium-feature-description">Some traders believe that trading more frequently will increase their chances of making money. However, overtrading can lead to high transaction costs and reduced profits. It's important to focus on quality trades rather than quantity.</p>
              </div>
            </div>
            <div class="card-minimal">
              <img class="premium-feature-icon" src={homelogo4} alt="Analytics" />
              <div class="premium-feature-text-container">
                <h3 class="premium-feature-heading">Failure to manage risk:  </h3>
                <p class="premium-feature-description">Risk management is a crucial aspect of successful trading. Traders who fail to manage their risk may suffer significant losses when the market takes a downturn. It's important to set stop-loss orders and have a clear understanding of your risk tolerance.</p>
              </div>
            </div>
          </div>
          <p class="blog-para">So, what can you do to avoid being part of the 90% of traders who lose money? Start by educating yourself on how the stock market works and the various investment strategies available. Develop a clear trading plan and stick to it, while also being open to making adjustments as needed. Avoid emotional trading and focus on making decisions based on logic and analysis. Finally, make sure to manage your risk effectively and avoid overtrading.
            <br>
            </br>
            <br></br>
            In conclusion, while the stock market can be a lucrative place to invest, it's important to understand the risks involved and take a disciplined approach to trading. By avoiding common mistakes and following a sound trading strategy, you can increase your chances of success and avoid being part of the majority of traders who end up losing money.
          </p>


        </div>



      </div>
    </div>
  )
}

export default Blog