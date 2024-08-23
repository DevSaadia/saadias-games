'use client'
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import { Work_Sans } from "next/font/google";
import { useState } from 'react';
import WordleHowToPlayModal from '../components/WordleHowToPlayModal';
import Image from 'next/image';

const GameOfSquids = localFont({
    src: '../fonts/Game-Of-Squids.otf',

});
const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });


const Wordle = () => {
    return (
        <div className=" flex flex-col min-h-screen items-center justify-center bg-[#FFF5FE] bg-[url('/images/tex-1.jpg')] bg-blend-screen">
            <WordleHowToPlayModal />
            <div className="mb-10">
                <Image src="/images/wordle-squidgame.png" width={500} height={500} alt={""} />
            </div>
            WHAT & apos;S THE WORD ?: IN - DEVELOPMENT. < br /> PLEASE CHECK BACK SOON!
        </div >
    )
}

export default Wordle