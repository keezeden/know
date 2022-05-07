import axios from 'axios';
import { useState, useEffect } from 'react';

const QUIZ_URL = 'https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple';

const useQuizGenerator = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);

  const next = () => setIndex(i => (i += 1));

  useEffect(() => {
    (async () => {
      if (questions.length) return;

      const {
        data: { results }
      } = await axios.get(QUIZ_URL);

      setQuestions(results);
    })();
  }, []);

  return { questions, index, next };
};

export { useQuizGenerator };
