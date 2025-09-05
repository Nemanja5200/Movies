// AuthContext.ts
import { createContext } from 'react';
import { User } from '@/types/User.ts';

interface AuthContextType {
    token: string | null;
    user: User | null;
    isAuth: boolean;
    refreshAuth: () => void;
    logout: () => void;
    login: (newToken: string, userData?: User) => void;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);
