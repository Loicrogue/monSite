import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
// @ts-expect-error react
import React from 'react';

function App() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
}


export default App;
