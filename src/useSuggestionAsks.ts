import { useState } from 'react';
import { suggestionAsksData } from './suggestionAsks';

const QUANTITY_SUGGESTIONS = 2;

export const useSuggestionAsks = () => {
  const [suggestionAsks, setSuggestionsAsks] = useState(suggestionAsksData);

  const finishSuggestion = (suggestionFinished: string) => {
    setSuggestionsAsks((prev) => prev.filter((item) => item !== suggestionFinished));
  };

  return {
    finishSuggestion,
    suggestionAsks: suggestionAsks.slice(0, QUANTITY_SUGGESTIONS),
  };
};
