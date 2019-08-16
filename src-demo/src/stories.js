import * as React from "react";

class Stories extends React.Component {
    render() {
        return (
   
            <div class="section">
                <div class="container">
                <p class="text-secondary">.text-secondary</p>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="post post-thumb">
                                <a class="post-img" href="blog-post.html"><img src="./img/post-1.jpg" alt=""></img></a>
                                <div class="post-body">
                                    <div class="post-meta">
                                        <a class="post-category cat-2" href="category.html">News</a>
                                        <span class="post-date">July 27, 2019</span>
                                    </div>
                                    <h3 class="post-title"><a href="blog-post.html">Judge Sentenced for Obstruction of Justice</a></h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Stories; 