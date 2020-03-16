import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import fetchJsonp from 'fetch-jsonp';

function AppFooter() {

    let newsLetter = document.getElementById("newsletter");
    const [isSending, setIsSending] = useState(false)
    const [emailField, setEmailField] = useState('')

    function keyPressed(event) {
        if (event.key === "Enter") {
            setIsSending(true)
        }
      }

    // function submitEmail()  {
    //     console.log("we were able to click " + isSending)
    //     if(emailField != "") {
    //         fetch("https://us-central1-thealphaposts.cloudfunctions.net/persistemail", options)
	// 		.then(res => res.json())
	// 		.then(res => {
    //             console.log("did we add a newsletter user? " + res)
    //             setIsSending(false)
    //         })
    //         .catch(error => console.log("the error response is " + error))
    //     }

    //     window.location.replace("http://jetpackdaily.com");

    // }

    const email = {
        "email": "work1@work1.com"
    }

    const options = {
		method: 'POST',
		body: JSON.stringify({
            email: emailField
        })
    }
    
    useEffect(() => {
        if(emailField != "" && emailField != undefined) {
            console.log("are we sending " + isSending)
            console.log("email field is " + emailField)
            fetch("https://us-central1-thealphaposts.cloudfunctions.net/persistemail", options)
			.then(res => res.json())
			.then(res => {
                console.log("did we add a newsletter user? " + res)
                setIsSending(false)
            })
            .catch(error => console.log("the error response is " + error))
        }
	},[isSending]);

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
                                        <input onKeyPress={keyPressed} onChange={event => setEmailField(event.target.value)} id="newsletter" class="input" type="email" name="newsletter" placeholder="Enter your email"></input>
                                        <button class="newsletter-btn"><i class="fa fa-paper-plane"></i></button>
                                    </form>
                                </div>
                                <ul class="footer-social">
                                    <li><a href="https://www.facebook.com/sharer/sharer.php?u=jetpackdaily.com"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/share?url=http://www.jetpackdaily.com"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

        );
    }

export default AppFooter;