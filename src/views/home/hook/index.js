import { useState } from 'react';

const useHome = () => {
  const [selectedQuizType, selectQuizType] = useState();

  return { selectedQuizType, selectQuizType };
};

export { useHome };
