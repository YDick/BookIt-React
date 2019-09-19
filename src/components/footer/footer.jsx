import React from "react";
import "./footer.css"

export default function Footer()  {

    return(
        <React.Fragment>
            <footer class="site-footer">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                        <h6>Contact</h6>
                        <ul class="footer-links">
                            <li>CampAshreinu123@gmail.com</li>
                            <li>416.787.1489</li>
                        </ul>
                        </div>
            
                        <div class="col-xs-6 col-md-3">

                        </div>
            
                        <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><a href="/aboutus/">About Us</a></li>
                            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    </div>
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Designed by Yehudis Dick
                        </p>
                        </div>
            
                        <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="social-icons">
                            <li><a class="dribbble" href="https://www.instagram.com/ashreinutoronto/?hl=en" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            <li><a class="linkedin" href="https://www.instagram.com/ashreinutoronto/?hl=en"><i class="fa fa-linkedin"></i></a></li>   
                        </ul>
                        </div>
                    </div>
                    </div>
            </footer>
        </React.Fragment>
    );
}