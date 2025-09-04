import { FC } from 'react';
import {
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

export const Login: FC = () => {
    return (
        <PageWrapper>
            <LoginPageContainer>
                <HeaderStyle>LogIn</HeaderStyle>
                <SubHeader>Sign in to continue to your account</SubHeader>
                <FormContainer>
                    {/*{Email}*/}
                    <InputGroup>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            required
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
                            required
                        />
                    </InputGroup>

                    {/*{Login}*/}
                    <LoginButton>Sing in</LoginButton>
                </FormContainer>
            </LoginPageContainer>
        </PageWrapper>
    );
};
