import { HeaderStyle } from '@/components/Header/styles/Header.style.ts';
import { LogoStyle } from '@/components/Header/styles/Logo.style.ts';
import { FC } from 'react';
import { TabStyle } from '@/components/Header/styles/Tab.style.ts';
import { LoginButtonStyle } from '@/components/Header/styles/LoginButton.style.ts';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/Auth/useAuth.ts';

export const Header: FC = () => {
    const navigate = useNavigate();
    const { isAuth } = useAuth();
    return (
        <>
            <HeaderStyle>
                <LogoStyle>
                    <Link to="/">MOVIES</Link>
                </LogoStyle>
                <TabStyle>
                    <Link to="/">HOME</Link>
                    {isAuth? <Link to="/chart">CHART</Link>:null}
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
