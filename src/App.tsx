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
    const [output, setOutput] = useState(['','','','']);
    
    const handleClick = () => {
        setActivated(true);
        // Set outputs here
        setOutput(['1', '2', '3', '4'])
    }

    return (
        <main>
            <div className={activated ? 'circles activated' : 'circles'}>
                <Circle input={input1} setInput={setInput1} output={output[0]} />
                <Circle input={input2} setInput={setInput2} output={output[1]} />
                <Circle input={input3} setInput={setInput3} output={output[2]} />
                <Circle input={input4} setInput={setInput4} output={output[3]} />
            </div>
            <div className="button" onClick={handleClick}>Press</div>
        </main>
    );
}

export default App;
