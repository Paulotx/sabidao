import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Start } from '../pages/Start';
import { Questions } from '../pages/Questions';
import { Result } from '../pages/Result';
import { Results } from '../pages/Results';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/start" element={<Start/>} />
            <Route path="/questions" element={<Questions/>} />
            <Route path="/result" element={<Result/>} />
            <Route path="/results" element={<Results/>} />
        </Routes>
    );
}

export default AppRoutes;