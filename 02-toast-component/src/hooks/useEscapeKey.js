import React from 'react';

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    window.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        callback();
      }
    });
    return () => {
      window.removeEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') {
          callback();
        }
      });
    };
  }, [callback]);
};
