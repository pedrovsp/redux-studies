import React from 'react';
import './App.css';
import Range from './components/interval/Interval';
import Average from './components/average/Average';
import Random from './components/random/Random';
import Sum from './components/sum/Sum';

function App() {
    return (
        <div className="App">
            <h1>Redux Exercise</h1>
            <div>
                <Range></Range>
            </div>
            <div className="line">
                <Average></Average>
                <Random></Random>
                <Sum></Sum>
            </div>
        </div>
    );
}

export default App;
