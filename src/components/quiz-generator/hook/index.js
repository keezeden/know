import axios from 'axios';
import { useState, useEffect } from 'react';
import { useApp } from '../../app-context';

const useQuizGenerator = ({ setCount }) => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isUpdated, setUpdated] = useState(true);

  const [index, setIndex] = useState(0);

  const { settings } = useApp();

  const { difficulty = null, type = null, category = null } = settings;

  const next = wasAnswer => {
    setCount(count => (wasAnswer ? (count += 1) : 0));

    if (index === questions.length - 1) fetchQuestions();
    setIndex(i => (i += 1));
  };

  const fetchQuestions = async () => {
    setIndex(0);
    let apiUrl = `https://opentdb.com/api.php?amount=5`;

    if (difficulty && difficulty !== 'any') apiUrl = apiUrl + `&difficulty=${difficulty}`;
    if (type && type !== 'any') apiUrl = apiUrl + `&type=${type}`;
    if (category && category !== 'any') apiUrl = apiUrl + `&category=${category}`;

    setLoading(true);
    const {
      data: { results }
    } = await axios.get(apiUrl);

    setQuestions(results);
    setLoading(false);
    setUpdated(true);
  };

  useEffect(() => {
    fetchQuestions();
  }, [settings, isUpdated]);

  return { questions, isLoading, index, next };
};

export { useQuizGenerator };
