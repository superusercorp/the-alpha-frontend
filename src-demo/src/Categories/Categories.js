import * as React from "react";
import { Link } from 'react-router-dom'

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

    isSameCategory() {
        let isCategorySpecificOne = [];
        let category = this.props.location.state.toString().split(',')
        if (this.state.articleOne.category == category) {
            JSON.stringify(this.state.articleOne)
            isCategorySpecificOne = this.state.articleOne;
        }
        return isCategorySpecificOne;
    }

    isSameCategoryTwo() {
        let isCategorySpecificOne = [];
        let category = this.props.location.state.toString().split(',')
        if (this.state.articleTwo.category == category) {
            JSON.stringify(this.state.articleTwo)
            isCategorySpecificOne = this.state.articleTwo;
        }
        return isCategorySpecificOne;
    }

    isSameCategoryThree() {
        let isCategorySpecificOne = [];
        let category = this.props.location.state.toString().split(',')
        if (this.state.articleThree.category == category) {
            JSON.stringify(this.state.articleThree)
            isCategorySpecificOne = this.state.articleThree;
        }
        return isCategorySpecificOne;
    }

    isSameCategoryFour() {
        let isCategorySpecificOne = [];
        let category = this.props.location.state.toString().split(',')
        if (this.state.articleFour.category == category) {
            JSON.stringify(this.state.articleFour)
            isCategorySpecificOne = this.state.articleFour;
        }
        return isCategorySpecificOne;
    }

    isSameCategoryFive() {
        let isCategorySpecificOne = [];
        let category = this.props.location.state.toString().split(',')
        if (this.state.articleFive.category == category) {
            JSON.stringify(this.state.articleFive)
            isCategorySpecificOne = this.state.articleFive;
        }
        return isCategorySpecificOne;
    }

    isSameCategorySix() {
        let isCategorySpecificOne = [];
        let category = this.props.location.state.toString().split(',')
        if (this.state.articleSix.category == category) {
            JSON.stringify(this.state.articleSix)
            isCategorySpecificOne = this.state.articleSix;
        }
        return isCategorySpecificOne;
    }

    isSameCategorySeven() {
        let isCategorySpecificOne = [];
        let category = this.props.location.state.toString().split(',')
        if (this.state.articleSeven.category == category) {
            JSON.stringify(this.state.articelSeven)
            isCategorySpecificOne = this.state.articleSeven;
        }
        return isCategorySpecificOne;
    }

    getColorIndex(categoryStr) {
        let catArr = ['foo', 'cases', 'exonerations', 'attorneys', 'judges',]
        console.log("the index is " + catArr.indexOf(categoryStr))
        return catArr.indexOf(categoryStr)
    }

    spaceToDash(strInput) {
        if (strInput != undefined) {
            const str = strInput
            return str.replace(/\s+/g, '-').toLowerCase();
        }
    }

    formatDate(inputDate) {
        let monthArr = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            // Months use 0 index.
            let parts = inputDate.split('-');
            let days = parts[2].toString()
            let daysStr = days.substr(0, 2)
            let strIndex = parts[1].substr(1, 1)
            let month = monthArr[strIndex]
            return month + ' ' + daysStr + ',' + parts[0];
        }
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
        const { articleOne } = this.state
        const { articleTwo } = this.state;
        const { articleThree } = this.state;
        const { articleFour } = this.state;
        const { articleFive } = this.state;
        const { articleSix } = this.state;
        const { articleSeven } = this.state;
        console.log(this.getCategoryStr())
        console.log("the same category is " + this.isSameCategory().title)
        console.log("ARTICLE TWO: " + JSON.stringify(articleTwo))

        function getImage(articleIndexx) {
            if (articleIndexx != undefined && articleIndexx.file != undefined && articleIndexx.file.src != undefined) {
                return articleIndexx.file.src
            }
        }

        return (
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="post post-thumb">
                                        <Link to={{ pathname: '/story/' + this.spaceToDash(this.isSameCategory().title), state: { articleOne } }}>
                                            <a class="post-img" href=""><img src={getImage(this.isSameCategory())} alt=""></img></a>
                                        </Link>

                                        <div class="post-body">
                                            <div class="post-meta">
                                                <a class={"post-category cat-" + this.getColorIndex(this.isSameCategory().category)} href="#">{this.isSameCategory().category}</a>
                                                <span class="post-date">{this.formatDate(this.isSameCategory().createdate)}</span>
                                            </div>
                                            <h3 class="post-title">{this.isSameCategory().title}<a href="blog-post.html"></a></h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="post">
                                        <Link to={{ pathname: '/story/' + this.spaceToDash(this.isSameCategoryTwo().title), state: { articleTwo } }}>
                                            <a class="post-img" href=""><img src={getImage(this.isSameCategoryTwo())} alt=""></img></a>
                                        </Link>
                                        <div class="post-body">
                                            <div class="post-meta">
                                                <a class={"post-category cat-" + this.getColorIndex(this.isSameCategoryTwo().category)} href="#">{this.isSameCategoryTwo().category}</a>
                                                <span class="post-date">{this.formatDate(this.isSameCategoryTwo().createdate)}</span>
                                            </div>
                                            <h3 class="post-title">{this.isSameCategoryTwo().title}<a href="blog-post.html"></a></h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="post">
                                        <Link to={{ pathname: '/story/' + this.spaceToDash(this.isSameCategoryThree().title), state: { articleThree } }}>
                                            <a class="post-img" href=""><img src={getImage(this.isSameCategoryThree())} alt=""></img></a>
                                        </Link>
                                        <div class="post-body">
                                            <div class="post-meta">
                                                <a class={"post-category cat-" + this.getColorIndex(this.isSameCategoryThree().category)} href="#">{this.isSameCategoryThree().category}</a>
                                                <span class="post-date">{this.formatDate(this.isSameCategoryThree().createdate)}</span>
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
                                        <Link to={{ pathname: '/story/' + this.spaceToDash(this.isSameCategoryFour().title), state: { articleFour } }}>
                                            <a class="post-img" href=""><img src={getImage(this.isSameCategoryFour())} alt=""></img></a>
                                        </Link>
                                        <div class="post-body">
                                            <div class="post-meta">
                                                <a class={"post-category cat-" + this.getColorIndex(this.isSameCategoryFour().category)} href="#">{this.isSameCategoryFour().category}</a>
                                                <span class="post-date">{this.formatDate(this.isSameCategoryFour().createdate)}</span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>{this.isSameCategoryFive().title}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <Link to={{ pathname: '/story/' + this.spaceToDash(this.isSameCategoryFive().title), state: { articleFive } }}>
                                            <a class="post-img" href=""><img src={getImage(this.isSameCategoryFive())} alt=""></img></a>
                                        </Link>
                                        <div class="post-body">
                                            <div class="post-meta">
                                                <a class={"post-category cat-" + this.getColorIndex(this.isSameCategoryFive().category)} href="#">{this.isSameCategoryFive().category}</a>
                                                <span class="post-date">{this.formatDate(this.isSameCategoryFive().createdate)}</span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>{this.isSameCategoryFive().title}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <Link to={{ pathname: '/story/' + this.spaceToDash(this.isSameCategorySix().title), state: { articleSix } }}>
                                            <a class="post-img" href=""><img src={getImage(this.isSameCategorySix())} alt=""></img></a>
                                        </Link>
                                        <div class="post-body">
                                            <div class="post-meta">
                                                <a class={"post-category cat-" + this.getColorIndex(this.isSameCategorySix().category)} href="#">{this.isSameCategorySix().category}</a>
                                                <span class="post-date">{this.formatDate(this.isSameCategorySix().createdate)}</span>
                                            </div>
                                            <h3 class="post-title"><a href="blog-post.html"></a></h3>
                                            <p>{this.isSameCategorySix().title}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="post post-row">
                                        <Link to={{ pathname: '/story/' + this.spaceToDash(this.isSameCategorySeven().title), state: { articleSeven } }}>
                                            <a class="post-img" href=""><img src={getImage(this.isSameCategorySeven())} alt=""></img></a>
                                        </Link>
                                        <div class="post-body">
                                            <div class="post-meta">
                                                <a class={"post-category cat-" + this.getColorIndex(this.isSameCategorySeven().category)} href="#">{this.isSameCategorySeven().category}</a>
                                                <span class="post-date">{this.formatDate(this.isSameCategorySeven().createdate)}</span>
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