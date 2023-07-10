import { useState } from "react";

export function useLocationStorage<T>(key: string) {
    const [value, setValue] = useState(key ? JSON?.parse(localStorage.getItem(key)) ?? '' : '');
    const updateLocalStorage = (newValue:T) =>  {
        setValue(newValue);
        localStorage.setItem(key,JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}