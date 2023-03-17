export const formatCount = (count: number) => {
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
    maximumSignificantDigits: 3,
  });

  return formatter.format(count);
};
