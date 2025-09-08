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

    // Store functions for stability
    const serializeRef = useRef(serialize);
    const deserializeRef = useRef(deserialize);
    const validateRef = useRef(validate);

    useEffect(() => {
        serializeRef.current = serialize;
        deserializeRef.current = deserialize;
        validateRef.current = validate;
    }, [serialize, deserialize, validate]);

    const getInitialValue = (): T => {
        const urlValue = searchParams.get(paramName);
        if (urlValue) {
            const parsed = deserializeRef.current(urlValue);
            if (parsed !== null && validateRef.current(parsed)) {
                return parsed;
            }
        }

        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const parsed = deserializeRef.current(saved);
                if (parsed !== null && validateRef.current(parsed)) {
                    return parsed;
                }
            }
        }

        return defaultValue;
    };

    const [value, setValue] = useState<T>(getInitialValue);

    const urlParamValue = searchParams.get(paramName);

    useEffect(() => {
        if (isUpdatingRef.current) {
            isUpdatingRef.current = false;
            return;
        }

        if (urlParamValue) {
            const parsed = deserializeRef.current(urlParamValue);
            if (parsed !== null && validateRef.current(parsed)) {
                const currentSerialized = serializeRef.current(value);
                const parsedSerialized = serializeRef.current(parsed);
                if (currentSerialized !== parsedSerialized) {
                    setValue(parsed);
                }
            }
        }
    }, [urlParamValue, paramName, value]);

    const updateValue = useCallback(
        (newValue: T) => {
            if (!validateRef.current(newValue)) return;

            setValue(newValue);

            if (typeof window !== 'undefined') {
                localStorage.setItem(
                    storageKey,
                    serializeRef.current(newValue)
                );
            }

            isUpdatingRef.current = true;
            const newParams = new URLSearchParams(searchParams);

            if (
                serializeRef.current(newValue) ===
                serializeRef.current(defaultValue)
            ) {
                newParams.delete(paramName);
            } else {
                newParams.set(paramName, serializeRef.current(newValue));
            }

            setSearchParams(newParams);
        },

        [searchParams, defaultValue, setSearchParams, storageKey, paramName]
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
    }, [defaultValue, searchParams, paramName, setSearchParams, storageKey]);

    return [value, updateValue, clearValue] as const;
};
