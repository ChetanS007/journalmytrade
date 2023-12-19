import React, { useState } from "react";
import SignInlogo from "./imagesPage/footerLogo.png";
import "./signup.css";
import { Link } from "react-router-dom";
import { registerApi } from "../apis/apicalls";

function SignUp({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("India (+91)");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tandcAggredd, settandcAggredd] = useState(false);
  const [finacial_year, setfinacial_year] = useState("0");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  // Step 2: Define an array of currency options
  const currencyOptions = [
    "INR",
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "CAD",
    // Add more currencies as needed
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      countryCode.split(" "),
      mobileNo,
      email,
      password,
      confirmPassword
    );
    if (tandcAggredd) {
      if (
        firstName.trim() === "" ||
        lastName.trim() === "" ||
        countryCode.trim() === "" ||
        mobileNo.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        confirmPassword.trim() === ""
      ) {
        alert("Please fill in all required fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
      }
      const res = await registerApi({
        email,
        firstName,
        lastName,
        mobileNo,
        password,
        confirmPassword,
        country: countryCode.split(" ")[0],
        finYeartype: finacial_year,
        currency: selectedCurrency,
      });
      if (res.Message === "User Register Successfully") {
        onClose();
      } else {
        alert(res.Message);
      }
    } else {
      alert("Please agree terms and condition");
    }
  };

  return (
    <div className="modal">
      <div className=" modal-style">
        <div className="close-icon" onClick={onClose}>
          <span className="material-icons">✖</span>
        </div>
        <div className="logo-div">
          <img src={SignInlogo} alt="Logo" className="logo-design" />
        </div>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row name-style">
            <div className="col-md-6">
              <input
                type="text"
                className="form-input"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-input"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row style-mx">
            {/* <div className="col-md-4">
              <select
                name="countryCode"
                id=""
                className="form-inpdeut country-co"
                onChange={(e) => {
                  let index = e.nativeEvent.target.selectedIndex;
                  let label = e.nativeEvent.target[index].text;
                  setCountryCode(label);
                }}
              >
                <option data_countryCode="IN" value="91">
                  India (+91)
                </option>
                <option data_countryCode="US" value="1">
                  UK (+44)
                </option>
                <optgroup label="Other countries">
                  <option data_countryCode="DZ" value="213">
                    Algeria (+213)
                  </option>
                  <option data_countryCode="AD" value="376">
                    Andorra (+376)
                  </option>
                  <option data_countryCode="AO" value="244">
                    Angola (+244)
                  </option>
                  <option data_countryCode="AI" value="1264">
                    Anguilla (+1264)
                  </option>
                  <option data_countryCode="AG" value="1268">
                    Antigua &amp; Barbuda (+1268)
                  </option>
                  <option data_countryCode="AR" value="54">
                    Argentina (+54)
                  </option>
                  <option data_countryCode="AM" value="374">
                    Armenia (+374)
                  </option>
                  <option data_countryCode="AW" value="297">
                    Aruba (+297)
                  </option>
                  <option data_countryCode="AU" value="61">
                    Australia (+61)
                  </option>
                  <option data_countryCode="AT" value="43">
                    Austria (+43)
                  </option>
                  <option data_countryCode="AZ" value="994">
                    Azerbaijan (+994)
                  </option>
                  <option data_countryCode="BS" value="1242">
                    Bahamas (+1242)
                  </option>
                  <option data_countryCode="BH" value="973">
                    Bahrain (+973)
                  </option>
                  <option data_countryCode="BD" value="880">
                    Bangladesh (+880)
                  </option>
                  <option data_countryCode="BB" value="1246">
                    Barbados (+1246)
                  </option>
                  <option data_countryCode="BY" value="375">
                    Belarus (+375)
                  </option>
                  <option data_countryCode="BE" value="32">
                    Belgium (+32)
                  </option>
                  <option data_countryCode="BZ" value="501">
                    Belize (+501)
                  </option>
                  <option data_countryCode="BJ" value="229">
                    Benin (+229)
                  </option>
                  <option data_countryCode="BM" value="1441">
                    Bermuda (+1441)
                  </option>
                  <option data_countryCode="BT" value="975">
                    Bhutan (+975)
                  </option>
                  <option data_countryCode="BO" value="591">
                    Bolivia (+591)
                  </option>
                  <option data_countryCode="BA" value="387">
                    Bosnia Herzegovina (+387)
                  </option>
                  <option data_countryCode="BW" value="267">
                    Botswana (+267)
                  </option>
                  <option data_countryCode="BR" value="55">
                    Brazil (+55)
                  </option>
                  <option data_countryCode="BN" value="673">
                    Brunei (+673)
                  </option>
                  <option data_countryCode="BG" value="359">
                    Bulgaria (+359)
                  </option>
                  <option data_countryCode="BF" value="226">
                    Burkina Faso (+226)
                  </option>
                  <option data_countryCode="BI" value="257">
                    Burundi (+257)
                  </option>
                  <option data_countryCode="KH" value="855">
                    Cambodia (+855)
                  </option>
                  <option data_countryCode="CM" value="237">
                    Cameroon (+237)
                  </option>
                  <option data_countryCode="CA" value="1">
                    Canada (+1)
                  </option>
                  <option data_countryCode="CV" value="238">
                    Cape Verde Islands (+238)
                  </option>
                  <option data_countryCode="KY" value="1345">
                    Cayman Islands (+1345)
                  </option>
                  <option data_countryCode="CF" value="236">
                    Central African Republic (+236)
                  </option>
                  <option data_countryCode="CL" value="56">
                    Chile (+56)
                  </option>
                  <option data_countryCode="CN" value="86">
                    China (+86)
                  </option>
                  <option data_countryCode="CO" value="57">
                    Colombia (+57)
                  </option>
                  <option data_countryCode="KM" value="269">
                    Comoros (+269)
                  </option>
                  <option data_countryCode="CG" value="242">
                    Congo (+242)
                  </option>
                  <option data_countryCode="CK" value="682">
                    Cook Islands (+682)
                  </option>
                  <option data_countryCode="CR" value="506">
                    Costa Rica (+506)
                  </option>
                  <option data_countryCode="HR" value="385">
                    Croatia (+385)
                  </option>
                  <option data_countryCode="CU" value="53">
                    Cuba (+53)
                  </option>
                  <option data_countryCode="CY" value="90392">
                    Cyprus North (+90392)
                  </option>
                  <option data_countryCode="CY" value="357">
                    Cyprus South (+357)
                  </option>
                  <option data_countryCode="CZ" value="42">
                    Czech Republic (+42)
                  </option>
                  <option data_countryCode="DK" value="45">
                    Denmark (+45)
                  </option>
                  <option data_countryCode="DJ" value="253">
                    Djibouti (+253)
                  </option>
                  <option data_countryCode="DM" value="1809">
                    Dominica (+1809)
                  </option>
                  <option data_countryCode="DO" value="1809">
                    Dominican Republic (+1809)
                  </option>
                  <option data_countryCode="EC" value="593">
                    Ecuador (+593)
                  </option>
                  <option data_countryCode="EG" value="20">
                    Egypt (+20)
                  </option>
                  <option data_countryCode="SV" value="503">
                    El Salvador (+503)
                  </option>
                  <option data_countryCode="GQ" value="240">
                    Equatorial Guinea (+240)
                  </option>
                  <option data_countryCode="ER" value="291">
                    Eritrea (+291)
                  </option>
                  <option data_countryCode="EE" value="372">
                    Estonia (+372)
                  </option>
                  <option data_countryCode="ET" value="251">
                    Ethiopia (+251)
                  </option>
                  <option data_countryCode="FK" value="500">
                    Falkland Islands (+500)
                  </option>
                  <option data_countryCode="FO" value="298">
                    Faroe Islands (+298)
                  </option>
                  <option data_countryCode="FJ" value="679">
                    Fiji (+679)
                  </option>
                  <option data_countryCode="FI" value="358">
                    Finland (+358)
                  </option>
                  <option data_countryCode="FR" value="33">
                    France (+33)
                  </option>
                  <option data_countryCode="GF" value="594">
                    French Guiana (+594)
                  </option>
                  <option data_countryCode="PF" value="689">
                    French Polynesia (+689)
                  </option>
                  <option data_countryCode="GA" value="241">
                    Gabon (+241)
                  </option>
                  <option data_countryCode="GM" value="220">
                    Gambia (+220)
                  </option>
                  <option data_countryCode="GE" value="7880">
                    Georgia (+7880)
                  </option>
                  <option data_countryCode="DE" value="49">
                    Germany (+49)
                  </option>
                  <option data_countryCode="GH" value="233">
                    Ghana (+233)
                  </option>
                  <option data_countryCode="GI" value="350">
                    Gibraltar (+350)
                  </option>
                  <option data_countryCode="GR" value="30">
                    Greece (+30)
                  </option>
                  <option data_countryCode="GL" value="299">
                    Greenland (+299)
                  </option>
                  <option data_countryCode="GD" value="1473">
                    Grenada (+1473)
                  </option>
                  <option data_countryCode="GP" value="590">
                    Guadeloupe (+590)
                  </option>
                  <option data_countryCode="GU" value="671">
                    Guam (+671)
                  </option>
                  <option data_countryCode="GT" value="502">
                    Guatemala (+502)
                  </option>
                  <option data_countryCode="GN" value="224">
                    Guinea (+224)
                  </option>
                  <option data_countryCode="GW" value="245">
                    Guinea - Bissau (+245)
                  </option>
                  <option data_countryCode="GY" value="592">
                    Guyana (+592)
                  </option>
                  <option data_countryCode="HT" value="509">
                    Haiti (+509)
                  </option>
                  <option data_countryCode="HN" value="504">
                    Honduras (+504)
                  </option>
                  <option data_countryCode="HK" value="852">
                    Hong Kong (+852)
                  </option>
                  <option data_countryCode="HU" value="36">
                    Hungary (+36)
                  </option>
                  <option data_countryCode="IS" value="354">
                    Iceland (+354)
                  </option>

                  <option data_countryCode="ID" value="62">
                    Indonesia (+62)
                  </option>
                  <option data_countryCode="IR" value="98">
                    Iran (+98)
                  </option>
                  <option data_countryCode="IQ" value="964">
                    Iraq (+964)
                  </option>
                  <option data_countryCode="IE" value="353">
                    Ireland (+353)
                  </option>
                  <option data_countryCode="IL" value="972">
                    Israel (+972)
                  </option>
                  <option data_countryCode="IT" value="39">
                    Italy (+39)
                  </option>
                  <option data_countryCode="JM" value="1876">
                    Jamaica (+1876)
                  </option>
                  <option data_countryCode="JP" value="81">
                    Japan (+81)
                  </option>
                  <option data_countryCode="JO" value="962">
                    Jordan (+962)
                  </option>
                  <option data_countryCode="KZ" value="7">
                    Kazakhstan (+7)
                  </option>
                  <option data_countryCode="KE" value="254">
                    Kenya (+254)
                  </option>
                  <option data_countryCode="KI" value="686">
                    Kiribati (+686)
                  </option>
                  <option data_countryCode="KP" value="850">
                    Korea North (+850)
                  </option>
                  <option data_countryCode="KR" value="82">
                    Korea South (+82)
                  </option>
                  <option data_countryCode="KW" value="965">
                    Kuwait (+965)
                  </option>
                  <option data_countryCode="KG" value="996">
                    Kyrgyzstan (+996)
                  </option>
                  <option data_countryCode="LA" value="856">
                    Laos (+856)
                  </option>
                  <option data_countryCode="LV" value="371">
                    Latvia (+371)
                  </option>
                  <option data_countryCode="LB" value="961">
                    Lebanon (+961)
                  </option>
                  <option data_countryCode="LS" value="266">
                    Lesotho (+266)
                  </option>
                  <option data_countryCode="LR" value="231">
                    Liberia (+231)
                  </option>
                  <option data_countryCode="LY" value="218">
                    Libya (+218)
                  </option>
                  <option data_countryCode="LI" value="417">
                    Liechtenstein (+417)
                  </option>
                  <option data_countryCode="LT" value="370">
                    Lithuania (+370)
                  </option>
                  <option data_countryCode="LU" value="352">
                    Luxembourg (+352)
                  </option>
                  <option data_countryCode="MO" value="853">
                    Macao (+853)
                  </option>
                  <option data_countryCode="MK" value="389">
                    Macedonia (+389)
                  </option>
                  <option data_countryCode="MG" value="261">
                    Madagascar (+261)
                  </option>
                  <option data_countryCode="MW" value="265">
                    Malawi (+265)
                  </option>
                  <option data_countryCode="MY" value="60">
                    Malaysia (+60)
                  </option>
                  <option data_countryCode="MV" value="960">
                    Maldives (+960)
                  </option>
                  <option data_countryCode="ML" value="223">
                    Mali (+223)
                  </option>
                  <option data_countryCode="MT" value="356">
                    Malta (+356)
                  </option>
                  <option data_countryCode="MH" value="692">
                    Marshall Islands (+692)
                  </option>
                  <option data_countryCode="MQ" value="596">
                    Martinique (+596)
                  </option>
                  <option data_countryCode="MR" value="222">
                    Mauritania (+222)
                  </option>
                  <option data_countryCode="YT" value="269">
                    Mayotte (+269)
                  </option>
                  <option data_countryCode="MX" value="52">
                    Mexico (+52)
                  </option>
                  <option data_countryCode="FM" value="691">
                    Micronesia (+691)
                  </option>
                  <option data_countryCode="MD" value="373">
                    Moldova (+373)
                  </option>
                  <option data_countryCode="MC" value="377">
                    Monaco (+377)
                  </option>
                  <option data_countryCode="MN" value="976">
                    Mongolia (+976)
                  </option>
                  <option data_countryCode="MS" value="1664">
                    Montserrat (+1664)
                  </option>
                  <option data_countryCode="MA" value="212">
                    Morocco (+212)
                  </option>
                  <option data_countryCode="MZ" value="258">
                    Mozambique (+258)
                  </option>
                  <option data_countryCode="MN" value="95">
                    Myanmar (+95)
                  </option>
                  <option data_countryCode="NA" value="264">
                    Namibia (+264)
                  </option>
                  <option data_countryCode="NR" value="674">
                    Nauru (+674)
                  </option>
                  <option data_countryCode="NP" value="977">
                    Nepal (+977)
                  </option>
                  <option data_countryCode="NL" value="31">
                    Netherlands (+31)
                  </option>
                  <option data_countryCode="NC" value="687">
                    New Caledonia (+687)
                  </option>
                  <option data_countryCode="NZ" value="64">
                    New Zealand (+64)
                  </option>
                  <option data_countryCode="NI" value="505">
                    Nicaragua (+505)
                  </option>
                  <option data_countryCode="NE" value="227">
                    Niger (+227)
                  </option>
                  <option data_countryCode="NG" value="234">
                    Nigeria (+234)
                  </option>
                  <option data_countryCode="NU" value="683">
                    Niue (+683)
                  </option>
                  <option data_countryCode="NF" value="672">
                    Norfolk Islands (+672)
                  </option>
                  <option data_countryCode="NP" value="670">
                    Northern Marianas (+670)
                  </option>
                  <option data_countryCode="NO" value="47">
                    Norway (+47)
                  </option>
                  <option data_countryCode="OM" value="968">
                    Oman (+968)
                  </option>
                  <option data_countryCode="PW" value="680">
                    Palau (+680)
                  </option>
                  <option data_countryCode="PA" value="507">
                    Panama (+507)
                  </option>
                  <option data_countryCode="PG" value="675">
                    Papua New Guinea (+675)
                  </option>
                  <option data_countryCode="PY" value="595">
                    Paraguay (+595)
                  </option>
                  <option data_countryCode="PE" value="51">
                    Peru (+51)
                  </option>
                  <option data_countryCode="PH" value="63">
                    Philippines (+63)
                  </option>
                  <option data_countryCode="PL" value="48">
                    Poland (+48)
                  </option>
                  <option data_countryCode="PT" value="351">
                    Portugal (+351)
                  </option>
                  <option data_countryCode="PR" value="1787">
                    Puerto Rico (+1787)
                  </option>
                  <option data_countryCode="QA" value="974">
                    Qatar (+974)
                  </option>
                  <option data_countryCode="RE" value="262">
                    Reunion (+262)
                  </option>
                  <option data_countryCode="RO" value="40">
                    Romania (+40)
                  </option>
                  <option data_countryCode="RU" value="7">
                    Russia (+7)
                  </option>
                  <option data_countryCode="RW" value="250">
                    Rwanda (+250)
                  </option>
                  <option data_countryCode="SM" value="378">
                    San Marino (+378)
                  </option>
                  <option data_countryCode="ST" value="239">
                    Sao Tome &amp; Principe (+239)
                  </option>
                  <option data_countryCode="SA" value="966">
                    Saudi Arabia (+966)
                  </option>
                  <option data_countryCode="SN" value="221">
                    Senegal (+221)
                  </option>
                  <option data_countryCode="CS" value="381">
                    Serbia (+381)
                  </option>
                  <option data_countryCode="SC" value="248">
                    Seychelles (+248)
                  </option>
                  <option data_countryCode="SL" value="232">
                    Sierra Leone (+232)
                  </option>
                  <option data_countryCode="SG" value="65">
                    Singapore (+65)
                  </option>
                  <option data_countryCode="SK" value="421">
                    Slovak Republic (+421)
                  </option>
                  <option data_countryCode="SI" value="386">
                    Slovenia (+386)
                  </option>
                  <option data_countryCode="SB" value="677">
                    Solomon Islands (+677)
                  </option>
                  <option data_countryCode="SO" value="252">
                    Somalia (+252)
                  </option>
                  <option data_countryCode="ZA" value="27">
                    South Africa (+27)
                  </option>
                  <option data_countryCode="ES" value="34">
                    Spain (+34)
                  </option>
                  <option data_countryCode="LK" value="94">
                    Sri Lanka (+94)
                  </option>
                  <option data_countryCode="SH" value="290">
                    St. Helena (+290)
                  </option>
                  <option data_countryCode="KN" value="1869">
                    St. Kitts (+1869)
                  </option>
                  <option data_countryCode="SC" value="1758">
                    St. Lucia (+1758)
                  </option>
                  <option data_countryCode="SD" value="249">
                    Sudan (+249)
                  </option>
                  <option data_countryCode="SR" value="597">
                    Suriname (+597)
                  </option>
                  <option data_countryCode="SZ" value="268">
                    Swaziland (+268)
                  </option>
                  <option data_countryCode="SE" value="46">
                    Sweden (+46)
                  </option>
                  <option data_countryCode="CH" value="41">
                    Switzerland (+41)
                  </option>
                  <option data_countryCode="SI" value="963">
                    Syria (+963)
                  </option>
                  <option data_countryCode="TW" value="886">
                    Taiwan (+886)
                  </option>
                  <option data_countryCode="TJ" value="7">
                    Tajikstan (+7)
                  </option>
                  <option data_countryCode="TH" value="66">
                    Thailand (+66)
                  </option>
                  <option data_countryCode="TG" value="228">
                    Togo (+228)
                  </option>
                  <option data_countryCode="TO" value="676">
                    Tonga (+676)
                  </option>
                  <option data_countryCode="TT" value="1868">
                    Trinidad &amp; Tobago (+1868)
                  </option>
                  <option data_countryCode="TN" value="216">
                    Tunisia (+216)
                  </option>
                  <option data_countryCode="TR" value="90">
                    Turkey (+90)
                  </option>
                  <option data_countryCode="TM" value="7">
                    Turkmenistan (+7)
                  </option>
                  <option data_countryCode="TM" value="993">
                    Turkmenistan (+993)
                  </option>
                  <option data_countryCode="TC" value="1649">
                    Turks &amp; Caicos Islands (+1649)
                  </option>
                  <option data_countryCode="TV" value="688">
                    Tuvalu (+688)
                  </option>
                  <option data_countryCode="UG" value="256">
                    Uganda (+256)
                  </option>

                  <option data_countryCode="UA" value="380">
                    Ukraine (+380)
                  </option>
                  <option data_countryCode="AE" value="971">
                    United Arab Emirates (+971)
                  </option>
                  <option data_countryCode="UY" value="598">
                    Uruguay (+598)
                  </option>
                  <option data_countryCode="US" value="1">
                    USA (+1)
                  </option>
                  <option data_countryCode="UZ" value="7">
                    Uzbekistan (+7)
                  </option>
                  <option data_countryCode="VU" value="678">
                    Vanuatu (+678)
                  </option>
                  <option data_countryCode="VA" value="379">
                    Vatican City (+379)
                  </option>
                  <option data_countryCode="VE" value="58">
                    Venezuela (+58)
                  </option>
                  <option data_countryCode="VN" value="84">
                    Vietnam (+84)
                  </option>
                  <option data_countryCode="VG" value="84">
                    Virgin Islands - British (+1284)
                  </option>
                  <option data_countryCode="VI" value="84">
                    Virgin Islands - US (+1340)
                  </option>
                  <option data_countryCode="WF" value="681">
                    Wallis &amp; Futuna (+681)
                  </option>
                  <option data_countryCode="YE" value="969">
                    Yemen (North)(+969)
                  </option>
                  <option data_countryCode="YE" value="967">
                    Yemen (South)(+967)
                  </option>
                  <option data_countryCode="ZM" value="260">
                    Zambia (+260)
                  </option>
                  <option data_countryCode="ZW" value="263">
                    Zimbabwe (+263)
                  </option>
                </optgroup>
              </select>
            </div> */}

            <input
              type="tel"
              className="form-input mobile-no"
              placeholder="Mobile No."
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
          <div className="form-row style-mx">
            <input
              type="email"
              className="form-input"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row style-mx">
            <input
              type="password"
              className="form-input "
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-row style-mx">
            <input
              type="password"
              className="form-input"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* <div className="form-row style-mx" style={{ display: "flex" }}>
            <div className="col-md-5">
              <span className="checkbox-label font-style">Select currency</span>
            </div>
            <div className="col-md-6">
              <select
                value={selectedCurrency}
                onChange={(event) => {
                  setSelectedCurrency(event.target.value);
                }}
                style={{ width: "100%" }}
                className="country-co"
              >
                {currencyOptions.map((currency, index) => (
                  <option key={index} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div> */}
          <div className="form-row style-mx">
            <span className="checkbox-label font-style">
              Select finacial year type:
            </span>
            <div style={{ display: "flex" }}>
              <input
                type="radio"
                name="fyear"
                value="0"
                onChange={(e) => {
                  setfinacial_year(e.target.value);
                }}
                selected={finacial_year === "0"}
              />
              <label for="fyear" style={{ marginLeft: "10px" }}>
                Jan - Dec
              </label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="radio"
                name="fyear"
                value="1"
                onChange={(e) => {
                  setfinacial_year(e.target.value);
                }}
                selected={finacial_year === "1"}
              />
              <label for="fyear" style={{ marginLeft: "10px" }}>
                Apr - March
              </label>
            </div>
          </div>
          <div className="form-row style-mx">
            <div className="checkbox form-check">
              <input
                type="checkbox"
                className="form-check-input"
                onClick={(e) => {
                  settandcAggredd(!tandcAggredd);
                }}
              />
              <label className="form-check-label">
                <span className="checkbox-label font-style">
                  I agree to Journal my trade
                  <Link to="/Terms">
                    {" "}
                    <span className="signup-checkbox-link font-style">
                      {" "}
                      Terms of use &
                    </span>
                  </Link>{" "}
                  <Link to="/Privacy">
                    <span className="signup-checkbox-link font-style">
                      {" "}
                      Privacy Policy
                    </span>
                  </Link>
                </span>
              </label>
            </div>
          </div>

          <div className="form-row">
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
