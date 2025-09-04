import { User } from '@/types/User.ts';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserOptions } from '@/queryOptions/getUserOptions.ts';

interface AuthContextType {
    token: string | null;
    user: User | null;
    isAuth: boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const match = document.cookie.match(/authToken=([^;]+)/);
        if (match) {
            setToken(match[1]);
        }
    }, []);

    const { data } = useQuery({
        ...getUserOptions(token as string),
        enabled: !!token,
    });

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data]);

    console.log(user);

    const isAuth = !!token && !!user;

    const logout = () => {
        setToken(null);
        setUser(null);
        document.cookie = 'authToken=; path=/; max-age=0';
    };

    return (
        <AuthContext.Provider value={{ token, user, logout, isAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
