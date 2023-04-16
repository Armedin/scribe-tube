import { SvgIcon, SvgIconProps } from '@mui/material';

const SvgComponent = (props: any) => {
  return (
    <svg
      width="16px"
      height="16px"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      {...props}
    >
      <path
        d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

const ArrowRight = (props: SvgIconProps) => {
  return <SvgIcon component={SvgComponent} {...props} inheritViewBox />;
};

export default ArrowRight;
