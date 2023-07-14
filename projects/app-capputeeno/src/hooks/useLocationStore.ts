'use client';

import { useCallback, useEffect, useState } from 'react';

export function useLocationStorage<T>(key: string = '', initialValue?: T) {
    const [value, setValue] = useState(initialValue);

    const updateLocalStorage = useCallback(
        (newValue: T) => {
            setValue(newValue);
            localStorage.setItem(key, JSON.stringify(newValue));
        },
        [key]
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const value = localStorage.getItem(key);
        if (value) setValue(JSON.parse(value));
    }, [key]);

    return {
        value,
        updateLocalStorage
    };
}
