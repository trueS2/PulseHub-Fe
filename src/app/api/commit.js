import axios from 'axios';

export async function fetchCommitAnalysis(username, days) {
    const token = localStorage.getItem('jwt');

    try {
        const response = await axios.get('/api/activity/commits', {
            params: { username, days },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('커밋 분석 데이터를 불러오는 중 오류 발생:', error);
        throw error;
    }
}
