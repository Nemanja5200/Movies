import { GlobalStyles } from '@/components/styles/GlobalStyles.ts';
import { Header } from '@/components/Header';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/LoginPage/Login.tsx';
import { RoutePath } from '@/utils/constants/routes.ts';
import { Details } from '@/pages/Details';

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path={RoutePath.HOME} element={<Home />} />
                <Route path={RoutePath.LOGIN} element={<Login />} />
                <Route path={RoutePath.DETAILS} element={<Details />} />
            </Routes>
        </>
    );
}

export default App;
