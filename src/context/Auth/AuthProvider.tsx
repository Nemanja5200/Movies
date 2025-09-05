import { User } from '@/types/User.ts';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserOptions } from '@/queryOptions/getUserOptions.ts';
import { AuthContext } from './AuthContext.ts';

// Create a custom event for auth changes
const AUTH_CHANGE_EVENT = 'auth-state-changed';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const queryClient = useQueryClient();

    const getTokenFromCookie = () => {
        const match = document.cookie.match(/authToken=([^;]+)/);
        return match ? match[1] : null;
    };

    const [token, setToken] = useState<string | null>(getTokenFromCookie);
    const [user, setUser] = useState<User | null>(() => {
        const stored = localStorage.getItem('user');
        return stored ? JSON.parse(stored) : null;
    });

    const updateAuthState = useCallback(() => {
        const currentToken = getTokenFromCookie();

        if (currentToken !== token) {
            setToken(currentToken);

            if (!currentToken) {
                setUser(null);
                localStorage.removeItem('user');
                queryClient.clear();
            } else {
                setUser(null);
                localStorage.removeItem('user');
            }
        }
    }, [token, queryClient]);

    useEffect(() => {
        window.addEventListener(AUTH_CHANGE_EVENT, updateAuthState);

        return () => {
            window.removeEventListener(AUTH_CHANGE_EVENT, updateAuthState);
        };
    }, [updateAuthState]);

    useEffect(() => {
        const interval = setInterval(updateAuthState, 2000);
        return () => clearInterval(interval);
    }, [updateAuthState]);

    const { data, isLoading } = useQuery({
        ...getUserOptions(token as string),
        enabled: !!token && !user,
        staleTime: 1000 * 60 * 60,
        retry: 1,
    });

    useEffect(() => {
        if (data) {
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
        }
    }, [data]);

    const isAuth = !!token && !!user;

    const logout = useCallback(() => {
        setToken(null);
        setUser(null);
        document.cookie = 'authToken=; path=/; max-age=0; SameSite=Lax';
        localStorage.removeItem('user');
        queryClient.clear();

        window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
    }, [queryClient]);

    const login = useCallback((newToken: string, userData?: User) => {
        document.cookie = `authToken=${newToken}; path=/; max-age=30 ; SameSite=Lax`;

        setToken(newToken);

        if (userData) {
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
        }

        window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
    }, []);

    const refreshAuth = useCallback(() => {
        updateAuthState();
    }, [updateAuthState]);

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                isAuth,
                logout,
                login,
                refreshAuth,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };
