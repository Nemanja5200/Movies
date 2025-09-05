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

export const Login: FC = () => {
    const {
        onPasswordChange,
        onChangeName,
        handleSubmit,
        isError,
        errorMessage,
        isPending,
    } = useLogin();

    return (
        <PageWrapper>
            <LoginPageContainer>
                <HeaderStyle>LogIn</HeaderStyle>
                <SubHeader>Sign in to continue to your account</SubHeader>
                <ClipLoader color="#667eea" loading={isPending} size={50} />
                {isError && errorMessage.includes('401') ? (
                    <ErrorMessage>Incorrect Email or password </ErrorMessage>
                ) : null}
                {isError && errorMessage.includes('Network Error') ? (
                    <ErrorMessage>Server Connection Error </ErrorMessage>
                ) : null}
                <FormContainer onSubmit={handleSubmit}>
                    {/*{Name}*/}
                    <InputGroup>
                        <Label htmlFor="email">Username</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your Username"
                            required
                            onChange={onChangeName}
                        />
                    </InputGroup>

                    {/*{Password}*/}
                    <InputGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={onPasswordChange}
                            required
                        />
                    </InputGroup>

                    {/*{Login}*/}
                    <LoginButton type="submit">Sing in</LoginButton>
                </FormContainer>
            </LoginPageContainer>
        </PageWrapper>
    );
};
