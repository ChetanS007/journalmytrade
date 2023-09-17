import React, { useState } from 'react';
import "./faq.css"

function Accordion({ title, children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div className="wrapper">
      <Accordion title="1. What is Journal My Trade?">
      Journal My Trade is a cutting-edge online trading journal that caters to traders of all levels. Our platform is designed to help you track your Forex, stocks, crypto, futures, CFD, and commodity trades with ease. Our intuitive interface and comprehensive features provide traders with the tools they need to analyze their performance and make informed decisions.
      </Accordion>
      <Accordion title="2. How does Journal My Trade help traders track their trades?">
      <ul>
        <li>
        Journal My Trade is an innovative trading journal application that offers a plethora of useful features to assist traders in tracking their trades. With this app, traders can easily record their trades, analyze them, track their portfolio, and set goals. 
        </li>
        <li>
        By utilizing Journal My Trade, traders can gain valuable insights into their trading performance and make informed decisions to improve their strategies over time. This powerful tool is designed to help traders achieve their goals and maximize their profits. 
          </li>
          <li>
          Whether you are a seasoned trader or just starting out, Journal My Trade is an essential tool for anyone looking to take their trading to the next level. With its user-friendly interface and comprehensive features, this app is a must-have for any serious trader. So why wait? Download Journal My Trade today and start tracking your trades like a pro.
          </li>

      </ul>
      </Accordion>
      <Accordion title="3. Who can use Journal My Trade?">
      This app is suitable for anyone who wishes to monitor their trades and investments. Additionally, it can provide a competitive advantage for those seeking to excel in trading.
      </Accordion>
      <Accordion title="4. What are the benefits of using an online trading journal like Journal My Trade?">
      Using an online trading journal like Journal My Trade can offer a range of benefits for traders, including improved performance, better organization, and greater accountability.
      </Accordion>
      <Accordion title="5. Can I import my existing trades into Journal My Trade?">
      Yes, you can import your existing trades into Journal My Trade. The app provides a bulk import feature that allows you to import your trades in bulk from a CSV or Excel file. However, please note that this feature is only available in the premium version of the app and there is a nominal fee associated with it. You can check the pricing page on the Journal My Trade website for more information on the cost of this feature.
      </Accordion>
      <Accordion title="6. Are there any fees or subscriptions associated with using Journal My Trade?">
      Yes, there are fees and subscriptions associated with using Journal My Trade. The app offers a free version with limited features, which allows you to track up to 30 trades per year. However, if you want to use the app's full range of features, you will need to subscribe to the premium version.
      </Accordion>
      <Accordion title="7. Is my data secure and private ?">
      Yes, your data is secure and private with Journal My Trade. The app takes user data privacy and security seriously and uses industry-standard security measures to protect your data.
      </Accordion>
    </div>
  );
}

export default Faq;
