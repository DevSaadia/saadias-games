'use client'
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import { Work_Sans } from "next/font/google";
import { useState } from 'react';
import WordleHowToPlayModal from '../components/WordleHowToPlayModal';
import Image from 'next/image';
import Guess from "../components/Guess";

const GameOfSquids = localFont({
    src: '../fonts/Game-Of-Squids.otf',

});
const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });


const Wordle = () => {
    const [chosenWord, setChosenWord] = useState<string>('HELLO');
    const [guessedWords, setGuessedWords] = useState<string[]>(Array(6).fill(''));
    const [guessedWord, setGuessedWord] = useState('');
    const [guessCount, setGuessCount] = useState(0);


    const checkGuess = (): void => {

        console.log("guesscount is" + guessCount);
        const newGuessedWords = [...guessedWords];
        newGuessedWords[guessCount] = guessedWord;
        setGuessedWords(newGuessedWords);

        setGuessCount(guessCount + 1);
        console.log("guesscount is" + guessCount);
    }
    return (
        <div className=" flex flex-col min-h-screen items-center justify-center bg-[#FFF5FE] bg-[url('/images/tex-1.jpg')] bg-blend-screen">
            <WordleHowToPlayModal />
            <div className="mb-10">
                <Image src="/images/wordle-squidgame.png" width={500} height={500} alt={""} />
            </div>
            <div className="flex flex-col items-center justify-center">
                {/* grid */}
                <div className={`mb-4 ${workSans.className}`}>
                    {guessedWords.map((word, index) => (<Guess key={index} guess={word} chosenWord={chosenWord} />))}
                </div>
                {/* input and submit button */}
                <div className="
                    flex 
                    justify-between 
                    gap-2 
                    w-full">
                    <input className={`border-4 pl-2 border-[#F24C8A] text-sm w-52 h-10 rounded-md ${workSans.className}`} type='text'
                        placeholder='Enter your guess here...'
                        value={guessedWord.toUpperCase()}
                        onChange={(e) => { setGuessedWord(e.target.value.toUpperCase()) }}
                    />
                    <button
                        className={`
                        ${workSans.className}
                        bg-[#F24C8A]
                        text-white 
                        p-2
                        px-4
                        font-semibold
                        rounded-md
                        hover:bg-[#DE2268]
                        active:bg-[#AC2155]
                        transition
                        ease-in-out
                        duration-300 
                        `}
                        onClick={() => checkGuess()}
                    >
                        submit
                    </button>

                </div>
            </div>
            {/* WHAT & apos;S THE WORD ?: IN - DEVELOPMENT. < br /> PLEASE CHECK BACK SOON! */}
        </div >
    )
}

export default Wordle