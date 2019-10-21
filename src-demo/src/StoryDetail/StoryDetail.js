import * as React from "react";
import ReactHtmlParser from 'react-html-parser';
import Ads from "../Ads/Ads.js"
import { TwitterShareButton, FacebookShareButton, EmailShareButton, TwitterIcon, FacebookIcon, EmailIcon, FacebookShareCount } from 'react-share';
import { Facebook, Twitter } from 'react-sharingbuttons'
import {
    useLocation,
} from "react-router-dom";

const StoryDetail = (props) => {
    const title = props.location.state.title
    const body = props.location.state.title
    const htmlBody = ReactHtmlParser(body);
    let location = window.location.href
    return (
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="section-row sticky-container">
                            <div class="main-post">
                                <h1>{title}</h1>
                                <h3>{htmlBody}</h3>
                            </div>
                            <div class="post-shares sticky-shares">
                                {/* <a href="#" class="share-facebook"> */}
                                    {/* <i class="fa fa-facebook"></i> */}
                                <FacebookIcon url={location} quote={title} size={32} round={true} />
                                <Facebook url={location} shareText={title} />
                                <p></p>
                                    {/* </a>  */}
                                <a href="#" class="share-twitter">
                                    {/* <i class="fa fa-twitter"></i> */}
                                <TwitterShareButton  quote={title} className="fa fa-twitte" url={location} size={32} round={true} />
                                <TwitterIcon  quote={title} className="fa fa-twitte" url={location} size={32} round={true} />
                                </a>
                                <a href="#">
                                    {/* <i class="fa fa-envelope"></i> */}
                                <EmailShareButton  quote={title} className="fa fa-twitte" url={location} size={32} round={true} />
                                <EmailIcon  quote={title} className="fa fa-twitte" url={location} size={32} round={true} />
                                </a>
                            </div>
                        </div>
                        <Ads/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryDetail; 
