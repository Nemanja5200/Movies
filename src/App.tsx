import { GlobalStyles } from '@/components/styles/GlobalStyles.ts';
import { Header } from '@/components/Header';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/LoginPage/Login.tsx';
import { RoutePath } from '@/utils/constants/routes.ts';
import { ProtectedRoute } from '@/utils/ProtectedRoute.tsx';
import { Chart } from '@/pages/Chart';


function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path={RoutePath.HOME} element={<Home />} />
                <Route path={RoutePath.LOGIN} element={<Login />} />
                <Route element={<ProtectedRoute />}>
                    <Route path={RoutePath.CHART} element={<Chart />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
