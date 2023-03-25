import React, { useEffect, useState } from 'react';
import Omnibar from './Omnibar';

interface OmnibarContext {
  isActive: boolean;
  value: string;
  highlightIndex: number;
  matchCount: number;

  setIsActive: any;
  setValue: (value: string) => void;
  setHighlightIndex: (index: number) => void;
  setMatchCount: (count: number) => void;
}

interface OmnibarContextProps {
  children?: React.ReactNode;
}

const OmnibarContext = React.createContext<OmnibarContext | null>(null);

export const OmnibarProvider = ({ children }: OmnibarContextProps) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [matchCount, setMatchCount] = useState(0);

  useEffect(() => {
    if (!value) {
      setMatchCount(0);
    }

    setHighlightIndex(0);
  }, [value]);

  return (
    <OmnibarContext.Provider
      value={{
        isActive,
        value,
        highlightIndex,
        matchCount,
        setIsActive,
        setValue,
        setHighlightIndex,
        setMatchCount,
      }}
    >
      <Omnibar />
      {children}
    </OmnibarContext.Provider>
  );
};

export const useOmnibar = () => {
  const context = React.useContext(OmnibarContext);
  return context!;
};
