import { SvgIcon, SvgIconProps } from '@mui/material';

const SvgComponent = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
      <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3 54.6 342.7c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25-6.2 6.2-14.4 9.3-22.6 9.3z" />
    </svg>
  );
};

const ChevronUp = (props: SvgIconProps) => {
  return <SvgIcon component={SvgComponent} {...props} inheritViewBox />;
};

export default ChevronUp;
