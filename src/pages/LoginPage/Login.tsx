import { FC } from 'react';
import {
    ErrorMessage,
    FormContainer,
    HeaderStyle,
    Input,
    InputGroup,
    Label,
    LoginButton,
    LoginPageContainer,
    PageWrapper,
    SubHeader,
} from '@/pages/LoginPage/styles/LoginPage.style.ts';
import { useLogin } from '@/hooks/useLogin.tsx';
import { ClipLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { LoginInfo } from '@/types/LoginInfo.ts';

export const Login: FC = () => {
    const {
        handleSubmit: handleLoginSubmit,
        isError,
        errorMessage,
        isPending,
    } = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInfo>();

    const onSubmit = (data: LoginInfo) => {
        handleLoginSubmit(data);
    };

    return (
        <PageWrapper>
            <LoginPageContainer>
                <HeaderStyle>LogIn</HeaderStyle>
                <SubHeader>Sign in to continue to your account</SubHeader>
                <ClipLoader color="#667eea" loading={isPending} size={50} />
                {isError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    {/*{Name}*/}
                    <InputGroup>
                        <Label htmlFor="email">Username</Label>
                        <Input
                            type="text"
                            id="name"
                            placeholder="Enter your Username"
                            {...register('username', {
                                required: 'Username is required',
                            })}
                        />
                        {errors.username && (
                            <ErrorMessage>
                                {errors.username.message}
                            </ErrorMessage>
                        )}
                    </InputGroup>

                    {/*{Password}*/}
                    <InputGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            {...register('password', {
                                required: 'Pasword is required',
                                minLength: {
                                    value: 6,
                                    message:
                                        'Password must be at least 6 characters',
                                },
                            })}
                        />
                        {errors.password && (
                            <ErrorMessage>
                                {errors.password.message}
                            </ErrorMessage>
                        )}
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="code">Code</Label>
                        <Input
                            type="number"
                            id="code"
                            placeholder="Enter your Code"
                            {...register('code', {
                                minLength: {
                                    value: 5,
                                    message: 'Code must be exactly 5 digits',
                                },
                                maxLength: {
                                    value: 5,
                                    message: 'Code must be exactly 5 digits',
                                },
                            })}
                        />
                        {errors.code && (
                            <ErrorMessage>{errors.code.message}</ErrorMessage>
                        )}
                    </InputGroup>

                    {/*{Login}*/}
                    <LoginButton type="submit">Sing in</LoginButton>
                </FormContainer>
            </LoginPageContainer>
        </PageWrapper>
    );
};
