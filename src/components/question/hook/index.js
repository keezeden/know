import he from 'he';
import { useState, useEffect } from 'react';
import { shuffle } from '../../../utilities';

const useQuestion = (question, onAnswer) => {
  const [reveal, setReveal] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  // category: "Entertainment: Video Games"
  // correct_answer: "5"
  // difficulty: "easy"
  // incorrect_answers: (3) ['4', '3', '6']
  // question: "How many games in the Crash Bandicoot series were released on the original Playstation?"
  // type: "multiple"
  const { question: title, correct_answer: right, incorrect_answers: wrongs } = question;

  const formatter = text => he.decode(text);

  const rightData = { text: formatter(right), answer: true };
  const wrongDatas = wrongs.map(w => ({ text: formatter(w), answer: false }));

  useEffect(() => {
    const shuffled = shuffle([rightData, ...wrongDatas]);
    setAnswers(shuffled);
  }, [question]);

  const formattedTitle = formatter(title);

  const onClick = (wasAnswer, index) => {
    setReveal(true);
    setSelectedIndex(index);
    setTimeout(() => {
      setReveal(false);
      onAnswer(wasAnswer);
      setSelectedIndex(null);
    }, 3 * 1000);
  };

  const wasSelected = index => {
    return index === selectedIndex;
  };

  return { title: formattedTitle, answers, onClick, reveal, wasSelected };
};

export { useQuestion };
