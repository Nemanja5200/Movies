import { GlobalStyles } from '@/components/styles/GlobalStyles.ts';
import { Header } from '@/components/Header';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/LoginPage/Login.tsx';

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
