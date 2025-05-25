import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchGithubUser = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/github/user/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub user:', error);
        throw error;
    }
};
