import React, { useState } from 'react';
import './App.css';

function Circle({input, setInput, output}: {
    input: string;
    setInput: (input: string) => void;
    output: string;
}) {
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    return (
        <div className="circle">
            <input value={input} onInput={handleInput} />
            <span className="output">{output}</span>
        </div>
    );
}

function App() {
    const [activated, setActivated] = useState(false);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    return (
        <main>
            <div className={activated ? 'circles activated' : 'circles'}>
                <Circle input={input1} setInput={setInput1} output='Option 1' />
                <Circle input={input2} setInput={setInput2} output='Option 2' />
                <Circle input={input3} setInput={setInput3} output='Option 3' />
                <Circle input={input4} setInput={setInput4} output='Option 4' />
            </div>
            <div className="button" onClick={() => setActivated(true)}>Press</div>
        </main>
    );
}

export default App;
