export const getRandomChar = (charset: string): string => {
  const index = Math.floor(Math.random() * charset.length);
  return charset[index];
};
