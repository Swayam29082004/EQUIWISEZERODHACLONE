import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Main Logo and Copyright Section */}
          <div className="col-4">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="Company Logo"
            />
            <p>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>

          {/* Company Links Section */}
          <div className="col-2">
            <p>Company</p>
            <a href="/" style={linkStyle}>About</a><br />
            <a href="/" style={linkStyle}>Products</a><br />
            <a href="/" style={linkStyle}>Referral programs</a><br />
            <a href="/" style={linkStyle}>Careers</a><br />
            <a href="/" style={linkStyle}>Press & Media</a><br />
            <a href="/" style={linkStyle}>Zerodha Cares (CSR)</a><br />
          </div>

          {/* Support Links Section */}
          <div className="col-2">
            <p>Support</p>
            <a href="/" style={linkStyle}>Contact us</a><br />
            <a href="/" style={linkStyle}>Support portal</a><br />
            <a href="/" style={linkStyle}>How to file a complaint?</a><br />
            <a href="/" style={linkStyle}>Status of your complaints</a><br />
            <a href="/" style={linkStyle}>Bulletin</a><br />
            <a href="/" style={linkStyle}>Circular</a><br />
            <a href="/" style={linkStyle}>Z-Connect blog</a><br />
            <a href="/" style={linkStyle}>Downloads</a><br />
          </div>

          {/* Account Links Section */}
          <div className="col-4">
            <p>Account</p>
            <a href="/" style={linkStyle}>Open demat account</a><br />
            <a href="/" style={linkStyle}>Minor demat account</a><br />
            <a href="/" style={linkStyle}>NRI demat account</a><br />
            <a href="/" style={linkStyle}>Commodity</a><br />
            <a href="/" style={linkStyle}>Dematerialisation</a><br />
            <a href="/" style={linkStyle}>Fund transfer</a><br />
            <a href="/" style={linkStyle}>MTF</a><br />
          </div>
        </div>

        {/* Legal and Regulatory Text Section */}
        <div className="mt-3 text-small text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF{" "}
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

          <div className="mt-3 mb-3" style={{ textAlign: "center" }}>
            <a href="/" style={linkStyle}>NSE</a> |{" "}
            <a href="/" style={linkStyle}>BSE</a> |{" "}
            <a href="/" style={linkStyle}>MCX</a> |{" "}
            <a href="/" style={linkStyle}>Terms & conditions</a> |{" "}
            <a href="/" style={linkStyle}>Policies & procedures</a> |{" "}
            <a href="/" style={linkStyle}>Privacy policy</a> |{" "}
            <a href="/" style={linkStyle}>Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "rgba(112, 107, 107, 1)",
};

export default Footer;
