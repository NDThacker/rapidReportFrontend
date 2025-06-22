const NewsArticleCard = ({ article }) => {
	return (
		<div className="news-article-card">
			<h2>{article.title}</h2>
			<p>{article.creator}</p>
			<p>{article.content}</p>
			<p>{new Date(article.pub_date).toDateString()}</p>
			<p className="news-article-topics">
				{article.topics && article.topics.length > 0
					? article.topics.map((topic, index) => (
							<span key={index} className="news-article-topic">
								{topic}
							</span>
					  ))
					: null}
			</p>
		</div>
	);
};

export default NewsArticleCard;
