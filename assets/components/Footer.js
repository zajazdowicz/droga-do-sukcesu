import React from "react";


export default function Footer() {
  return (
    <footer
      className="bottom"
      style={{
        background: "#411530",
        color: "#ffffff",
        textAlign: "justify",
        bottom: 0,
        width: "100%",
        
        margin: 0,
        padding: 0,
        borderSize: "border-box"
      }}
    >

      <div className="container">
        <div className="row">
          <div className="col-md-4 col 12">
            <div>
              <span style={{ display: "inline-block", marginTop: 5 }}>
                Contact Us
              </span>

              <ul>
                <li>
                  <i className="fa fa-envelope"></i> info@3ieducation.com
                </li>
                <li>
                  <i className="fa fa-phone"></i> +91-7291007617
                </li>
                <li>
                  <i className="fa fa-map-marker"></i> FF 11 A, Sunrise Mall, Sector
                  11, Vasundhara, Ghaziabad Delhi NCR
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-12" style={{ marginTop: 10 }}>
            <h4 style={{ color: "lightgrey" }}>&nbsp;</h4>
          </div>
          <div className="col-md-4 col-12" style={{ marginTop: 10 }}>
            <h4 style={{ color: "lightgrey", textAlign: "justify" }}>
              {" "}
              Terms & Policies{" "}
            </h4>
            <nav className="Navfooter">
              <ul className="list-unstyled">
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="refund-policy.html">Refund Policy</a>
                </li>
                <li>
                  <a href="disclaimer-policy.html">Disclaimer Policy</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" col-12" style={{ fontSize: 14, color: "lightgrey" }}>
            &copy; {new Date().getFullYear()} ©Genex Learning Systems | All
            Rights Reserved
            <i
              className="fa fa-facebook-official"
              aria-hidden="true"
              style={{ padding: 10, color: "white", float: "right" }}
            >
              {" "}
            </i>
            <i
              className="fa fa-twitter-square"
              aria-hidden="true"
              style={{ padding: 10, color: "white", float: "right" }}
            ></i>
            <i
              className="fa fa-github-square"
              aria-hidden="true"
              style={{ padding: 10, color: "white", float: "right" }}
            ></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
