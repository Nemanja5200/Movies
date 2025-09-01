import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

interface UseUrlStateOptions {
    storageKey?: string;
    defaultValue?: number;
    paramName?: string;
}

export const useUrlState = (options: UseUrlStateOptions = {}) => {
    const {
        storageKey = 'url-state',
        defaultValue = 1,
        paramName = 'page',
    } = options;

    const [searchParams, setSearchParams] = useSearchParams();
    const isUpdatingRef = useRef(false);

    const getInitialValue = (): number => {
        const urlValue = searchParams.get(paramName);
        if (urlValue) {
            const parsed = parseInt(urlValue, 10);
            if (parsed > 0) return parsed;
        }

        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const parsed = parseInt(saved, 10);
                if (parsed > 0) return parsed;
            }
        }

        return defaultValue;
    };

    const [value, setValue] = useState(getInitialValue);

    useEffect(() => {
        if (isUpdatingRef.current) {
            isUpdatingRef.current = false;
            return;
        }

        const urlValue = searchParams.get(paramName);
        const urlNum = urlValue ? parseInt(urlValue, 10) : defaultValue;

        if (urlNum !== value && urlNum > 0) {
            setValue(urlNum);
        }
    }, [searchParams, paramName, defaultValue]);

    const updateValue = useCallback(
        (newValue: number) => {
            const validValue = Math.max(1, newValue);
            setValue(validValue);

            if (typeof window !== 'undefined') {
                localStorage.setItem(storageKey, validValue.toString());
            }

            isUpdatingRef.current = true;
            const newParams = new URLSearchParams(searchParams);

            if (validValue === defaultValue) {
                newParams.delete(paramName);
            } else {
                newParams.set(paramName, validValue.toString());
            }

            setSearchParams(newParams);
        },
        [storageKey, searchParams, setSearchParams, paramName, defaultValue]
    );

    const clearValue = useCallback(() => {
        setValue(defaultValue);

        if (typeof window !== 'undefined') {
            localStorage.removeItem(storageKey);
        }

        isUpdatingRef.current = true;
        const newParams = new URLSearchParams(searchParams);
        newParams.delete(paramName);
        setSearchParams(newParams);
    }, [defaultValue, storageKey, searchParams, setSearchParams, paramName]);

    return [value, updateValue, clearValue] as const;
};
