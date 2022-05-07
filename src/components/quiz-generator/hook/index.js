import axios from 'axios';
import { useState, useEffect } from 'react';
import { useApp } from '../../app-context';

const useQuizGenerator = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const { settings } = useApp();

  const { difficulty = null, type = null, category = null } = settings;

  const next = () => setIndex(i => (i += 1));

  useEffect(() => {
    (async () => {
      let apiUrl = `https://opentdb.com/api.php?amount=50`;

      if (difficulty) apiUrl = apiUrl + `&difficulty=${difficulty}`;
      if (type) apiUrl = apiUrl + `&type=${type}`;
      if (category) apiUrl = apiUrl + `&category=${category}`;

      setLoading(true);
      const {
        data: { results }
      } = await axios.get(apiUrl);

      setQuestions(results);
      setLoading(false);
    })();
  }, [settings]);

  return { questions, isLoading, index, next };
};

export { useQuizGenerator };
