import {Dispatch, SetStateAction, useEffect, useState} from 'react';

function getStorageValue(key: string, defaultValue: string = ''): string {
  // getting stored value
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    return saved || defaultValue;
  }
  return 's';
}

export const useLocalStorage = (
  key: string,
  defaultValue: string = '',
): [string, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, String(value));
  }, [key, value]);

  return [value, setValue];
};
