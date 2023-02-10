import React from 'react';
import './App.css';
import Venn, { stringSet } from './Venn';

function App() {
    const processInput = (input: stringSet): stringSet => {
        return ['Option 1', 'Option 2', 'Option 3', 'Option 4']
    }

    return (
        <main>
            <Venn processInput={processInput}/>
        </main>
    );
}

export default App;
