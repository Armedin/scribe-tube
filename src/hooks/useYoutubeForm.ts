import matchYoutubeUrl from '@/utils/match-youtube-link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useYoutubeForm = () => {
  const [youtubeLink, setYoutubeLink] = useState('');
  const router = useRouter();

  const handleInputChange = (e: any) => {
    setYoutubeLink(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!matchYoutubeUrl(youtubeLink)) {
      alert('Please enter a valid youtube link');
      return;
    }

    let youtubeId = '';
    if (youtubeLink.includes('be/')) {
      youtubeId = youtubeLink.split('be/')[1];
    } else {
      youtubeId = youtubeLink.split('?v=')[1];
    }

    router.push(`/v/${youtubeId}`);
    setYoutubeLink('');

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return {
    youtubeLink,
    handleInputChange,
    handleSubmit,
  };
};
