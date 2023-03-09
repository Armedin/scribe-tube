import { Box } from '@mui/material';

const ProductHuntBanner = () => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        borderRadius: '999px',
        display: 'inline-block',
        position: 'relative',
      }}
    >
      <Box
        className="GlowingBox-mask"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          mask: 'linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          pointerEvents: 'none',
          padding: '1px',
          borderRadius: '999px',
        }}
      >
        <Box
          className="GlowingBox-root"
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            width: '100%',
            backgroundImage:
              'conic-gradient(from 0 at 50% 50%,rgba(255,255,255,.5) 0deg,rgba(255,255,255,0) 60deg,rgba(255,255,255,0) 310deg,rgba(255,255,255,.5) 360deg)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            animation: 'rotateWithTranslate 4s infinite linear',
            ':before': {
              content: '""',
              float: 'left',
              paddingTop: '100%',
            },
          }}
        />
      </Box>
      <Box
        sx={{
          borderRadius: '999px',
          padding: '3px 24px',
          fontSize: 14,
          border: '1px solid rgba(255,255,255,.1)',
          color: 'rgba(255,255,255,0.75)',
          fontWeight: 400,
          // background:
          //   'radial-gradient(107.5% 107.5% at 50% 215%,rgba(255,255,255,.24) 0%,rgba(255,255,255,0) 100%),rgba(255,255,255,.04)',
        }}
      >
        ✨ We're live on Product Hunt! We'd love your support.
      </Box>
    </Box>
  );
};

export default ProductHuntBanner;
