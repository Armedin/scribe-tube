import loadScript from 'load-script';

export const loadSdk = () => {
  return new Promise((resolve, reject) => {
    if (
      typeof window.YT === 'object' &&
      typeof window.YT.ready === 'function'
    ) {
      // A YouTube SDK is already loaded, so reuse that
      resolve(window.YT);
      return;
    }

    loadScript('https://www.youtube.com/iframe_api', err => {
      if (err) {
        reject(err);
      }
    });

    window.onYouTubeIframeAPIReady = () => {
      resolve(window.YT);
    };
  });
};
