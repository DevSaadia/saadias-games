import React from 'react'
import { Inter } from "next/font/google";
import WordleExampleSquare from './WordleExampleSquare';

const inter = Inter({ subsets: ["latin"] });
interface WordleExampleProps {
  colour: string;
  word: string;
  index: number;
}
const WordleExample: React.FC<WordleExampleProps> = ({ colour, word, index }) => {
  const word_array = word.split('');
  return (
    <div className="flex flex-row gap-1">
      {word_array.map((letter, i) => {
        const bgColour = i === index ? colour : 'white';
        return (<WordleExampleSquare key={i} colour={bgColour} letter={letter} />)
      }

      )}
    </div>
  )
}

export default WordleExample