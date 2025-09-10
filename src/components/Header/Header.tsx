import { HeaderStyle } from '@/components/Header/styles/Header.style.ts';
import { LogoStyle } from '@/components/Header/styles/Logo.style.ts';
import { FC } from 'react';
import { TabStyle } from '@/components/Header/styles/Tab.style.ts';
import { LoginButtonStyle } from '@/components/Header/styles/LoginButton.style.ts';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/Auth/useAuth.ts';
import { UserDropdown } from '@/components/UserDropdown/userDropdown.tsx';
import { RoutePath } from '@/utils/constants/routes.ts';

export const Header: FC = () => {
    const navigate = useNavigate();
    const { isAuth } = useAuth();
    return (
        <>
            <HeaderStyle>
                <LogoStyle>
                    <Link to={RoutePath.HOME}>MOVIES</Link>
                </LogoStyle>
                <TabStyle>
                    <Link to={RoutePath.HOME}>HOME</Link>
                    {isAuth ? <Link to={RoutePath.CHART}>CHART</Link> : null}
                </TabStyle>
                {isAuth ? (
                    <UserDropdown />
                ) : (
                    <TabStyle>
                        <LoginButtonStyle onClick={() => navigate(RoutePath.LOGIN)}>
                            Login
                        </LoginButtonStyle>
                    </TabStyle>
                )}
            </HeaderStyle>
        </>
    );
};
