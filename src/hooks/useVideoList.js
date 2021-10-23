import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { useEffect, useState } from 'react';

const useVideoList = (page) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {

        async function fetchVideos() {

            const db = getDatabase();
            const videosRef = ref(db, 'videos');
            const videoQuery = query(videosRef, orderByKey(), startAt('' + page), limitToFirst(12));

            try {
                setLoading(true);
                setError(false);
                const snapshot = await get(videoQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setVideos((prevVideos) => [...prevVideos, ...Object.values(snapshot.val())]);
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }

        }

        fetchVideos();

    }, [page]);

    return {
        loading, error, videos, hasMore
    };

}

export default useVideoList;
