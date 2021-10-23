import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const useQuestions = (videoID) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        async function fetchQuestions() {

            const db = getDatabase();
            const quizeRef = ref(db, `quiz/${videoID}/questions`);
            const questionQuery = query(quizeRef, orderByKey());

            try {
                setLoading(true);
                setError(false);
                const snapshot = await get(questionQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => [...prevQuestions, ...Object.values(snapshot.val())]);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }

        }

        fetchQuestions();

    }, [videoID]);

    return {
        loading, error, questions
    };

}

export default useQuestions;
