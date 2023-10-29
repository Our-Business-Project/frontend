import { useState } from 'react';

export function useLocalStorage(key: string, initialValue: string = '') {
  const [storedValue, setStoredValue] = useState<string | object | undefined>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as object) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {}
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(undefined);
    } catch (error) {}
  };

  return { storedValue: storedValue?.toString(), setValue, removeValue };
}
