import React from 'react'

interface SquareProps {
    letter: string;
}

const Square: React.FC<SquareProps> = ({ letter }) => {
    return (
        <div className={`
            font-bold
            text-black
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