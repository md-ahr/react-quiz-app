import _ from 'lodash';
import { useHistory, useParams } from 'react-router-dom';
import Analysis from '../components/Analysis';
import Summary from '../components/Summary';
import useAnswers from '../hooks/useAnswers';

const Result = () => {

  const { id } = useParams();
  const { location } = useHistory();
  const { state } = location;
  const { qna } = state;

  const { loading, error, answers } = useAnswers(id);

  const calculate = () => {
    let score = 0;
    answers.forEach((question, index1) => {
      let correctIndexes = [];
      let checkedIndexes = [];
      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });
    return score;
  }

  const useScore = calculate();

  return (
    <>
      {loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
      {error && <div style={{ textAlign: 'center' }}>Thare was an error!</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary score={useScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}

export default Result;
