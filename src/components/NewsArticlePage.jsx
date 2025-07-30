const NewsArticlePage = ({ article }) => {
	return (
		<div className="news-article-page">
			<h1>{article.title}</h1>
			<p className="news-article-source">
				{article.source_name}{" "}
				<img
					src={
						article.source_icon
							? article.source_icon
							: "https://img.icons8.com/?size=100&id=33121&format=png&color=000000"
					}
				/>
			</p>
			<p className="news-article-date">
				{new Date(article.pubDate).toDateString()}
			</p>
			<p className="news-article-keywords-list">
				<ul className="news-article-keywords-list">
					{article.keywords && article.keywords.length > 0
						? article.keywords.map((keyword, ind) => {
								return <li key={ind}>{keyword}</li>;
						  })
						: null}
				</ul>
			</p>
			<p className="news-article-content">{article.description}</p>
			<a className="news-article-link" href={article.link}>
				Read More
			</a>
		</div>
	);
};

export default NewsArticlePage;
