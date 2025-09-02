import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce.ts';
import * as React from 'react';

export const useSearchTerm = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return {
        searchTerm,
        debouncedSearchTerm,
        handleChange,
    };
};
