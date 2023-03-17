export const calculateReadingTime = (text: string) => {
  const wpm = 225;
  const words = wordsCount(text);
  const time = Math.ceil(words / wpm);

  return time;
};

export const capitaliseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const removeNewLines = (str: string) => {
  return str.replace(/\r?\n|\r/g, ' ');
};

const removePunctuation = (text: string) => {
  return text.replace(
    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g,
    ''
  );
};

export const wordsCount = (text: string) => {
  const words = removePunctuation(text).split(/,| |\n|\r/g);
  return words.length;
};
