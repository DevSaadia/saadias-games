'use client'
import { useState } from 'react'
import localFont from 'next/font/local';
import Image from 'next/image';


const GameOfSquids = localFont({
    src: '../fonts/Game-Of-Squids.otf',
});

const TicTacToe = () => {

    const [turn, setTurn] = useState('{');
    const [board, setboard] = useState(Array(9).fill(''));
    const toggleTurn = () => {
        setTurn(prevTurn => (prevTurn === '{' ? 'O' : '{'));
        console.log(turn);
    };

    const buttons = Array.from({ length: 9 }, (_, index) => (
        <button
            key={index}
            value=''
            className={`border border-[#ffa9ca] w-32 h-32 bg-white ${GameOfSquids.className} hover:bg-slate-100 text-[#f24c8a] text-9xl`}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { e.currentTarget.innerText = turn; (e.currentTarget as HTMLButtonElement).disabled = true; toggleTurn(); }}
        >

        </button>
    ));
    return (
        <div className=' flex min-h-screen items-center justify-center flex-col bg-[#FFF5FE] bg-[url("/images/tex-1.jpg")] bg-blend-overlay'>
            Don&#39;t Cross Me: IN-DEVELOPMENT. <br /> PLEASE CHECK BACK SOON!
            <div>tic tac toe</div>
            <div className={`${GameOfSquids.className} text-4xl`}>
                <p>tic</p>
                <p>tac</p>
                <p>toe</p>
            </div>
            {/* <div>
                <div>
                    <Image src="/images/tic-text.png" width={100} height={100} alt={""} />
                </div>
                <div>
                    <Image src="/images/tac-text.png" width={100} height={100} alt={""} />
                </div>
                <div>
                    <Image src="/images/toe-text.png" width={100} height={100} alt={""} />
                </div>

            </div> */}

            <div className={`${GameOfSquids.className} text-4xl mb-2`}>{turn}<span className=''>: go!</span></div>

            <div className='grid grid-cols-3 grid-rows-3 border-8 border-[#f24c8a]'>
                {buttons}
            </div>
            {/* TODO: add winner statement : who is the winner */}
        </div>
    )
}

export default TicTacToe