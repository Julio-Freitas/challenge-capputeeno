import { useState } from "react";

export function useLocationStorage<T>(key: string = "") {
  const getValueLocal = window.localStorage?.getItem(key);
  const [value, setValue] = useState(
    key ? JSON.parse(getValueLocal ?? "{}") : ""
  );
  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
