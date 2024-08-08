// src/hooks/useContinuousTypewriter.js
import { useEffect, useState } from 'react';

const useContinuousTypewriter = (words, typeSpeed = 50, deleteSpeed = 40, delaySpeed = 1000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const type = () => {
      const currentWord = words[wordIndex];
      setText((prev) => {
        if (!isDeleting) {
          if (prev.length < currentWord.length) {
            timeout = setTimeout(type, typeSpeed);
            return currentWord.slice(0, prev.length + 1);
          } else {
            timeout = setTimeout(() => setIsDeleting(true), delaySpeed);
          }
        } else {
          if (prev.length > 0) {
            timeout = setTimeout(type, deleteSpeed);
            return currentWord.slice(0, prev.length - 1);
          } else {
            setIsDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            timeout = setTimeout(type, typeSpeed);
          }
        }
        return prev;
      });
    };

    timeout = setTimeout(type, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return { text };
};

export default useContinuousTypewriter;
