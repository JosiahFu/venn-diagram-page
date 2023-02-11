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
            lorem.generateParagraphs(1),
            lorem.generateParagraphs(1),
            lorem.generateParagraphs(1),
            lorem.generateParagraphs(1),
        ];
    }

    return (
        <main>
            <Venn processInput={processInput} options={[
                ['a', 'b', 'c', 'd'],
                ['a', 'b', 'c', 'd'],
                ['a', 'b', 'c', 'd'],
                ['a', 'b', 'c', 'd'],
            ]} />
        </main>
    );
}

export default App;
