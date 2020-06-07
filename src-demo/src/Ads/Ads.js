import React, { useState, useEffect } from 'react';
import { store, useStore } from '../hookstore';
import {
	Link,
} from "react-router-dom";

store.state = 0;

function spaceToDash(strInput) {
    if (strInput != undefined) {
        const str = strInput.title
        return str.replace(/\s+/g, '-').toLowerCase();
    }
}

function tagOrTitle(item) {
    let str = "" 
    if (item.tagline != undefined && item.tagline != "") {
        str = item.tagline; 
        return str; 
     }
    if (item.title != undefined && item.title != "") {
       str = item.title;
       return str;
    }
}

function getImage(item) {
    let imageSrc = ""
    if (item != undefined && item.file != undefined && item.file.src != undefined) {
        return item.file.src
    }
    return imageSrc = "../img/widget-1.jpg"
}

function Ads() {

    let paddingTopBig = {
        paddingTop: '80px',
    }

    let adStyleStr = {
        display: 'inline-block',
        margin: 'auto',
    }

    const [globalResponse, setGlobalResponse] = useStore()
    // let isFresh = globalResponse > 4 ? false : true

    useEffect(() => {
        fetch('https://us-central1-thealphaposts.cloudfunctions.net/getLatestPosts')
            .then(res => res.json())
            .then(res => {
                setGlobalResponse(res)
            })
    }, []);

    return (
        <div class="col-md-4">
            <div>
                <div class="aside-widget text-center" style={paddingTopBig}>
                    <a href="#" style={adStyleStr}>
                        <img class="img-responsive" src="../img/ad-1.jpg" alt="" />
                    </a>
                </div>
                <div class="aside-widget">
                    <div class="section-title">
                        <h2>New Stories</h2>
                    </div>
                    {globalResponse && globalResponse.length > 6 && globalResponse.slice(0, 3).map((item, index) => (
                        <div class="post post-widget">
                            <a class="post-img" href="blog-post.html"><img src={getImage(index)} height="90" width="160" alt="" /></a>
                            <div class="post-body">
                                <h3 class="post-title"> 
                                    <Link to={{ pathname: '/story/' + spaceToDash(item), state: item }}>
													{tagOrTitle(item)}
									 </Link></h3>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default Ads; 
