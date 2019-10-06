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
		if(strInput != undefined) {
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

		console.log("input is: " + inputDate)
		var date = new Date(inputDate);
		if (!isNaN(date.getTime())) {
			// Months use 0 index.
			console.log("date is: " + date)
			let parts = inputDate.split('-');
			console.log("parts1: " + parts[0])
			console.log("parts2: " + parts[1])
			console.log("parts3: " + parts[2])
			let days = parts[2].toString()
			let daysStr = days.substr(0, 2)
			console.log("daysStr: " + daysStr)
			let strIndex = parts[1].substr(1, 1)
			let month = monthArr[strIndex]
			console.log(monthArr[strIndex])
			return month + ' ' + daysStr + ',' + parts[0]; 
		}
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

		function getImage() {
			if(articleOne != undefined && articleOne.file != undefined && articleOne.file.src != undefined) {
				return articleOne.file.src
			}
		}

		function toDateTime() {
			if(articleOne != undefined && articleOne.lastupdate != undefined && articleOne.lastupdate.seconds != undefined) {
				var t = new Date(1970, 0, 1); // Epoch
				t.setSeconds(articleOne.lastupdate.seconds);
				console.log("article one seconds is: " + articleOne.lastupdate.seconds)
				console.log(t)
				return t;
			}
		}

		return (
			<div class="section">
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="post post-thumb">
								<a class="post-img" href="blog-post.html"><img src= {getImage()} alt=""></img></a>
								<div class="post-body">
									<div class="post-meta">
										<a class="post-category cat-2" href="category.html">News</a>
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
								<a class="post-img" href="blog-post.html"><img src="/img/post-2.jpg" alt=""></img></a>
								<div class="post-body">
									<div class="post-meta">
										<a class="post-category cat-3" href="category.html">Attorneys</a>
										<span class="post-date">July 27, 2019</span>
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
								<a class="post-img" href="blog-post.html"><img src="/img/post-3.jpg" alt=""></img></a>
								<div class="post-body">
									<div class="post-meta">
										<a class="post-category cat-1" href="category.html">Exonerations</a>
										<span class="post-date">March 27, 2019</span>
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
								<a class="post-img" href="blog-post.html"><img src="/img/post-4.jpg" alt=""></img></a>
								<div class="post-body">
									<div class="post-meta">
										<a class="post-category cat-2" href="category.html">Cases</a>
										<span class="post-date">March 27, 2019</span>
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
								<a class="post-img" href="blog-post.html"><img src="/img/post-5.jpg" alt=""></img></a>
								<div class="post-body">
									<div class="post-meta">
										<a class="post-category cat-3" href="category.html">Attorneys</a>
										<span class="post-date">March 27, 2019</span>
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