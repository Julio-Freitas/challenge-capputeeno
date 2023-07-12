"use client";

import { useEffect, useState } from "react";

export function useLocationStorage<T>(key: string = "", initialValue: T) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let value = localStorage.getItem(key);
    if (value) setValue(JSON.parse(value));
  }, [key]);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
