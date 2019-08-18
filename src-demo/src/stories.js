import * as React from "react";

class Stories extends React.Component {

	constructor(props) {
        super(props);
		this.state = {
			articleOne: [],
			articleTwo: [],
			articleThree: [],
			articleFour: []
		  };
	}

	componentDidMount() {
         fetch('https://newsapi.org/v2/top-headlines?q=bitcoin&from=2019-07-17&sortBy=publishedAt&apiKey=6d709386460641adad370a9f6ecd1982')
        .then(res => res.json())
		.then(
			data => this.setState({ articleOne: data.articles[0], articleTwo: data.articles[1], articleThree: data.articles[2], articleFour: data.articles[3] })
			)
        .catch(console.log);
	  }

    render() {
		const { articleOne } = this.state;
		const { articleTwo } = this.state;
		const { articleThree } = this.state;
		const { articleFour } = this.state;

        return (   
		<div class="section">
			<div class="container">
				<div class="row">	
					<div class="col-md-6">
						<div class="post post-thumb">
							<a class="post-img" href="blog-post.html"><img src="/img/post-1.jpg" alt=""></img></a>
							<div class="post-body">
								<div class="post-meta">
									<a class="post-category cat-2" href="category.html">News</a>
									<span class="post-date">{articleOne.publishedAt}</span>
								</div>
								<h3 class="post-title"><a href="blog-post.html">{articleOne.title}</a></h3>
							</div>
						</div>
					</div>

					<div class="col-md-6">
						<div class="post post-thumb">
							<a class="post-img" href="blog-post.html"><img src="/img/post-2.jpg" alt=""></img></a>
							<div class="post-body">
								<div class="post-meta">
									<a class="post-category cat-3" href="category.html">Attorneys</a>
									<span class="post-date">July 27, 2019</span>
								</div>
								<h3 class="post-title"><a href="blog-post.html">{articleTwo.title}</a></h3>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="section-title">
							<h2>Recent Articles</h2>
						</div>
					</div>

					<div class="col-md-4">
						<div class="post">
							<a class="post-img" href="blog-post.html"><img src="/img/post-3.jpg" alt=""></img></a>
							<div class="post-body">
								<div class="post-meta">
									<a class="post-category cat-1" href="category.html">Exonerations</a>
									<span class="post-date">March 27, 2019</span>
								</div>
								<h3 class="post-title"><a href="blog-post.html">{articleThree.title}</a></h3>
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<div class="post">
							<a class="post-img" href="blog-post.html"><img src="/img/post-4.jpg" alt=""></img></a>
							<div class="post-body">
								<div class="post-meta">
									<a class="post-category cat-2" href="category.html">Cases</a>
									<span class="post-date">March 27, 2019</span>
								</div>
								<h3 class="post-title"><a href="blog-post.html">{articleFour.title}</a></h3>
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<div class="post">
							<a class="post-img" href="blog-post.html"><img src="/img/post-5.jpg" alt=""></img></a>
							<div class="post-body">
								<div class="post-meta">
									<a class="post-category cat-3" href="category.html">Attorneys</a>
									<span class="post-date">March 27, 2019</span>
								</div>
								<h3 class="post-title"><a href="blog-post.html">{articleOne.title}</a></h3>
							</div>
						</div>
					</div> 

					<div class="clearfix visible-md visible-lg"></div>

					{/* <div class="col-md-4">
						<div class="post">
							<a class="post-img" href="blog-post.html"><img src="/img/post-6.jpg" alt=""></img></a>
							<div class="post-body">
								<div class="post-meta">
									<a class="post-category cat-2" href="category.html">Judges</a>
									<span class="post-date">March 27, 2019</span>
								</div>
								<h3 class="post-title"><a href="blog-post.html">New Judge Matthew F. Cooper Falls off the Appellate Bench!</a></h3>
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<div class="post">
							<a class="post-img" href="blog-post.html"><img src="/img/post-1.jpg" alt=""></img></a>
							<div class="post-body">
								<div class="post-meta">
									<a class="post-category cat-4" href="category.html">Attorneys</a>
									<span class="post-date">March 27, 2019</span>
								</div>
								<h3 class="post-title"><a href="blog-post.html">Kickbacks for Expert Witnesses</a></h3>
							</div>
						</div>
					</div> */}

					{/* <div class="col-md-4">
						<div class="post">
							<a class="post-img" href="blog-post.html"><img src="/img/post-2.jpg" alt="">></img></a>
							<div class="post-body">
								<div class="post-meta">
									<a class="post-category cat-1" href="category.html">Judges</a>
									<span class="post-date">March 27, 2019</span>
								</div>
								<h3 class="post-title"><a href="blog-post.html">Matthew F. Cooper Leaks DeNiro Divorce to Tabloids</a></h3>
							</div>
						</div>
					</div>
				</div> */}


                </div>
                </div>
                </div>
        );
    }
}

export default Stories; 