import { FC, useCallback } from 'react';
import {
    Avatar,
    DropdownContainer,
    DropdownMenu,
    LogoutItem,
    UserButton,
} from '@/components/UserDropdown/styles/UserDropdown.style';
import { useAuth } from '@/context/Auth/useAuth';
import { useDropdown } from '@/hooks/useDropdown.tsx';

export const UserDropdown: FC = () => {
    const { user, logout } = useAuth();
    const { isOpen, dropdownRef, toggleDropdown, closeDropdown } =
        useDropdown();

    const handleLogout = useCallback(() => {
        closeDropdown();
        logout();
    }, [logout, closeDropdown]);

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
