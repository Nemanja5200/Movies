import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

interface UseUrlStateOptions<T> {
    storageKey?: string;
    defaultValue: T;
    paramName?: string;
    serialize: (value: T) => string;
    deserialize: (value: string) => T | null;
    validate?: (value: T) => boolean;
}

export const useUrlState = <T,>(options: UseUrlStateOptions<T>) => {
    const {
        storageKey = 'url-state',
        defaultValue,
        paramName = 'page',
        serialize,
        deserialize,
        validate = () => true,
    } = options;

    const [searchParams, setSearchParams] = useSearchParams();
    const isUpdatingRef = useRef(false);

    const getInitialValue = (): T => {
        const urlValue = searchParams.get(paramName);
        if (urlValue) {
            const parsed = deserialize(urlValue);
            if (parsed !== null && validate(parsed)) {
                return parsed;
            }
        }

        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const parsed = deserialize(saved);
                if (parsed !== null && validate(parsed)) {
                    return parsed;
                }
            }
        }

        return defaultValue;
    };

    const [value, setValue] = useState<T>(getInitialValue);

    useEffect(() => {
        if (isUpdatingRef.current) {
            isUpdatingRef.current = false;
            return;
        }

        const urlValue = searchParams.get(paramName);
        if (urlValue) {
            const parsed = deserialize(urlValue);
            if (parsed !== null && validate(parsed) && parsed !== value) {
                setValue(parsed);
            }
        }
    }, [searchParams, paramName, defaultValue, value, deserialize, validate]);

    const updateValue = useCallback(
        (newValue: T) => {
            if (!validate(newValue)) return;

            setValue(newValue);

            if (typeof window !== 'undefined') {
                localStorage.setItem(storageKey, serialize(newValue));
            }

            isUpdatingRef.current = true;
            const newParams = new URLSearchParams(searchParams);

            if (serialize(newValue) === serialize(defaultValue)) {
                newParams.delete(paramName);
            } else {
                newParams.set(paramName, serialize(newValue));
            }

            setSearchParams(newParams);
        },
        [
            storageKey,
            searchParams,
            setSearchParams,
            paramName,
            defaultValue,
            serialize,
            validate,
        ]
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
