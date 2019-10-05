import * as React from "react";

class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            articleOne: [],
			// articleTwo: [],
			// articleThree: [],
            // articleFour: [],
            // articleFive: []
        };
    }

    getCategoryStr() {
        let category = Object.values(this.props.location.state.toString().split(','))
        return category;
    }

    // getFirstThree(data){
    //     if (data != null || undefined) {
    //         let firstThree = data.slice(0, 3)
    //         this.state.firstThree = firstThree;
    //         return firstThree; 
    //     }
    // }

    // getFirst(data){
    //     if (data != null || undefined) {
    //         let first = data.slice(0, 1)
    //         let json = JSON.stringify(first)
    //         this.state.first = json;
    //         return json;
    //     }
    // }

    // getLast(data){
    //     if (data != null || undefined) {
    //         let last = data.slice(3, data.length)
    //         JSON.stringify(last)
    //         this.state.getLast = last; 
    //         return last;
    //     }
    // }

    // cleanJson(json) {
    //     if (json != null || undefined || {}) {
    //         let clean = JSON.stringify(json)
    //         return JSON.parse(clean)
    //     }
    //     return {}
    // }

    // safety(data) {
    //     if(data != null || undefined || {}) {
    //         return data
    //     }
    // }

    isSameCategory() {
        let isCategorySpecificOne = []; 
        let category = this.props.location.state.toString().split(',')
        if(this.state.articleOne.category == category) {
            console.log(this.state.articleOne.category)
            JSON.stringify(this.state.articleOne)
            return isCategorySpecificOne = this.state.articleOne; 
        }
        return isCategorySpecificOne; 
    }

    getColorIndex(categoryStr) {
        let catArr = ['foo', 'cases', 'exonerations', 'attorneys', 'judges', ]
        console.log("the index is " + catArr.indexOf(categoryStr))
        return catArr.indexOf(categoryStr)
    }

    // https://us-central1-thealphaposts.cloudfunctions.net/getCategory?category=osadf
    componentDidMount() {
        fetch('https://us-central1-thealphaposts.cloudfunctions.net/getCategory?category=' + this.getCategoryStr())
            .then(res => res.json())
            .then(
                data => this.setState({
                    articles: data,
                    articleOne: data[0],
                    // articleTwo: data[1],
					// articleThree: data[2],
                    // articleFour: data[3],
                    // articleFive: data[4]
                })
            )
            .catch(console.log);
    }

    render() {
        const { articleOne } = this.state.articleOne;
		// const { articleTwo } = this.state.articleTwo;
		// const { articleThree } = this.state.articleThree;
		// const { articleFour } = this.state.articleFour;
        // const { articleFive } = this.state.articleFive;
        console.log(this.getCategoryStr())
        console.log("the same category is " + this.isSameCategory().title)

        return (
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="post post-thumb">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-1.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                                <a class={"post-category cat-" + this.getColorIndex(this.isSameCategory().category)} href="#">{this.isSameCategory().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title">{this.isSameCategory().title}<a href="blog-post.html"></a></h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="post">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-4.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategory().category)} href="#">{this.isSameCategory().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html">{}</a></h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="post">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-6.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategory().category)} href="#">{this.isSameCategory().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="clearfix visible-md visible-lg"></div>

                                <div class="col-md-12">
                                    <div class="section-row">
                                        <a href="#">
                                            <img class="img-responsive center-block" src="./../img/ad-2.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-2.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategory().category)} href="#">{this.isSameCategory().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-5.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategory().category)} href="#">{this.isSameCategory().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-3.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategory().category)} href="#">{this.isSameCategory().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-1.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategory().category)} href="#">{this.isSameCategory().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="section-row">
                                        <button class="primary-button center-block">Load More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Categories; 