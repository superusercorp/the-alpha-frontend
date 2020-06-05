import React, { useState, useEffect } from 'react';
import {
    Link,
    useLocation,
} from "react-router-dom";
import Ads from "../Ads/Ads.js"
import parse from 'html-react-parser';

function Categories() {
    let location = useLocation()
    let cat = location.pathname.toString().split('/')[2]
    const [response, setResponse] = useState([]);
    let mapStr = "";

    useEffect(() => {
        console.log('New path: ', cat);
        fetch('https://us-central1-thealphaposts.cloudfunctions.net/getCategory?category=' + cat)
            .then(res => res.json())
            .then(res => {
                setResponse(res)
            })
    }, [location.pathname]);

    function article(indexx) {
        if (response !== undefined) {
            return response[indexx]
        }
    }

    function getTitle(indexx) {
        if (response[indexx] !== undefined) {
            console.log("title is " + JSON.stringify(response[indexx]))
            let title = response[indexx].title
            return title;
        }
    }

    function spaceToDash(strInput) {
        if (strInput != undefined) {
            const str = strInput.title
            return str.replace(/\s+/g, '-').toLowerCase();
        }
    }

    function getImage(indexx) {
        let imageSrc = ""
        if (article(indexx) != undefined && article(indexx).file != undefined && article(indexx).file.src != undefined) {
            return article(indexx).file.src
        }
        return imageSrc = "../img/post-2.jpg"
    }

    // function cleanString (item) {
    //     JSON.stringify(parse(mapStr).map((val, i, arr) => {
    //         if (val.props !== null || 'undefined' && val.props.children !== null || 'undefined') {
    //             mapStr += val.props.children != 'undefined' ? val.props.children : "";
    //             return mapStr;
    //         }
    //     }));
    // }

    function getStartingText(item) {
        if (item != undefined && item.body != undefined && item.body != "") {
            let cleanStr = item.body.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, "")
            return cleanStr.slice(0, 30)
        }
        return "A great story to read if you have the time.  We are always pleased with you as a reader!"
    }

    function getColorIndex(indexx) {
        if (indexx !== undefined && article(indexx) !== undefined) {
            let cat = article(indexx).category
            let catArr = ['popular', 'cases', 'exonerations', 'judges', 'attorneys',]
            return catArr.indexOf(cat)
        }
    }

    function formatDate(indexx) {
        if (indexx !== undefined && article(indexx) !== undefined) {
            let monthArr = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
            var date = new Date(article(indexx).createdate);
            if (!isNaN(date.getTime())) {
                // Months use 0 index.
                let parts = article(indexx).createdate.split('-');
                let days = parts[2].toString()
                let daysStr = days.substr(0, 2)
                let strIndex = parts[1].substr(1, 1)
                let month = monthArr[strIndex]
                return month + ' ' + daysStr + ',' + parts[0];
            }
        }
    }

    return (
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="post post-thumb">
                                    <Link to={{ pathname: '/story/' + spaceToDash(article(0)), state: article(0) }}>
                                        <a class="post-img" href=""><img src={getImage(0)} alt=""></img></a>
                                    </Link>

                                    <div class="post-body">
                                        <div class="post-meta">
                                            <a class={"post-category cat-" + getColorIndex(0)} href="#">{article(0) && article(0).category}</a>
                                            <span class="post-date">{formatDate(0)}</span>
                                        </div>
                                        <h3 class="post-title">
                                                <Link to={{ pathname: '/story/' + spaceToDash(article(0)), state: article(0) }}>
                                                    {getTitle(0)}
                                                </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {response && response.length > 6 && response.slice(1, 3).map((item, index) => (
                                <div class="col-md-6">
                                    <div class="post">
                                        <Link to={{ pathname: '/story/' + spaceToDash(item), state: { item } }}>
                                            <a class="post-img" href=""><img src={getImage(index + 1)} alt=""></img></a>
                                        </Link>
                                        <div class="post-body">
                                            <div class="post-meta">
                                                <a class={"post-category cat-" + getColorIndex(index + 1)} href="#">{item.category}</a>
                                                <span class="post-date">{formatDate(index + 1)}</span>
                                            </div>
                                            <h3 class="post-title">
                                                    <Link to={{ pathname: '/story/' + spaceToDash(item), state: item }}>
                                                        {item.title}
                                                    </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div class="clearfix visible-md visible-lg"></div>

                            <div class="col-md-12">
                                <div class="section-row">
                                    <a href="#">
                                        <img class="img-responsive center-block" src="./../img/ad-2.jpg" alt="" />
                                    </a>
                                </div>
                            </div>

                            {response && response.length > 6 && response.slice(3, 6).map((item, index) => (
                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <Link to={{ pathname: '/story/' + spaceToDash(item), state: { item } }}>
                                            <a class="post-img" href=""><img src={getImage(index + 3)} alt=""></img></a>
                                        </Link>
                                        <div class="post-body">
                                            <div class="post-meta">
                                                <a class={"post-category cat-" + getColorIndex(index + 3)} href="#">{item.category}</a>
                                                <span class="post-date">{formatDate(index + 3)}</span>
                                            </div>
                                            <h3 class="post-title">
                                                    <Link to={{ pathname: '/story/' + spaceToDash(item), state: item }}>
                                                        {item.title}
                                                    </Link>
                                            </h3>
                                            <p>{getStartingText(item)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div class="col-md-12">
                                <div class="section-row">
                                    {/* <button class="primary-button center-block">Load More</button> */}
                                </div>
                            </div>
                        </div>
                      
                    </div>
                    <Ads /> 
                </div>
            </div>
        </div>
    );
}

export default Categories; 