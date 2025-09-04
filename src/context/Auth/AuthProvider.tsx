import { User } from '@/types/User.ts';
import { ReactNode, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserOptions } from '@/queryOptions/getUserOptions.ts';
import { AuthContext } from './AuthContext.ts';
import { useLocation } from 'react-router-dom';


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const location = useLocation(); 

    useEffect(() => {
        const match = document.cookie.match(/authToken=([^;]+)/);
        if (match) {
            setToken(match[1]);
        } else {
            setToken(null);
        }
    }, [location]);

    const { data } = useQuery({
        ...getUserOptions(token as string),
        enabled: !!token,
    });

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data]);


    const isAuth = !!token && !!user;

    const logout = () => {
        setToken(null);
        setUser(null);
        document.cookie = 'authToken=; path=/; max-age=0';
    };

    return (
        <AuthContext.Provider value={{ token, user, isAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext };

