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
							  <li><a href="category.html">News</a></li>
             
						  	{/* <li class="cat-1"><a href="category.html">Cases</a></li> */}
                <li class="cat-2"><a href="category.html">Exonerations</a></li>
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