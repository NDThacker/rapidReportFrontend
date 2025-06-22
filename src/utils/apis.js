import axios from "axios";

const setHeaders = (apiKey) => {
	const headers = {
		"X-ACCESS-KEY": apiKey,
	};
	return headers;
};

const getServerUrl = () => {
	const serverUrl = import.meta.env.VITE_SERVER_URL;
	if (!serverUrl) {
		throw new Error("Server URL is not defined in environment variables");
	}
	return serverUrl;
};

export const getNewsArticles = async () => {
	const headers = setHeaders(import.meta.env.VITE_API_KEY);
	const serverUrl = getServerUrl();
	const url = `${serverUrl}/latest`;
	try {
		const response = await axios.get(url, { headers });
		return response.data;
	} catch (error) {
		console.error("Error fetching news articles:", error);
		throw error;
	}
};

export const getMatchingNewsArticles = async (query = "") => {
	const headers = setHeaders(import.meta.env.VITE_API_KEY);
	const serverUrl = getServerUrl();
	const url = `${serverUrl}/latest`;
	try {
		const response = await axios.get(
			url,
			{ headers },
			{ params: { q: query } }
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching matching news articles:", error);
		throw error;
	}
};

export const getArticleByTitle = async (title) => {
	const headers = setHeaders(
		import.meta.env.VITE_API_KEY,
		import.meta.env.VITE_USER_AGENT
	);
	const serverUrl = getServerUrl();
	const url = `${serverUrl}/latest`;

	try {
		const response = await axios.get(
			url,
			{ headers },
			{ params: { qInTitle: title } }
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching article by title:", error);
		throw error;
	}
};

export const getArticleByCategory = async (category) => {
	const headers = setHeaders(
		import.meta.env.VITE_API_KEY,
		import.meta.env.VITE_USER_AGENT
	);
	const serverUrl = getServerUrl();
	const url = `${serverUrl}/latest`;

	try {
		const response = await axios.get(
			url,
			{ headers },
			{ params: { category } }
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching article by category:", error);
		throw error;
	}
};
