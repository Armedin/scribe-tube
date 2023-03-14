import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import clsx from 'clsx';

export interface SkeletonProps {
  animation?: 'pulse' | 'wave' | 'shimmer' | false;
  children?: React.ReactNode;
  className?: string;
  variant?: 'circle' | 'rectangle' | 'text' | 'pill';
  height?: number | string;
  width?: number | string;
  style?: any;
}

const shimmerKeyframe = keyframes`
  0% {
    background-position: calc(250px*-1) 0;
  }
  100% {
    background-position: 250px 0;
  }
`;

const pulseKeyframe = keyframes`
0% {
  opacity: 1;
}
50% {
  opacity: 0.4;
}
100% {
  opacity: 1;
}
`;

const SkeletonRoot = styled('span')<SkeletonProps>(props => ({
  display: 'block',
  height: '1em',

  ...(props.variant === 'text' && {
    borderRadius: '4px',
  }),
  ...(props.variant === 'circle' && {
    borderRadius: '50%',
  }),
  ...(props.variant === 'pill' && {
    borderRadius: '999px',
  }),
  ...(props.animation === 'pulse' && {
    background: '#2c2c2e',
    animation: `${pulseKeyframe} 1.5s ease-in-out infinite forwards`,
  }),
  ...(props.animation === 'shimmer' && {
    backgroundImage: 'linear-gradient(90deg,#2c2c2e 0,#39393b 50%,#2c2c2e)',
    backgroundSize: 'calc(250px*2) calc(250px/2)',
    animation: `${shimmerKeyframe} 1.5s linear infinite forwards`,
  }),
}));

const Skeleton = ({
  animation = 'shimmer',
  className,
  height,
  width,
  variant = 'text',
  style,
  children,
}: SkeletonProps) => {
  return (
    <SkeletonRoot
      className={clsx(
        `Skeleton--${animation}`,
        `Skeleton--${variant}`,
        className
      )}
      animation={animation}
      variant={variant}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {children}
    </SkeletonRoot>
  );
};

export default Skeleton;
