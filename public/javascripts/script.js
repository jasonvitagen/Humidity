(function () {
	'use strict';


	function ajaxGet (url, options, callback) {
		if (XMLHttpRequest) {
			var httpRequest = new XMLHttpRequest();
			httpRequest.onreadystatechange = function () {
				httpRequest.readyState == 4 &&
				httpRequest.status == 200 &&
				callback(JSON.parse(httpRequest.response));
			}
			httpRequest.open('GET', url);
			httpRequest.send();
		}
	}


	function getSidebarHtml (articles) {
		var html = '';
		html += '<ul class="ul-reset">';
		for (var i = 0; i < articles.length; i++) {
			var article = articles[i];
			if (article) {
				html += '<li class="bottom-margin-16">' +
							'<div class="item">' +
							 	'<div class="thumbnail">' +
							 		'<a href="/article/' +
							 			article.articleId +
							 			'/' +
							 			article.title +
							 		'">' +
							 			'<img src="' +
							 				article.thumbnail +
							 			'" alt="">' +
							 			'</a>' +
							 	'</div>' +
							 	'<div class="item-title">' +
							 		'<a href="/article/' +
							 			article.articleId +
							 			'/' +
							 			article.title +
							 		'">' +
							 			'<h2>' +
							 				article.title +
							 			'</h2>' +
							 		'</a>' +
							 	'</div>' +
							'</div>' +
						'</li>';	
			}
		}
		html += '</ul>';
		return html;
	}

	function getMoreIndexHtml (articles) {
		var html = '';
		for (var i = 0; i < articles.length; i++) {
			var article = articles[i];
			if (article) {
				html += '<div class="unit w-1-3">' +
							'<div class="item">' +
								'<div class="thumbnail">' +
									'<a href="/article/' +
										article.articleId +
										'/' +
										article.title +
									'">' +
										'<img src="' +
											article.thumbnail +
										'" alt="">' +
									'</a>' +
								'</div>' +
								'<div class="item-title">' +
									'<a href="/article/' +
										article.articleId + 
										'/' + 
										article.title +
									'">' +
										'<h2>' +
											article.title +
										'</h2>' +
									'</a>' +
								'</div>' +
								'<div class="item-tags">' +
								'</div>' +
								'<div class="item-date">' +
									article.createdBeautified +
								'</div>' +
								'<div class="clear"></div>' +
								'<div><!--' +
									article.view +
								'--></div>' +
								'<div class="clear"></div>' +
							'</div>' +
						'</div>';
			}
		}
		return html;
	}

	function getMoreMyArticlesIndexHtml (articles) {
		var html = '';
		for (var i = 0; i < articles.length; i++) {
			var article = articles[i];
			if (article) {
				html += '<div class="unit w-1-3">' +
							'<div class="item">' +
								'<div class="thumbnail">' +
									'<a href="/article/' +
										article.articleId +
										'/' +
										article.title +
									'">' +
										'<img src="' +
											article.thumbnail +
										'" alt="">' +
									'</a>' +
								'</div>' +
								'<div class="item-title">' +
									'<a href="/article/' +
										article.articleId + 
										'/' + 
										article.title +
									'">' +
										'<h2>' +
											article.title +
										'</h2>' +
									'</a>' +
								'</div>' +
								'<div class="item-tags">' +
								'</div>' +
								'<div class="item-date">' +
									article.createdBeautified +
								'</div>' +
								'<br>' +
								'<div>' +
									'<form method="post" action="delete">' +
										'<input type="hidden" name="articleId" value="' +
											article.articleId +
										'">' +
										'<input type="hidden" name="articleCategory" value="' +
											article.category +
										'">' +
										'<button type="submit">Delete</button>' +
									'</form>' +
								'</div>' +
								'<div>' +
									'<a href="/article/edit/' +
										article.articleId +
									'">' +
										'<button type="button">Edit</button>' +
									'</a>' +
								'</div>' +
								'<div class="clear"></div>' +
								'<div><!--' +
									article.view +
								'--></div>' +
								'<div class="clear"></div>' +
							'</div>' +
						'</div>';
			}
		}
		return html;
	}


	function appendMoreIndexHtml (containerElement, moreIndexHtml) {
		var frag = document.createDocumentFragment();
		var p = document.createElement('p');

		p.innerHTML = moreIndexHtml;

		var firstChild;

		while (firstChild = p.firstChild) {
			frag.appendChild(firstChild);
		}

		containerElement.appendChild(frag);
	}


	function removeElementInList (list, property, condition) {
		for (var i = 0; i < list.length; i++) {
			var element = list[i];
			if (element) {
				if (element[property] == condition) {
					list.splice(i, 1);
					break;
				}
			}
		}
	}

	function registerScrollTopListener (againstElement, callback) {
		window.onscroll = function () {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var againstElementBottomPos = againstElement.offsetTop + againstElement.offsetHeight - window.innerHeight;
			callback(againstElementBottomPos, scrollTop);
		}
	}


	window.ajaxGet = ajaxGet;
	window.getSidebarHtml = getSidebarHtml;
	window.removeElementInList = removeElementInList;
	window.registerScrollTopListener = registerScrollTopListener;
	window.getMoreIndexHtml = getMoreIndexHtml;
	window.appendMoreIndexHtml = appendMoreIndexHtml;
	window.getMoreMyArticlesIndexHtml = getMoreMyArticlesIndexHtml;
	

})();