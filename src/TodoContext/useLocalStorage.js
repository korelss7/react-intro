import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initialValue = JSON.parse(saved);
  return initialValue || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log("Render useLocalStorage");
  }, [key, value]);

  return [value, setValue];
};

export const useLocalStorageExtra = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        setValue(() => getStorageValue(key, defaultValue));
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveValue = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { value, saveValue, loading, error };
};
