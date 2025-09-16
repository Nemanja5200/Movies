import { GlobalStyles } from '@/components/styles/GlobalStyles.ts';
import { Header } from '@/components/Header';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/LoginPage/Login.tsx';
import { RoutePath } from '@/utils/constants/routes.ts';
import { ProtectedRoute } from '@/utils/ProtectedRoute.tsx';
import { Chart } from '@/pages/Chart';
import { Details } from '@/pages/Details';
import { HistoryWidget } from '@/components/HistoryWidget';
import { useWidgetVisibility } from '@/hooks/Widget/useWidgetVisibility.tsx';
import { LoginRoute } from '@/utils/Routs/LoginRoute.tsx';

function App() {
    const shouldShowWidget = useWidgetVisibility();

    return (
        <>
            <GlobalStyles />
            <Header />
            {shouldShowWidget && <HistoryWidget />}
            <Routes>
                <Route path={RoutePath.HOME} element={<Home />} />
                <Route element={<LoginRoute />}>
                    <Route path={RoutePath.LOGIN} element={<Login />} />
                </Route>
                <Route path={RoutePath.DETAILS} element={<Details />} />
                <Route element={<ProtectedRoute />}>
                    <Route path={RoutePath.CHART} element={<Chart />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
