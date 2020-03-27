import React from 'react';
import './App.css';

import StopWatch from './components/StopWatch/StopWatch';

function App() {
    return (
        <div className="App">
            <header className="timer-wrap">
                <StopWatch/>
            </header>
        </div>
    );
}

export default App;
