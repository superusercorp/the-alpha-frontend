import React, { useState, useEffect } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import parse from 'html-react-parser';
import Ads from "../Ads/Ads.js"
import { TwitterShareButton, FacebookShareButton, EmailShareButton, TwitterIcon, FacebookIcon, EmailIcon, FacebookShareCount } from 'react-share';
// import { Facebook, Twitter } from 'react-sharingbuttons'
import {
    useLocation,
    useParams
} from "react-router-dom";
import { blockParams } from "handlebars";
import { store, useStore } from '../hookstore';

function formatDate(createDate) {
    if (createDate !== undefined) {
        let monthArr = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
        var date = new Date(createDate);
        if (!isNaN(date.getTime())) {
            // Months use 0 index.
            let parts = createDate.split('-');
            let days = parts[2].toString()
            let daysStr = days.substr(0, 2)
            let strIndex = parts[1].substr(1, 1)
            let month = monthArr[strIndex]
            return month + ' ' + daysStr + ',' + parts[0];
        }
    }
}

function formatAuthor(author) {
    let auth = "";
    if (author !== undefined) {
        auth = author.match(/.*?(?=@|$)/i)
        if (auth == "fieldnation") {
            return auth = "Field Nation"
        }
        else if (auth == "anthonyzappin") {
            return auth = "Anthony Zappin"
        }
        else if (auth == "brockfredin") {
            return auth = "Brock Fredin"
        }
    }
    return auth;
}

const StoryDetail = (props) => {
    let storyTitle = useParams();
    let fullTitle = ""
	let location = useLocation()
    const [response, setResponse] = useState([]);
    const [ globalResponse ] = useStore([]);
    let isFreshRequest = false; 
    const testState = props.location.state ? props.location.state.title : isFreshRequest = true
    let title = props.location.state ? props.location.state.title : ""
    let createDate = props.location.state ? props.location.state.createdate : ""
    let category = props.location.state ? props.location.state.category : ""
    let tagline = props.location.state ? props.location.state.tagline : ""
    let body = props.location.state ? props.location.state.body : ""
    let author = props.location.state ? props.location.state.createdby : ""
    let image = ""
    let mapStr = "";
    let imageLocation = '../img/post-page.jpg'

    // if(props.location.state && props.location.state.file && props.location.state.file.src) {
    //     image = props.location.state.file.src;
    // }

    if(storyTitle.articleTitle) {
        fullTitle = storyTitle.articleTitle.split("-").join(" ")
    }

    console.log(isFreshRequest + " NASHVILE")

    if(isFreshRequest) {
        useEffect(() => {
            fetch('https://us-central1-thealphaposts.cloudfunctions.net/getArticle?title=' + fullTitle)
                .then(res => res.json())
                .then(res => {
                    setResponse(res)
                })
        }, [location.pathname]);
        setArticle()
    }

    function setArticle() {
        if(response[0] != undefined) {
            author = response[0].createdby
            tagline = response[0].tagline
            body = response[0].body
            createDate = response[0].createDate
            category = response[0].category
            title = response[0].title
        }
    }

    let styleStr = "background-image: url('./img/post-page.jpg');"
    let height = {
        height: '270px',
    }
    let paddingTop = {
        paddingTop: '50px',
    }
    let paddingBottom = {
        paddingBottom: '50px',
    }
    let backgroundImage = {
        backgroundImage: `url(${imageLocation})`
    }
    let h1PaddingTop = {
        paddingTop: '85px'
    }

    let rowPaddingTop = {
        paddingTop: '70px'
    }

    let zIndex = {
        position: 'relative',
        zIndex: '1'
    }

    let zIndex0 = {
        zIndex: '0'
    }

    let capitalize = {
        textTransform: 'capitalize'
    }

    function getColorIndex(category) {
            // let catArr = ['popular', 'cases', 'exonerations', 'judges', 'attorneys']
            let catArr = ['popular', 'law', 'technology',  'finance', 'pandemic']
            return catArr.indexOf(category)
    }

    if(body != undefined) {
        console.log("BODY IS " + body + "and length is " + body.length)
        JSON.stringify(parse(body).map((val, i, arr) => {
            if (val.props !== null || 'undefined' && val.props.children !== null || 'undefined') {
                mapStr += val.props.children != 'undefined' ? val.props.children : "";
                return mapStr;
            }
        }));
    }

    return (
        <div>
            <div id="post-header" class="page-header">
                <div class="background-img" style={{ ...backgroundImage, ...height, ...paddingTop, ...paddingBottom, ...zIndex0 }}>
                    <div class="container">
                        <div class="row" style={rowPaddingTop}>
                            <div class="col-md-10">
                                <div class="post-meta">
                                    <a class={"post-category cat-" + getColorIndex(category)} href="category.html" style={zIndex}>{category}</a>
                                    <span class="post-date" style={zIndex}>{formatDate(createDate)}</span>
                                </div>
                                <h1 class="post-title" style={zIndex}>{title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="section-row sticky-container">
                                <div class="main-post">
                                    <h3 style={{ ...h1PaddingTop, ...capitalize }}>{tagline}</h3>
                                    <h5 class="post-date">By {formatAuthor(author)}</h5>
                                    {parse(mapStr)}
                                </div>
                                <div class="post-shares sticky-shares" style={h1PaddingTop}>
                                    <a href={"https://www.facebook.com/sharer/sharer.php?u=jetpackdaily.com" + '/story/' + title} target="_blank" class="share-facebook"><i class="fa fa-facebook" ></i></a>
                                    <a href={"https://twitter.com/share?url=http://www.jetpackdaily.com" + "/story/" + title + "&text=A JetPackDaily Story To Read!" + " " + title} target="_blank" class="share-twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this article http://www.jetpackdaily.com." title="Share by Email" target="_blank"><i class="fa fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                       <Ads /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryDetail;

