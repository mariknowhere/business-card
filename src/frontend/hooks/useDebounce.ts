import {useCallback, useRef} from "react";

export const useDebounce = (callback, delay) => {
    const timer = useRef<number>();

    return useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = window.setTimeout(() => {
            callback(...args);
        }, delay)
    }, [callback, delay]);
}