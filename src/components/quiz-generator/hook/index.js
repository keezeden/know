import axios from 'axios';
import { useState, useEffect } from 'react';

const QUIZ_URL = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';

const useQuizGenerator = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      if (questions.length) return;

      const {
        data: { results }
      } = await axios.get(QUIZ_URL);

      setQuestions(results);
    })();
  }, []);

  return { questions };
};

export { useQuizGenerator };
