import { useState } from 'react';
import { fetchGithubUser } from '../api/github';

export const useGithubUser = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUserData = async (username) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchGithubUser(username);
            setUserData(data);
        } catch (err) {
            setError(err);
            setUserData(null);
        } finally {
            setLoading(false);
        }
    };

    return { userData, loading, error, getUserData };
};
