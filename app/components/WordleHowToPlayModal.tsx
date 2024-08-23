'use client'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react';
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import { Work_Sans } from "next/font/google";
import WordleExample from './WordleExample';

const GameOfSquids = localFont({
    src: '../fonts/Game-Of-Squids.otf',

});
const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });

const WordleHowToPlayModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
    return (
        <><Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader className='text-4xl'> How To Play</ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody className={`${workSans.className}`}>
                    Guess the Wordle in 6 tries.
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '5px' }}>
                        <li>Each guess must be a valid 5-letter word.</li>
                        <li>The colour of the tiles will change to show how close your guess was to the word.</li>
                    </ul>
                    <strong><div className='mb-1'>Examples</div></strong>
                    <div className='mb-2'>
                        <WordleExample colour='19caca' word="DREAM" index={0}></WordleExample>
                        <strong>D</strong> is in the word and in the correct spot.
                    </div>
                    <div className='mb-2'>
                        <WordleExample colour='FFC40C' word="GIVEN" index={1}></WordleExample>
                        <strong>I</strong> is in the word but in the wrong spot.
                    </div>
                    <div className='mb-2'>
                        <WordleExample colour='909090' word="ARGUE" index={3}></WordleExample>
                        <strong>U</strong> is not in the word in any spot.
                    </div>



                </ModalBody>

                <ModalFooter>
                    <button
                        className={`
                    bg-[#F24C8A]
                    text-white 
                    p-2
                    rounded-md 
                    px-4
                    font-bold
                    ${GameOfSquids.className}
                    hover:bg-[#DE2268]
                    active:bg-[#AC2155]
                    transition
                    ease-in-out
                    duration-300 
                    `}
                        onClick={onClose}
                    >
                        Got it!
                    </button>

                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                </ModalFooter>
            </ModalContent>
        </Modal></>
    )
}

export default WordleHowToPlayModal