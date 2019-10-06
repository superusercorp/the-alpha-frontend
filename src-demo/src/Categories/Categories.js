import * as React from "react";

class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            articleOne: [],
			articleTwo: [],
			articleThree: [],
            articleFour: [],
            articleFive: [],
            articleSix: [],
            articleSeven: []
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
            JSON.stringify(this.state.articleOne)
            isCategorySpecificOne = this.state.articleOne; 
        }
        return isCategorySpecificOne; 
    }

    isSameCategoryTwo() {
        let isCategorySpecificOne = []; 
        let category = this.props.location.state.toString().split(',')
        if(this.state.articleTwo.category == category) {
            JSON.stringify(this.state.articleTwo)
            isCategorySpecificOne = this.state.articleTwo; 
        }
        return isCategorySpecificOne; 
    }

    isSameCategoryThree() {
        let isCategorySpecificOne = []; 
        let category = this.props.location.state.toString().split(',')
        if(this.state.articleThree.category == category) {
            JSON.stringify(this.state.articleThree)
            isCategorySpecificOne = this.state.articleThree; 
        }
        return isCategorySpecificOne; 
    }

    isSameCategoryFour() {
        let isCategorySpecificOne = []; 
        let category = this.props.location.state.toString().split(',')
        if(this.state.articleFour.category == category) {
            JSON.stringify(this.state.articleFour)
            isCategorySpecificOne = this.state.articleFour; 
        }
        return isCategorySpecificOne; 
    }

    isSameCategoryFive() {
        let isCategorySpecificOne = []; 
        let category = this.props.location.state.toString().split(',')
        if(this.state.articleFive.category == category) {
            JSON.stringify(this.state.articleFive)
            isCategorySpecificOne = this.state.articleFive; 
        }
        return isCategorySpecificOne; 
    }

    isSameCategorySix() {
        let isCategorySpecificOne = []; 
        let category = this.props.location.state.toString().split(',')
        if(this.state.articleSix.category == category) {
            JSON.stringify(this.state.articleSix)
            isCategorySpecificOne = this.state.articleSix; 
        }
        return isCategorySpecificOne; 
    }

    isSameCategorySeven() {
        let isCategorySpecificOne = []; 
        let category = this.props.location.state.toString().split(',')
        if(this.state.articleSeven.category == category) {
            JSON.stringify(this.state.articelSeven)
            isCategorySpecificOne = this.state.articleSeven; 
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
        // let isLoaded = false
        // if (!this.isLoaded) {
        //     window.location.reload()
        //  }
        // this.setState(isLoaded = true)
        fetch('https://us-central1-thealphaposts.cloudfunctions.net/getCategory?category=' + this.getCategoryStr())
            .then(res => res.json())
            .then(
                data => this.setState({
                    articles: data,
                    articleOne: data[0],
                    articleTwo: data[1],
					articleThree: data[2],
                    articleFour: data[3],
                    articleFive: data[4],
                    articleSix: data[5],
                    articleSeven: data[6]
                })
            )
            .catch(console.log);
    }

    render() {
        const { articleOne } = this.state.articleOne;
		const { articleTwo } = this.state.articleTwo;
		// const { articleThree } = this.state.articleThree;
		// const { articleFour } = this.state.articleFour;
        // const { articleFive } = this.state.articleFive;
        console.log(this.getCategoryStr())
        console.log("the same category is " + this.isSameCategory().title)
        console.log("ARTICLE TWO: " + JSON.stringify(articleTwo))

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
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategoryTwo().category)} href="#">{this.isSameCategoryTwo().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title">{this.isSameCategoryTwo().title}<a href="blog-post.html"></a></h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="post">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-6.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategoryThree().category)} href="#">{this.isSameCategoryThree().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title">{this.isSameCategoryThree().category}<a href="blog-post.html"></a></h3>
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
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategoryFour().category)} href="#">{this.isSameCategoryFour().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>{this.isSameCategoryFive().title}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-5.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategoryFive().category)} href="#">{this.isSameCategoryFive().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>{this.isSameCategoryFive().title}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-3.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategorySix().category)} href="#">{this.isSameCategorySix().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>{this.isSameCategorySix().title}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <a class="post-img" href="blog-post.html"><img src="./../img/post-1.jpg" alt="" /></a>
                                        <div class="post-body">
                                            <div class="post-meta">
                                            <a class={"post-category cat-" + this.getColorIndex(this.isSameCategorySeven().category)} href="#">{this.isSameCategorySeven().category}</a>
                                                <span class="post-date"></span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>{this.isSameCategorySeven().title}</p>
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