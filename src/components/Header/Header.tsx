import { HeaderStyle } from '@/components/Header/styles/Header.style.ts';
import { LogoStyle } from '@/components/Header/styles/Logo.style.ts';
import { FC } from 'react';
import { TabStyle } from '@/components/Header/styles/Tab.style.ts';
import { LoginButtonStyle } from '@/components/Header/styles/LoginButton.style.ts';
import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <HeaderStyle>
                <LogoStyle>
                    <a href="/">MOVIES</a>
                </LogoStyle>
                <TabStyle>
                    <a href="/">HOME</a>
                    <a href="/chart">CHART</a>
                </TabStyle>
                <TabStyle>
                    <LoginButtonStyle onClick={() => navigate('/login')}>
                        Login
                    </LoginButtonStyle>
                </TabStyle>
            </HeaderStyle>
        </>
    );
};
