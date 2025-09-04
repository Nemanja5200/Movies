// AuthContext.ts
import { createContext } from 'react';
import { User } from '@/types/User.ts';

interface AuthContextType {
    token: string | null;
    user: User | null;
    isAuth: boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);