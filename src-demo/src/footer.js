import * as React from "react";
import { Link } from 'react-router-dom'

class AppFooter extends React.Component {
  render() {
    return (
    <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <a href="" class="logo"><img src="./img/logo.png" alt=""></img></a>
                        </div>
                        <ul class="footer-nav">
                        <li>        
                                        <Link to={{ pathname: '/pr/' }}>
                                           Privacy
                                        </Link>
                            </li>
                            <li>        
                                        <Link to={{ pathname: '/advertisement/' }}>
                                           Advertisement
                                        </Link>
                            </li>
                        </ul>
                        <div class="footer-copyright">
                            <span>&copy; 
Copyright &copy; <script>document.write(new Date().toDateString());</script> All rights reserved | This template is made with <i class="fa fa-thumbs-down" aria-hidden="true"></i> by <a href="https://www.youarepathetic.com" target="_blank">The Alpha</a>
</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="footer-widget">
                                <h3 class="footer-title">About Us</h3>
                                <ul class="footer-links">
                                    <li> 
                                        <Link to={{ pathname: '/about/' }}>
                                           About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={{ pathname: '/joinus/' }}>
                                           Join Us
                                        </Link></li>
                                    <li>
                                        <Link to={{ pathname: '/contact/' }}>
                                           Contact
                                        </Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="footer-widget">
                                <h3 class="footer-title">Catagories</h3>
                                <ul class="footer-links">
                                    <li>
                    <Link to={{ pathname: '/category/cases', state: "cases" }}>
                        Cases
                    </Link>

                                    </li>
                                    <li>
                    <Link to={{ pathname: '/category/judges', state: "judges" }}>
                         Judges
                    </Link>
                                    </li>
                                    <li>
                    <Link to={{ pathname: '/category/attorneys', state: "attorneys" }}>
                        Attorneys
                    </Link>

                                    </li>
                                    <li>
                    <Link to={{ pathname: '/category/exonerations', state: "exonerations" }}>
                        Exonerations
                    </Link>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="footer-widget">
                        <h3 class="footer-title">Join our Newsletter</h3>
                        <div class="footer-newsletter">
                            <form>
                                <input class="input" type="email" name="newsletter" placeholder="Enter your email"></input>
                                <button class="newsletter-btn"><i class="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                        <ul class="footer-social">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </footer>

    );
  }
}

export default AppFooter;