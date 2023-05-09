import styled from '@emotion/styled';
import React from 'react';

export interface TextareaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'children' | 'rows'
  > {
  ref?: React.Ref<HTMLTextAreaElement>;
  maxRows?: string | number;
  minRows?: string | number;
}

const TextareaRoot = styled('textarea')({
  outline: 'none',
  color: 'rgb(195 195 195)',
  border: '1px solid var(--colors-gray2)',
  background: 'var(--colors-gray2)',
  WebkitAppearance: 'none',
  padding: '8px 12px',
  fontFamily: 'inherit',
  fontSize: 14,
  width: '100%',
  display: 'block',
  borderRadius: '8px',
  lineHeight: 1.4,
  minWidth: 0,
  resize: 'none',
  height: 'auto',
  '&:focus': {
    outline: 0,
    boxShadow: '#0b0d0f 0px 0px 0px 3px, var(--colors-gray6) 0px 0px 0px 5px',
    // borderColor: 'var(--colors-gray8)',
  },
  '&::placeholder': {
    opacity: 1,
    color: 'var(--colors-gray8)',
  },
});

const Textarea = (props: any) => {
  const { maxRows, minRows = 3, style, value, ...other } = props;
  return <TextareaRoot value={value} rows={Number(minRows)} {...other} />;
};

export default Textarea;
