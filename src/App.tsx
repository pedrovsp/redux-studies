import React from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { Interval } from './components/interval/Interval';

function App() {
    return (
        <div className="App">
            <h1>Redux Exercise</h1>
            <div className="line">
                <Interval></Interval>
            </div>
            <div className="line">
                <Card title="Card 1">X</Card>
            </div>
        </div>
    );
}

export default App;
