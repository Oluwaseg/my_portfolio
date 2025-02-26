import { useEffect, useState } from 'react';

export function useTypewriter(
  words: string[],
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000
) {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
        timeout = setTimeout(type, deletingSpeed);
      } else {
        if (displayedText === currentWord) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        } else {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
          timeout = setTimeout(type, typingSpeed);
        }
      }
    };

    timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return displayedText;
}
