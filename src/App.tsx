import { GlobalStyles } from '@/components/styles/GlobalStyles.ts';
import { Header } from '@/components/Header';
import { Home } from './pages/Home';

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Home />
        </>
    );
}

export default App;
