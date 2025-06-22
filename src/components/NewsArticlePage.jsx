const NewsArticlePage = ({ article }) => {
	return (
		<div className="news-article-page">
			<h1>{article.title}</h1>
			<p className="news-article-creator">{article.creator}</p>
			<p className="news-article-date">
				{new Date(article.pub_date).toDateString()}
			</p>
			<p className="news-article-keywords">
				<ul className="news-article-keywords-list">
					{article.keywords && article.keywords.length > 0
						? article.keywords.map((keyword, ind) => {
								return <li key={ind}>{keyword}</li>;
						  })
						: null}
				</ul>
			</p>
			<p className="news-article-content">{article.description}</p>
		</div>
	);
};

export default NewsArticlePage;
