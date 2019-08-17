import * as React from "react";

class AppHeader extends React.Component {
    render() {
      return (
        <header id="header">
          <div id="nav">
            <div id="nav-fixed">
              <div class="container">
                <div class="nav-logo">
                  <a href="index.html" class="logo"><img src="/img/logo.png" alt=""></img></a>
                </div>
                <ul class="nav-menu nav navbar-nav">
                  <li class="cat-1"><a href="category.html">News</a></li>
                  <li class="cat-2"><a href="category.html">Popular</a></li>
                  <li class="cat-3"><a href="category.html">Cases</a></li>
                  <li class="cat-4" ><a href="category.html">Exonerations</a></li>
                  <li class="cat-5"><a href="category.html">Judges</a></li>
                  <li class="cat-6"><a href="attorneys.html">Attorneys</a></li>
                </ul>
                <div class="nav-btns">
                  <button class="aside-btn"><i class="fa fa-bars"></i></button>
                  <button class="search-btn"><i class="fa fa-search"></i></button>
                  <div class="search-form">
                    <input class="search-input" type="text" name="search" placeholder="Enter Your Search ..."></input>
                    <button class="search-close"><i class="fa fa-times"></i></button>
                  </div>
                </div>
  
                <div id="nav-aside">
                  <div class="section-row">
                    <ul class="nav-aside-menu">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="#">Join Us</a></li>
                      <li><a href="#">Advertisement</a></li>
                      <li><a href="contact.html">Contacts</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="section-row">
                <h3>Recent Articles</h3>
                <div class="post post-widget">
                  <a class="post-img" href="blog-post.html"><img src="./img/widget-2.jpg" alt=""></img></a>
                  <div class="post-body">
                    <h3 class="post-title"><a href="blog-post.html">How Money is Churned in the Cartel of Legal Networks</a></h3>
                  </div>
                </div>
  
                <div class="post post-widget">
                  <a class="post-img" href="blog-post.html"><img src="./img/widget-3.jpg" alt=""></img></a>
                  <div class="post-body">
                    <h3 class="post-title"><a href="blog-post.html">Why do People Keep on Paying for Mistakes?</a></h3>
                  </div>
                </div>
  
                <div class="post post-widget">
                  <a class="post-img" href="blog-post.html"><img src="./img/widget-4.jpg" alt=""></img></a>
                  <div class="post-body">
                    <h3 class="post-title"><a href="blog-post.html">The True Economic Cost of Criminal Sentences</a></h3>
                  </div>
                </div>
              </div>
  
              <div class="section-row">
                <h3>Follow us</h3>
                <ul class="nav-aside-social">
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                </ul>
              </div>
            </div>
  
          </div>
  
          <button class="nav-aside-close"><i class="fa fa-times"></i></button>
  
  
        </header >
  
      );
    }
  }
  
  export default AppHeader;