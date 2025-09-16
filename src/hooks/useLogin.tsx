import { useState } from 'react';
import { LoginInfo } from '@/types/LoginInfo.ts';
import * as React from 'react';
import { postAuthToken } from '@/query/postAuthToken.ts';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { getUserOptions } from '@/queryOptions/getUserOptions.ts';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/Auth/useAuth.ts';
import { RoutePath } from '@/utils/constants/routes.ts';
import { getErrorMessage } from '@/utils/Routs/MapErrorMessages.ts';

export const useLogin = () => {
    const queryClient = new QueryClient();
    const navigate = useNavigate();

    const { login: loginAuth } = useAuth();

    const { mutate: login, isPending } = useMutation({
        mutationFn: postAuthToken,
        onSuccess: async (token: string) => {
            const userData = await queryClient.fetchQuery(
                getUserOptions(token)
            );
            loginAuth(token, userData);

            navigate(RoutePath.HOME);
        },

        onError: error => {
            setIsError(true);
            setErrorMessage(
                getErrorMessage(error.message.toString()) ||
                    'Something went wrong'
            );
        },
    });

    const [logInData, setLogInData] = useState<LoginInfo>({
        username: '',
        password: '',
        code: 0,
    });

    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogInData(prevState => ({
            ...prevState,
            username: e.target.value,
        }));
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogInData(prevState => ({
            ...prevState,
            password: e.target.value,
        }));
    };

    const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogInData(prevState => ({
            ...prevState,
            code: Number(e.target.value),
        }));
    };

    const validateForm = (): boolean => {
        if (!logInData.username.trim()) {
            setIsError(true);
            setErrorMessage('Username is required');
            return false;
        }

        if (!logInData.password) {
            setIsError(true);
            setErrorMessage('Password is required');
            return false;
        }

        if (
            !logInData.code ||
            isNaN(logInData.code) ||
            logInData.code < 10000 ||
            logInData.code > 99999
        ) {
            setIsError(true);
            setErrorMessage('Code must be a 5-digit number');
            return false;
        }

        return true;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isError) setIsError(false);

        if (!validateForm()) {
            return;
        }

        login(logInData);
    };

    return {
        onChangeName,
        onPasswordChange,
        handleSubmit,
        onCodeChange,
        isPending,
        errorMessage,
        isError,
        logIn: logInData,
    };
};
