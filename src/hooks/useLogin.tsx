import { useState } from 'react';
import { LoginInfo } from '@/types/LoginInfo.ts';
import * as React from 'react';
import { postAuthToken } from '@/query/postAuthToken.ts';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {

    const { mutate: login } = useMutation({
        mutationFn: postAuthToken,
        onSuccess: (token) => {
            console.log('Token:', token);
        },
    });


    const [logInData, setLogInData] = useState<LoginInfo>({
        username: '',
        password: '',
    });

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
        login(logInData)
    };


    return {
        onChangeName,
        onPasswordChange,
        handleSubmit,
        logIn: logInData,
    };
};
