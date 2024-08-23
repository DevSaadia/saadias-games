import { get } from 'http';
import React from 'react'

interface SquareProps {
    letter: string;
    letterStatus: 'incorrect' | 'correct' | 'present';
}
const Square: React.FC<SquareProps> = ({ letter, letterStatus }) => {
    const statusToColorClass = {
        incorrect: 'bg-[#909090]',
        correct: 'bg-[#19caca]',
        present: 'bg-[#FFC40C]',
    };
    const getBackgroundColor = () => {
        if (letter === '') {
            return 'bg-white';
        }
        switch (letterStatus) {
            case 'correct':
                return 'bg-green-500';
            case 'present':
                return 'bg-yellow-500';
            case 'incorrect':
                return 'bg-gray-500';
            default:
                return 'bg-white';
        }
    };
    return (
        <div className={`
            font-semibold
            text-black
            ${getBackgroundColor()}
            p-2
            flex
            w-14
            text-2xl
            rounded-md
            bg-white
            h-14
            border-4 
            border-[#F24C8A]
            items-center 
            justify-center
            `}>
            {letter}
        </div>
    )
}

export default Square