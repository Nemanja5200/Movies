import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

interface UseDropdownReturn {
    isOpen: boolean;
    dropdownRef: RefObject<HTMLDivElement | null>;
    toggleDropdown: () => void;
    closeDropdown: () => void;
    openDropdown: () => void;
}

export const useDropdown = (): UseDropdownReturn => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const toggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const closeDropdown = useCallback(() => {
        setIsOpen(false);
    }, []);

    const openDropdown = useCallback(() => {
        setIsOpen(true);
    }, []);

    return {
        isOpen,
        dropdownRef,
        toggleDropdown,
        closeDropdown,
        openDropdown,
    };
};
