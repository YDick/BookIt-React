import React from "react";
import "./footer.css"

export default function Footer()  {

    return(
        <React.Fragment>
            <footer className="site-footer">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                        <h6>Contact</h6>
                        <ul className="footer-links">
                            <li>TheBookItApp@gmail.com</li>
                        </ul>
                        </div>
            
                        <div className="col-xs-6 col-md-3">

                        </div>
            
                        <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="/aboutus/">About Us</a></li>
                            <li><a href="/home/">Home</a></li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Designed by Yehudis Dick, Yudi Rosenzwieg and Larisa Granat
                        </p>
                        </div>
            
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        {/* <ul className="social-icons">
                            <li><a class="dribbble" href="https://www.instagram.com/ashreinutoronto/?hl=en" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            <li><a class="linkedin" href="https://www.instagram.com/ashreinutoronto/?hl=en"><i class="fa fa-linkedin"></i></a></li>   
                        </ul> */}
                        </div>
                    </div>
                    </div>
            </footer>
        </React.Fragment>
    );
}