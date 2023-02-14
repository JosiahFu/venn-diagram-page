import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import './App.css';
import Venn, { stringSet } from './Venn';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 4,
        min: 2
    },
    wordsPerSentence: {
        max: 10,
        min: 8
    }
});

function App() {
    const processInput = (input: stringSet): stringSet => {
        return [
            'Exponential Function in Video Games: Have students analyze the way exponential functions are used in video games, such as in scoring systems or character growth. They can then create their own video game using exponential functions, incorporating programming skills to bring the game to life.',
            'Engineering Design Challenge: Have students design and build a system using exponential functions, such as a solar panel array or a machine that performs a task exponentially faster over time. Students can use programming to control and monitor the performance of their system.',
            'Function Transformations in Physics: Have students explore how exponential functions can model real-world phenomena, such as radioactive decay or the spread of a disease. They can then use function transformations and programming skills to analyze and predict these processes.',
            'Cost-Benefit Analysis for Business: Have students use exponential functions to model the costs and benefits of a new product or technology. They can then use programming skills to create interactive visualizations or simulations to communicate their findings.'
        ];
    }

    return (
        <main>
            <Venn processInput={processInput} options={[
                ['Video Games', 'Sports', 'Music', 'Electronics'],
                ['EKS 1 - Linear Functions', 'EKS 2 - Exponential Functions', 'EKS 3 - Logarithmic Functions', 'EKS 4 - Rational Functions'],
                ['Computer Engineer', 'Data Scientist', 'Computer Programmer'],
                ['Data specialists pro sports', 'Programming', 'Storytelling with data']
            ]} />
        </main>
    );
}

export default App;
