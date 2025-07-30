const NewsArticleCard = ({ article }) => {
	return (
		<div className="news-article-card">
			<h2>{article.title}</h2>
			<p>BY {article.source_name}</p>
			<p>{new Date(article.pubDate).toDateString()}</p>
			<img
				className="news-article-image"
				src={
					article.image_url
						? article.image_url
						: "https://img.icons8.com/?size=100&id=UVEiJZnIRQiE&format=png&color=000000"
				}
				alt={article.title}
			/>
			<p className="news-article-keywords-list">
				{article.keywords && article.keywords.length > 0
					? article.keywords.map((kw, index) => (
							<span key={index} className="news-article-keywords">
								{kw}
							</span>
					  ))
					: null}
			</p>
		</div>
	);
};

export default NewsArticleCard;
