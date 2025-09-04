import { useState } from 'react';
import { LoginInfo } from '@/types/LoginInfo.ts';
import * as React from 'react';
import { postAuthToken } from '@/query/postAuthToken.ts';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
    const { mutate: login, isPending } = useMutation({
        mutationFn: postAuthToken,
        onSuccess: token => {
            console.log('Token:', token);
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
