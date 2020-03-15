import React, { useState, useEffect } from 'react';
import {
	Link,
	useLocation,
} from "react-router-dom";

function Stories() {
	let location = useLocation()
	let cat = location.pathname.toString().split('/')[2]
	const [response, setResponse] = useState([]);

	useEffect(() => {
		console.log('New path: ', cat);
		fetch('https://us-central1-thealphaposts.cloudfunctions.net/getLatestPosts')
			.then(res => res.json())
			.then(res => {
				setResponse(res)
				console.log(res)
			})
	}, [location.pathname]);

	function article(indexx) {
		if (response !== undefined) {
			return response[indexx]
		}
	}

	function getTitle(indexx) {
		if (response[indexx] !== undefined) {
			console.log("title is " + JSON.stringify(response[indexx]))
			let title = response[indexx].title
			return title;
		}
	}

	function spaceToDash(strInput) {
		if (strInput != undefined) {
			const str = strInput.title
			return str.replace(/\s+/g, '-').toLowerCase();
		}
	}

	function getImage(indexx) {
		if (article(indexx) != undefined && article(indexx).file != undefined && article(indexx).file.src != undefined) {
			return article(indexx).file.src
		}
	}

	function getColorIndex(indexx) {
		if (indexx !== undefined && article(indexx) !== undefined) {
			let cat = article(indexx).category
			let catArr = ['foo', 'cases', 'exonerations', 'attorneys', 'judges',]
			return catArr.indexOf(cat)
		}
	}

	function formatDate(indexx) {
		if (indexx !== undefined && article(indexx) !== undefined) {
			let monthArr = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
			var date = new Date(article(indexx).createdate);
			if (!isNaN(date.getTime())) {
				// Months use 0 index.
				let parts = article(indexx).createdate.split('-');
				let days = parts[2].toString()
				let daysStr = days.substr(0, 2)
				let strIndex = parts[1].substr(1, 1)
				let month = monthArr[strIndex]
				return month + ' ' + daysStr + ',' + parts[0];
			}
		}
	}

	return (
		<div class="section">
			<div class="container">
				<div class="row"></div>
				{response && response.length > 6 && response.slice(0, 2).map((item, index) => (
					<div class="col-md-6">
						<div class="post post-thumb">
							<Link to={{ pathname: '/story/' + spaceToDash(item), state: { item } }}>
										<a class="post-img" href=""><img src={getImage(index)} alt=""></img></a>
                             </Link>
							<div class="post-body">
								<div class="post-meta">
								<a class={"post-category cat-" + getColorIndex(index)} href="#">{item.category}</a>
                                                <span class="post-date">{formatDate(index)}</span>
								</div>
								<h3 class="post-title">
                            		 <Link to={{ pathname: '/story/' + spaceToDash(item), state: item }}>
													{item.title}
									 </Link>
								</h3>
							</div>
						</div>
					</div>
				))}

				<div class="row">
					<div class="col-md-12">
						<div class="section-title">
							<h2>Recent Articles</h2>
						</div>
					</div>

					{response && response.length > 6 && response.slice(3, 6).map((item, index) => (
						<div class="col-md-4">
						<div class="post">
							<Link to={{ pathname: '/story/' + spaceToDash(item), state: { item } }}>
										<a class="post-img" href=""><img src={getImage(index + 2)} alt=""></img></a>
                             </Link>
							<div class="post-body">
								<div class="post-meta">
								<a class={"post-category cat-" + getColorIndex(index + 2)} href="#">{item.category}</a>
                                                <span class="post-date">{formatDate(index + 2)}</span>
								</div>
								<h3 class="post-title">
                            		 <Link to={{ pathname: '/story/' + spaceToDash(item), state: item }}>
													{item.title}
									 </Link>
								</h3>
							</div>
						</div>
					</div>
					))}

					<div class="clearfix visible-md visible-lg"></div>
				</div>
			</div>
		</div>
	);
}

export default Stories;

