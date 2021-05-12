import * as React from "react";

function About() { 
        return (
            <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="section-row sticky-container">
                            <div class="main-post">
                                <h3>About</h3>
                                <p>Protest Press ...</p>
                            </div>
                            <div class="post-shares sticky-shares">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=protestpress.com" target="_blank" class="share-facebook"><i class="fa fa-facebook" ></i></a>
                                    <a href="https://twitter.com/share?url=http://www.protestpress.com" target="_blank" class="share-twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this article http://www.protestpress.com." title="Share by Email" target="_blank"><i class="fa fa-envelope"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default About; 