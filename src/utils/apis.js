import axios from 'axios';


const setHeaders = (apiKey, userAgent) => {
    const headers = {
        'X-Api-Key': apiKey,
        'User-Agent': userAgent,
    }
    return headers;

}

const getServerUrl = () => {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    if (!serverUrl) {
        throw new Error('Server URL is not defined in environment variables');
    }
    return serverUrl;
}

export const getNewsArticles = async () => {
    const headers = setHeaders(import.meta.env.VITE_API_KEY, import.meta.env.VITE_USER_AGENT);
    const serverUrl = getServerUrl();
    const url = `${serverUrl}/news`;
    try {
        const response = await axios.get(url, {headers});
        return response.data;
    }
    catch (error) {
        console.error('Error fetching news articles:', error);
        throw error;
    }

}
