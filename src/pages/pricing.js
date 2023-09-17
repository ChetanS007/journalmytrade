import React from 'react'
import "./pricing.css";

function Pricing() {
    return (
        <div class="Pricing">
            <div class="pricing-section container">
                <h2 class="pricing-heading">Pricing</h2>
                <p class="text-center para w-80">Welcome to the pricing page of Journal My Trade! We are committed to delivering exceptional service, top-notch product, and cost-effective pricing options to all our valued customers.</p>
                <div class="pricing-box">
                    <div class="row pricing-columns">
                        <div class="col-md-5">

                            <div class="card  shadow">
                                <div class=" ">
                                    <h2 class="pricing-header">Free</h2>
                                </div>
                                <div class="pricing-price">
                                    <h2>₹ 0/-</h2>

                                </div>
                                <div class="pricing-details">
                                    <ul class="square-list">
                                        <li > Ad's</li>
                                        <li > Up to 30 Trades</li>
                                        <li>1 Account</li>
                                        <li > Limited Stats</li>
                                    </ul>

                                </div>
                                <a href="#" class="btn btn-block pricing-btn text-white">SIGN UP</a>
                            </div>

                        </div>
                        <div class="col-md-5">
                        <div class="card  shadow">
                                <div class=" ">
                                    <h2 class="pricing-header">Premium</h2>
                                </div>
                                <div class="pricing-price pricePaid">
                                    <p><span class="priceCut">1,800/-</span> <span  class="priceOffer">save 45%</span></p>
                                 
                
                                    <h2>₹ 990/- <span class="priceSub">per year</span></h2>
                                </div>
                                <div class="pricing-details">
                                    <ul class="square-list">
                                        <li > Ad's Free</li>
                                        <li > Unlimited Trades</li>
                                        <li>10 Account</li>
                                        <li >Trading View Charts</li>
                                        <li>Price Alert</li>
                                        <li>Trade Tag's</li>
                                        <li>Unlimited Stats</li>
                                        <li>Calender Heatmap</li>
                                        <li>Bulk Trades Upload</li>
                                        <li>Notes</li>
                                        <li>Risk Management Calculator</li>
                                        <li>Reports Download</li>
                                        <li>Future Update</li>
                                    </ul>

                                </div>
                                <a href="#" class="btn btn-block pricing-btn text-white">BUY PLAN</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-center para w-80">Our team is always working to add new features and integrations to our platform, so you can expert regular updates and improvements to your service. </p>
            <br></br>
            <br></br>
            </div>
        </div>
    )
}

export default Pricing