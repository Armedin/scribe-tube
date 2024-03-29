import { useState } from 'react';
import Button from '../base/Button';
import Menu from '../base/Menu';
import MenuItem from '../base/MenuItem';
import ChevronDown from '../icons/ChevronDown';

const SwitchLanguage = ({
  languages,
  onChange,
}: {
  languages: string[];
  onChange: (lang: string) => void;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (
    event: Event | React.SyntheticEvent,
    language: string
  ) => {
    if (anchorEl && anchorEl.contains(event.target as HTMLElement)) {
      return;
    }

    setAnchorEl(null);
    onChange(language);
  };

  return (
    <>
      <Button
        sx={{
          height: 22,
          padding: '5px 6px',
          fontSize: 12,
          lineHeight: 1,
          minWidth: 'auto',
          border: '1px solid var(--colors-gray7)',
          color: 'var(--colors-gray10)',
          background: 'transparent',
          svg: {
            fontSize: 11,
            lineHeight: 1,
            height: 10,
            ml: 0.25,
          },
          '&:hover': {
            color: 'var(--colors-gray11)',
          },
        }}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Switch
        <ChevronDown />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PopperProps={{ placement: 'bottom-start' }}
        style={{ marginTop: '6px' }}
      >
        {languages.map(lang => (
          <MenuItem
            key={lang}
            onClick={(event: any) => handleOptionClick(event, lang)}
          >
            {lang}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SwitchLanguage;
