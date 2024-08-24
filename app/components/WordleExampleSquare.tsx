import React from 'react'
interface WordleExampleSquareProps {
    colour: string;
    letter: string;
}
const WordleExampleSquare: React.FC<WordleExampleSquareProps> = ({ colour, letter }) => {
    return (

        <div
            style={{ backgroundColor: `#${colour}` }}
            className=
            {`
            font-extrabold
            p-2
            flex
            w-10 
            h-10
            border-4 
            border-[#F24C8A]
            rounded-sm
            items-center 
            justify-center
            `}
        >
            {letter}
        </div>
    )
}

export default WordleExampleSquare