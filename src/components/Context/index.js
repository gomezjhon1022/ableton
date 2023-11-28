import React from 'react'
import { useState } from 'react';

const AbletonContext = React.createContext();

function AbletonProvider({children}) {
  const [language, setLanguage]=useState('en');
  return (
    <AbletonContext.Provider value={{
      language,
      setLanguage
      }}>
      {children}
    </AbletonContext.Provider>
  );
}

export { AbletonContext, AbletonProvider }