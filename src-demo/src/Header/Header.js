import * as React from "react";
import { Link } from 'react-router-dom'
import { store, useStore } from '../hookstore';


function AppHeader() {

  const [globalResponse] = useStore()

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

  return (
    <header id="header">
      <div id="nav">
        <div id="nav-fixed">
          <div class="container">
            <div class="nav-logo">
              <Link to={{ pathname: '/' }}>
                <a class="logo"><img src="/img/logo4.png" alt=""></img></a>
              </Link>
            </div>
            <ul class="nav-menu nav navbar-nav">
            <li>  <Link to={{ pathname: '/category/news', state: "news" }}>
                News
                      </Link></li>
              <li>  <Link to={{ pathname: '/category/popular', state: "popular" }}>
                Popular
                      </Link></li>
              <li class="cat-1">
                <Link to={{ pathname: '/category/law', state: "law" }}>
                  Law
                      </Link>
              </li>
              <li class="cat-2" >
                <Link to={{ pathname: '/category/technology', state: "technology" }}>
                  Technology
                      </Link>
              </li>
              <li class="cat-3">
                <Link to={{ pathname: '/category/pandemic', state: "pandemic" }}>
                  Pandemic
                      </Link>
              </li>
              <li class="cat-4">
                <Link to={{ pathname: '/category/finance', state: "finance" }}>
                  Finance
                    </Link>
              </li>
            </ul>

            <div class="nav-btns">
              <button class="aside-btn"><i class="fa fa-bars"></i></button>
              <button class="search-btn"><i class="fa fa-search"></i></button>
              <div class="search-form">
                <input class="search-input" type="text" name="search" placeholder="Enter Your Search ..."></input>
                <button class="search-close"><i class="fa fa-times"></i></button>
              </div>
            </div>

          </div>
        </div>

        <div id="nav-aside">
          <div class="section-row">
            <ul class="nav-aside-menu">
              <li><a href="http://www.protestpress.com">Home</a></li>
              <li>  <Link to={{ pathname: '/about/' }}>
                About Protest Press
                                        </Link></li>
              <li>  <Link to={{ pathname: '/joinus/' }}>
                Join Us
                                        </Link></li>
              <li>  <Link to={{ pathname: '/advertisement/' }}>
                Advertisement
                                        </Link></li>
              <li>  <Link to={{ pathname: '/contact/' }}>
                Contact
                                        </Link></li>
            </ul>
          </div>
          <div class="section-row">
            <h3>Recent Articles</h3>
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
          <div class="section-row">
            <h3>Follow us</h3>
            <ul class="nav-aside-social">
              <li><a href="https://www.facebook.com/sharer/sharer.php?u=protestpress.com"><i class="fa fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/share?url=http://www.protestpress.com"><i class="fa fa-twitter"></i></a></li>
              <li><a href=""><i class="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
            </ul>
          </div>
          <button class="nav-aside-close"><i class="fa fa-times"></i></button>
        </div>
      </div>
    </header >
  );
}

export default AppHeader;