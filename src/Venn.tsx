import React, { useState } from 'react';
import './Venn.css';

type stringSet = readonly [string, string, string, string];

function Dropdown({options, value, setValue}: {
    options: string[],
    value: string,
    setValue: (value: string) => void
}) {
    const [expanded, setExpanded] = useState(false);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div className="dropdown">
            <input
                value={value}
                onChange={handleInput}
                onFocus={() => setExpanded(true)}
                onBlur={() => setTimeout(() => setExpanded(false), 100)} // Required for some reason?
            />
            {expanded && <div className="dropdown-option-list">
                {options
                    .filter(e => e.includes(value))
                    .map((e, i) => <div
                        key={i}
                        className="dropdown-option"
                        onClick={() => setValue(e)}>{e}
                    </div>)}
            </div>}
        </div>
    )
}

function Circle({input, setInput, output, options}: {
    input: string,
    setInput: (input: string) => void,
    output: string,
    options: string[]
}) {

    return (
        <div className="circle">
            <Dropdown options={options} value={input} setValue={setInput} />
            <div className="output">{output}</div>
        </div>
    );
}

function Venn({options, processInput}: {
    options: [string[], string[], string[], string[]],
    processInput: (input: stringSet) => stringSet
}) {
    const [activated, setActivated] = useState(false);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [output, setOutput] = useState<stringSet>(['','','','']);
    
    const handleClick = () => {
        setActivated(true);
        // Set outputs here
        setOutput(processInput([input1, input2, input3, input4]))
    }

    return (
        <div className={activated ? 'venn activated' : 'venn'}>
            <div className="circles">
                <Circle input={input1} setInput={setInput1} output={output[0]} options={options[0]} />
                <Circle input={input2} setInput={setInput2} output={output[1]} options={options[1]} />
                <Circle input={input3} setInput={setInput3} output={output[2]} options={options[2]} />
                <Circle input={input4} setInput={setInput4} output={output[3]} options={options[3]} />
            </div>
            <div className="button" onClick={handleClick}>Press</div>
        </div>
    );
}

export default Venn;
export type { stringSet };
