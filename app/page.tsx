import {DynaPuff} from 'next/font/google';
import {GiTicTacToe} from "react-icons/gi";
import {HiMiniComputerDesktop} from "react-icons/hi2";
import {CgBoy} from "react-icons/cg";
import ButtonWithIcon from "@/app/components/ButtonWithIcon";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const dynaPuffFont = DynaPuff({
    subsets: ['latin'],
    weight: '500'
});

export default function Home() {
    return (
        <div>
            <div className={'p-2 flex gap-2 items-center text-lg mb-12 flex-wrap'}>
                <span className={'p-2 text-blue-800 underline ' +
                    'underline-offset-8'}>Choose a game mode</span>
                <IoIosArrowDroprightCircle className={'text-xl'}/>
                <span className={'p-2 text-gray-400 cursor-no-drop'}>
                    Insert information</span>
                <IoIosArrowDroprightCircle className={'text-xl'}/>
                <span className={'p-2 text-gray-400 cursor-no-drop'}>
                    Start the game!</span>
            </div>
            <div className={'flex flex-col gap-6'}>
                <GiTicTacToe className={'text-[17rem] text-blue-800 block mx-auto'}/>
                <h1 className={`${dynaPuffFont.className} text-6xl text-blue-600 
                tracking-wider text-center`}>Tic Tac Toe</h1>
                <div className={'flex flex-wrap justify-center p-2 gap-2'}>
                    <ButtonWithIcon
                        icon={<CgBoy className={'text-4xl'}/>}
                        text="play with human"/>
                    <ButtonWithIcon
                        icon={<HiMiniComputerDesktop className={'text-4xl'}/>}
                        text="play with computer"/>
                </div>
            </div>
        </div>
    );
}
