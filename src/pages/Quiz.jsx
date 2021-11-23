import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Answers from '../components/Answers';
import MiniPlayer from '../components/MiniPlayer';
import ProgressBar from '../components/ProgressBar';
import { useAuth } from '../contexts/AuthContext';
import useQuestions from '../hooks/useQuestions';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      action.value.forEach(question => {
        question.options.forEach(option => {
          option.checked = false;
        });
      });
      return action.value;
    case 'answer':
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked = action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {

  const {id} = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const history = useHistory();
  const videoTitle = history.location.state.videoTitle;

  useEffect(() => {
    dispatch({ type: 'questions', value: questions });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({ type: 'answer', questionID: currentQuestion, optionIndex: index, value: e.target.checked });
  }

  const nextQuestion = () => {
    if (currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  };

  const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  const submitQuestion = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result${uid}`);
    set(resultRef, {
      [id]: qna,
    });
    history.push({ pathname: `/result/${id}`, state: { qna } });
  }

  return (
    <>
      {loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
      {error && <div style={{ textAlign: 'center' }}>Thare was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers input options={qna[currentQuestion].options} handleChange={handleAnswerChange} />
          <ProgressBar next={nextQuestion} prev={prevQuestion} progress={percentage} submit={submitQuestion} />
          <MiniPlayer id={id} title={videoTitle} />
        </>
      )}
    </>
  );
}

export default Quiz;
