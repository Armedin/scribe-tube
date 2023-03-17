import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';
import Xmark from '../icons/Xmark';
import { useOmnibar } from './OmnibarContext';
import ToolbarActionButton from './ToolbarActionButton';

const Omnibar = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const {
    isActive,
    setHighlightIndex,
    highlightIndex,
    matchCount,
    setValue,
    setIsActive,
  } = useOmnibar();

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setValue(value);
  };

  const handleInputKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (matchCount <= 1) {
        return;
      }

      highlightNextOrPrev(e.shiftKey ? 'prev' : 'next');
    }
  };

  const highlightNextOrPrev = (direction: 'prev' | 'next') => {
    const activeIndex =
      direction === 'next'
        ? (highlightIndex + 1) % matchCount
        : (highlightIndex - 1 + matchCount) % matchCount;

    setHighlightIndex(activeIndex);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsActive(false);
      }

      if (e.key === 'f' && e.metaKey) {
        e.preventDefault();
        setIsActive((prev: boolean) => !prev);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      setHighlightIndex(0);
      inputRef.current?.select();
    }
  }, [isActive]);

  return (
    <Box
      sx={{
        position: 'fixed',
        right: '50%',
        left: '50%',
        top: '48px',
        transform: 'translate(-50%) translateY(-64px)',
        width: 296,
        height: 48,
        borderRadius: '8px',
        background: 'var(--colors-gray2)',
        border: '1px solid var(--colors-gray1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition:
          'transform .2s ease,opacity .2s ease,-webkit-transform .2s ease',
        zIndex: 999,
        opacity: 0,
        ...(isActive && {
          transform: 'translate(-50%, -50%)',
          opacity: 1,
        }),
      }}
    >
      <Box
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        component="input"
        placeholder="Search text..."
        autoComplete="off"
        spellCheck={false}
        sx={{
          fontFamily: 'Outfit',
          width: 160,
          height: 40,
          background: 0,
          padding: '0 8px 0 16px',
          border: 0,
          outline: 0,
          color: 'var(--colors-gray12)',
          fontSize: 14,
          fontWeight: 300,
          '&:focus': {
            outline: 0,
          },
          '&::placeholder': {
            color: 'var(--colors-gray9)',
          },
        }}
      />

      <Box sx={{ fontSize: 13, color: '#e9ecef', lineHeight: 1 }}>
        {matchCount > 0 ? `${highlightIndex + 1}/${matchCount}` : '0/0'}
      </Box>

      <Box
        sx={{
          width: '1px',
          height: 20,
          background: 'var(--colors-gray6)',
          margin: '0 12px',
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingRight: '16px',
          '.Omnibar-button:not(:first-child)': { marginLeft: '4px' },
        }}
      >
        <ToolbarActionButton onClick={() => highlightNextOrPrev('prev')}>
          <ChevronUp />
        </ToolbarActionButton>
        <ToolbarActionButton onClick={() => highlightNextOrPrev('next')}>
          <ChevronDown />
        </ToolbarActionButton>
        <ToolbarActionButton onClick={() => setIsActive(false)}>
          <Xmark />
        </ToolbarActionButton>
      </Box>
    </Box>
  );
};

export default Omnibar;
