import * as React from "react";
import { Route, Switch, Link } from 'react-router-dom'

class AppHeader extends React.Component {
  render() {
    const { category } = "osadf"

    return (

      <header id="header">
        <div id="nav">
          <div id="nav-fixed">
            <div class="container">
              <div class="nav-logo">
                <a href="index.html" class="logo"><img src="/img/logo.png" alt=""></img></a>
              </div>

              <ul class="nav-menu nav navbar-nav">
                <li><a href="category.html">News</a></li>
                <li><a href="category.html">Popular</a></li>
                <li class="cat-1">
                  <Link to={{ pathname: '/category/cases', state: "cases" }}>
                    Cases
                      </Link>
                </li>
                <li class="cat-2">
                  <Link to={{ pathname: '/category/exonerations', state: "exonerations" }}>
                    Exonerations
                      </Link>
                </li>
                <li class="cat-3">
                  <Link to={{ pathname: '/category/judges', state: "judges" }}>
                    Judges
                      </Link>
                </li>
                <li class="cat-4">
                  <Link to={{ pathname: '/category/attorneys', state: "attorneys" }}>
                    Attorneys
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
        </div>

      </header >

    );
  }
}

export default AppHeader;