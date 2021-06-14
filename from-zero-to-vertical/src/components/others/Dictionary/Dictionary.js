import React, { createContext, useContext } from 'react';
import dictionary from '@src/model/dictionary/dictionary';
const { _t } = dictionary;

const Dictionary = createContext(null);

export default function DictionaryProvider({ children }) {
  return (
    <Dictionary.Provider value={_t}>
      {children}
    </Dictionary.Provider>
  );
}

export const useDictionary = () => useContext(Dictionary);
