
import React from 'react'
import Square from './Square'

interface GuessProps {
    word: string
}
const Guess: React.FC<GuessProps> = ({ word }) => {
    const letters = word.split('').concat(Array(5 - word.length).fill(''));


    return (
        <div className='flex flex-row gap-2 mb-2'>

            {
                letters.map((letter, index) => (<Square key={index} letter={letter} />))
            }
        </div>
    )
}

export default Guess