import { useCallback, useState } from 'react';

export function useToggle(defaultValue?: boolean) {
    const [open, setShow] = useState(!!defaultValue);
    const setToggle = useCallback((value: boolean) => {
        setShow(value);
    }, []);

    return {
        open,
        setToggle
    };
}
