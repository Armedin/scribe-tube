import { SvgIcon, SvgIconProps } from '@mui/material';

const SvgComponent = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
      <path d="M248.9 210.7c6.25 6.25 16.37 6.25 22.62 0s6.25-16.38 0-22.62c-36.25-36.25-99.5-36.25-135.7 0-37.42 37.44-37.42 98.31 0 135.8 18.12 18.13 42.23 28.12 67.87 28.12s49.75-9.1 67.87-28.12c6.25-6.25 6.25-16.38 0-22.62s-16.37-6.25-22.62 0c-24.19 24.19-66.31 24.19-90.5 0-24.95-24.94-24.95-65.56 0-90.5 24.16-24.16 66.36-24.16 90.46-.06zm192 0c6.25 6.25 16.37 6.25 22.62 0s6.25-16.38 0-22.62c-36.25-36.25-99.5-36.25-135.7 0-37.42 37.44-37.42 98.31 0 135.8 18.12 18.13 42.23 28.12 67.87 28.12 25.64 0 49.75-9.1 67.87-28.12 6.25-6.25 6.25-16.38 0-22.62s-16.37-6.25-22.62 0c-24.19 24.19-66.31 24.19-90.5 0-24.95-24.94-24.95-65.56 0-90.5 24.16-24.16 66.36-24.16 90.46-.06zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v320z" />
    </svg>
  );
};

const ClosedCaptioning = (props: SvgIconProps) => {
  return <SvgIcon component={SvgComponent} {...props} inheritViewBox />;
};

export default ClosedCaptioning;
