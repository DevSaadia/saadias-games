
import React from 'react'
import Square from './Square'

interface GuessProps {
    guess: string;
    chosenWord: string;
}
const Guess: React.FC<GuessProps> = ({ guess, chosenWord }) => {
    const letters = guess.split('').concat(Array(5 - guess.length).fill(''));
    const getLetterStatus = (letter: string, index: number): 'correct' | 'present' | 'incorrect' => {
        if (chosenWord[index] === letter) {
            return 'correct';
        } else if (chosenWord.includes(letter)) {
            return 'present';
        } else {
            return 'incorrect';
        }
    };

    return (
        <div className='flex flex-row gap-2 mb-2'>

            {
                letters.map((letter, index) => (
                <Square 
                key={index} letter={letter} letterStatus={getLetterStatus(letter, index)} 
                />
            ))
            }
        </div>
    )
}

export default Guess