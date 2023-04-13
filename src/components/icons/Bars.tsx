import { SvgIcon, SvgIconProps } from '@mui/material';

const SvgComponent = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M0 80c0-8.84 7.164-16 16-16h416c8.8 0 16 7.16 16 16s-7.2 16-16 16H16C7.164 96 0 88.84 0 80zm64 160c0-8.8 7.16-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16zm368 176H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
    </svg>
  );
};

const Bars = (props: SvgIconProps) => {
  return <SvgIcon component={SvgComponent} {...props} inheritViewBox />;
};

export default Bars;
