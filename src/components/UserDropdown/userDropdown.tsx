import { FC, useEffect, useRef, useState, useCallback } from 'react';
import {
    Avatar,
    DropdownContainer,
    DropdownMenu,
    LogoutItem,
    UserButton,
} from '@/components/UserDropdown/styles/UserDropdown.style';
import { useAuth } from '@/context/Auth/useAuth';

export const UserDropdown: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { user, logout, refreshAuth } = useAuth();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () =>
                document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen]);

    const handleLogout = useCallback(() => {
        setIsOpen(false);
        refreshAuth();
        logout();
    }, [logout, refreshAuth]);

    const toggleDropdown = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <DropdownContainer ref={dropdownRef}>
            <UserButton
                onClick={toggleDropdown}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="User menu"
            >
                <Avatar aria-hidden="true">
                    {user?.image ? (
                        <img
                            src={user?.image}
                            alt={user?.username || 'User avatar'}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 'inherit',
                            }}
                        />
                    ) : null}
                </Avatar>
                <span>{user?.username || 'User'}</span>
            </UserButton>

            <DropdownMenu $isOpen={isOpen} role="menu" aria-hidden={!isOpen}>
                <LogoutItem
                    onClick={handleLogout}
                    role="menuitem"
                    tabIndex={isOpen ? 0 : -1}
                >
                    Logout
                </LogoutItem>
            </DropdownMenu>
        </DropdownContainer>
    );
};
