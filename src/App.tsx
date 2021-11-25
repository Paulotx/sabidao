import { BrowserRouter } from 'react-router-dom';

import AppRoutes from "./routes";
import { PlayersProvider } from "./hooks/usePlayer";
import { QuestionsProvider } from "./hooks/useQuestions";
import { GlobalStyle } from "./styles/global";

export function App() {
    return (
        <BrowserRouter>
            <PlayersProvider>
                <QuestionsProvider>
                    <AppRoutes />
                    <GlobalStyle />
                </QuestionsProvider>
            </PlayersProvider>
        </BrowserRouter>
    );
}