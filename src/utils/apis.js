import axios from "axios";

const setHeaders = (apiKey, userAgent) => {
  const headers = {
    "X-Api-Key": apiKey,
    "User-Agent": userAgent,
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
  const headers = setHeaders(
    import.meta.env.VITE_API_KEY,
    import.meta.env.VITE_USER_AGENT
  );
  const serverUrl = getServerUrl();
  const url = `${serverUrl}/news`;
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching news articles:", error);
    throw error;
  }
};

export const getArticlesNextPage = async (cursor) => {
  if (cursor === null) return null;
  const headers = setHeaders(
    import.meta.env.VITE_API_KEY,
    import.meta.env.VITE_USER_AGENT
  );
  const serverUrl = getServerUrl();
  const url = `${serverUrl}/news?cursor=${cursor}`;
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching news articles next page:", error);
    throw error;
  }
};

export const getMatchingNewsArticles = async (query = "") => {
  const headers = setHeaders(
    import.meta.env.VITE_API_KEY,
    import.meta.env.VITE_USER_AGENT
  );
  const serverUrl = getServerUrl();
  const url = `${serverUrl}/news`;
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
  const url = `${serverUrl}/news`;

  try {
    const response = await axios.get(
      url,
      { headers },
      { params: { title: title } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching article by title:", error);
    throw error;
  }
};

export const getArticlesByDate = async (startDate, endDate) => {
  if (startDate === null || endDate === null) return;
  const headers = setHeaders(
    import.meta.env.VITE_API_KEY,
    import.meta.env.VITE_USER_AGENT
  );

  const serverUrl = getServerUrl();
  const url = `${serverUrl}/news`;
  const params = {};
  if (startDate) {
    params.start_date = startDate;
  }
  if (endDate) {
    params.end_date = endDate;
  }
  try {
    const response = await axios.get(url, { headers }, { params: params });
    return response.data;
  } catch (error) {
    console.error("Error fetching articles by date:", error);
    throw error;
  }
};
