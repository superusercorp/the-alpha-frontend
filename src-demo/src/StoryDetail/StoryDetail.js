import * as React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const StoryDetail = (props) => {
    const title = props.location.state.title
    const body = props.location.state.title
    const htmlBody = ReactHtmlParser(body);

    return (
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="section-row sticky-container">
                            <div class="main-post">
                                <h3>{title}</h3>
                                <p>{htmlBody}</p>
                            </div>
                            <div class="post-shares sticky-shares">
                                <a href="#" class="share-facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="share-twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" class="share-google-plus"><i class="fa fa-google-plus"></i></a>
                                <a href="#" class="share-pinterest"><i class="fa fa-pinterest"></i></a>
                                <a href="#" class="share-linkedin"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryDetail; 
