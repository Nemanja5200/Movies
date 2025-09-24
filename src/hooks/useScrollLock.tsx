import { useEffect } from 'react';

export const useScrollLock = (isLocked: boolean) => {
    useEffect(() => {
        if (!isLocked) return;

        const scrollY = window.scrollY;

        const bodyStyles = {
            overflow: 'hidden',
            position: 'fixed',
            top: `-${scrollY}px`,
            width: '100%',
        };

        Object.assign(document.body.style, bodyStyles);

        return () => {
            const revertStyles = {
                overflow: '',
                position: '',
                top: '',
                width: '',
            };
            Object.assign(document.body.style, revertStyles);
        };
    }, [isLocked]);
};
