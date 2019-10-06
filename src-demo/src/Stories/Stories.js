import * as React from "react";
import { Route, Switch, Link } from 'react-router-dom'

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

	spaceToDash(strInput) {
		if (strInput != undefined) {
			const str = strInput
			return str.replace(/\s+/g, '-').toLowerCase();
		}
	}

	// getImage() {
	// 	let imageStr = "image";
	// 	if(this.state.articleOne != undefined || null || "") {
	// 		let artOne = this.state.articleOne
	// 		console.log("state one is: " + this.state.articleOne)
	// 		if(artOne.file.src != undefined && artOne.file.src != null) {
	// 			imageStr = artOne.file.src
	// 		}
	// 	}
	// 	return imageStr
	// }

	// getImage() {
	// 	let imageStr = "foo"
	// 	return imageStr
	// }

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

	getColorIndex(categoryStr) {
        let catArr = ['foo', 'cases', 'exonerations', 'attorneys', 'judges', ]
        console.log("the index is " + catArr.indexOf(categoryStr))
        return catArr.indexOf(categoryStr)
    }

	componentDidMount() {
		fetch('https://us-central1-thealphaposts.cloudfunctions.net/getLatestPosts')
			.then(res => res.json())
			.then(
				data => this.setState({
					articleOne: data[0],
					articleTwo: data[1],
					articleThree: data[2],
					articleFour: data[3],
					articleFive: data[4]
				})
			)
			.catch(console.log);
	}

	render() {
		const { articleOne } = this.state;
		const { articleTwo } = this.state;
		const { articleThree } = this.state;
		const { articleFour } = this.state;
		const { articleFive } = this.state;
		console.log(articleOne.file)

		function getImage(articleIndexx) {
			if (articleIndexx != undefined && articleIndexx.file != undefined && articleIndexx.file.src != undefined) {
				return articleIndexx.file.src
			}
		}

		return (
			<div class="section">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="post post-thumb">
								<Link to={{ pathname: '/story/' + this.spaceToDash(articleOne.title), state: { articleOne } }}>
									<a class="post-img" href=""><img src={getImage(articleOne)} alt=""></img></a>
								</Link>

								<div class="post-body">
									<div class="post-meta">
									<a class={"post-category cat-" + this.getColorIndex(articleOne.category)} href="#">{articleOne.category}</a>
										<span class="post-date">{this.formatDate(articleOne.createdate)}</span>
									</div>
									<h3 class="post-title">
										<Link to={{ pathname: '/story/' + this.spaceToDash(articleOne.title), state: { articleOne } }}>
											{articleOne.title}
										</Link>
									</h3>
								</div>
							</div>
						</div>

						<div class="col-md-6">
							<div class="post post-thumb">
								<Link to={{ pathname: '/story/' + this.spaceToDash(articleTwo.title), state: { articleTwo } }}>
									<a class="post-img" href=""><img src={getImage(articleTwo)} alt=""></img></a>
								</Link>
								<div class="post-body">
									<div class="post-meta">
									<a class={"post-category cat-" + this.getColorIndex(articleTwo.category)} href="#">{articleTwo.category}</a>
										<span class="post-date">{this.formatDate(articleTwo.createdate)}</span>
									</div>
									<h3 class="post-title">
										<Link to={{ pathname: '/story/' + this.spaceToDash(articleTwo.title), state: { articleTwo: articleTwo } }}>
											{articleTwo.title}
										</Link>
									</h3>
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
								<Link to={{ pathname: '/story/' + this.spaceToDash(articleThree.title), state: { articleThree } }}>
									<a class="post-img" href=""><img src={getImage(articleThree)} alt=""></img></a>
								</Link>
								<div class="post-body">
									<div class="post-meta">
									<a class={"post-category cat-" + this.getColorIndex(articleThree.category)} href="#">{articleThree.category}</a>
										<span class="post-date">{this.formatDate(articleThree.createdate)}</span>
									</div>
									<h3 class="post-title">
										<Link to={{ pathname: '/story/' + this.spaceToDash(articleThree.title), state: { articleThree: articleThree } }}>
											{articleThree.title}
										</Link>
									</h3>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="post">

								<Link to={{ pathname: '/story/' + this.spaceToDash(articleFour.title), state: { articleFour } }}>
									<a class="post-img" href=""><img src={getImage(articleFour)} alt=""></img></a>
								</Link>

								<div class="post-body">
									<div class="post-meta">
									<a class={"post-category cat-" + this.getColorIndex(articleFour.category)} href="#">{articleFour.category}</a>
										<span class="post-date">{this.formatDate(articleFour.createdate)}</span>
									</div>
									<h3 class="post-title">
										<Link to={{ pathname: '/story/' + this.spaceToDash(articleFour.title), state: { articleFour: articleFour } }}>
											{articleFour.title}
										</Link>
									</h3>
								</div>
							</div>
						</div>

						<div class="col-md-4">
							<div class="post">
								
								<Link to={{ pathname: '/story/' + this.spaceToDash(articleThree.title), state: { articleThree } }}>
									<a class="post-img" href=""><img src={getImage(articleThree)} alt=""></img></a>
								</Link>

								<div class="post-body">
									<div class="post-meta">
									<a class={"post-category cat-" + this.getColorIndex(articleThree.category)} href="#">{articleThree.category}</a>
										<span class="post-date">{this.formatDate(articleThree.createdate)}</span>
									</div>
									<h3 class="post-title">
										<Link to={{ pathname: '/story/' + this.spaceToDash(articleThree.title), state: { articleThree: articleThree } }}>
											{articleThree.title}
										</Link>
									</h3>
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