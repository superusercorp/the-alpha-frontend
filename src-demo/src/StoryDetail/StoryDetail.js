import * as React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import parse from 'html-react-parser';
import Ads from "../Ads/Ads.js"
import { TwitterShareButton, FacebookShareButton, EmailShareButton, TwitterIcon, FacebookIcon, EmailIcon, FacebookShareCount } from 'react-share';
// import { Facebook, Twitter } from 'react-sharingbuttons'
import {
    useLocation,
} from "react-router-dom";

function createMarkup(html) {
    console.log(html)
    return { __html: html.split("").join("") };
}

const StoryDetail = (props) => {
    const title = props.location.state.title
    const tagline = props.location.state.tagline
    const body = props.location.state.body
    const image = props.location.state.file ? props.location.state.file.src : props.location.state.title
    let mapStr = "";
    let imageLocation = '../img/post-page.jpg'
    let styleStr = "background-image: url('./img/post-page.jpg');"

    JSON.stringify(parse(body).map((val, i, arr) => {
        if (val.props !== null || 'undefined' && val.props.children !== null || 'undefined') {
            mapStr += val.props.children != 'undefined' ? val.props.children : "";
            return val.props.children
        }
    }));

    return (
        <div>
            <div id="post-header" class="page-header">
                <div class="background-img" style={{ backgroundImage: `url(${imageLocation})` }}>
                        {/* <div class="container">
                        <div class="row">
                            <div class="col-md-10">
                                <div class="post-meta">
                                    <a class="post-category cat-2" href="category.html">Judges</a>
                                    <span class="post-date">March 27, 2019</span>
                                </div>
                                <h1>Judge Sentenced for Obstruction of Justice</h1>
                            </div>
                        </div> 
                    </div> */}
                </div>
            </div>



            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="section-row sticky-container">
                                <div class="main-post">
                                    <h1>{title}</h1>
                                    <figure class="figure-img">
                                        <img class="img-responsive" src={image} alt="" height="800px" width="850px"></img>
                                        <figcaption>{tagline}</figcaption>
                                    </figure>
                                    {parse(mapStr)}
                                </div>
                                <div class="post-shares sticky-shares">
                                    <a href={"https://www.facebook.com/sharer/sharer.php?u=jetpackdaily.com" + '/story/' + title} target="_blank" class="share-facebook"><i class="fa fa-facebook" ></i></a>
                                    <a href={"https://twitter.com/share?url=http://www.jetpackdaily.com" + "/story/" + title + "&text=A JetPackDaily Story To Read!" + " " + title} target="_blank" class="share-twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this article http://www.jetpackdaily.com." title="Share by Email" target="_blank"><i class="fa fa-envelope"></i></a>
                                </div>
                            </div>
                            <Ads />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryDetail; 
