import { useState } from 'react';
import { LoginInfo } from '@/types/LoginInfo.ts';
import * as React from 'react';
import { postAuthToken } from '@/query/postAuthToken.ts';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { getUserOptions } from '@/queryOptions/getUserOptions.ts';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const queryClient = new QueryClient();
    const navigate = useNavigate();
    const { mutate: login, isPending } = useMutation({
        mutationFn: postAuthToken,
        onSuccess: async (token: string) => {
            document.cookie = `authToken=${token}; path=/; max-age=604800; SameSite=Strict`;
            console.log(token);
            await queryClient.fetchQuery(getUserOptions(token));
            navigate('/');
        },

        onError: error => {
            setIsError(true);
            setErrorMessage(error.message.toString() || 'Something went wrong');
        },
    });

    const [logInData, setLogInData] = useState<LoginInfo>({
        username: '',
        password: '',
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isError) setIsError(false);
        login(logInData);
    };

    return {
        onChangeName,
        onPasswordChange,
        handleSubmit,
        isPending,
        errorMessage,
        isError,
        logIn: logInData,
    };
};
