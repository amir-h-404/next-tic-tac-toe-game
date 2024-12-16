import {DynaPuff} from 'next/font/google';
import {GiTicTacToe} from "react-icons/gi";
import {HiMiniComputerDesktop} from "react-icons/hi2";
import {CgBoy} from "react-icons/cg";
import ButtonWithIcon from "@/app/components/ButtonWithIcon";

const dynaPuffFont = DynaPuff({
    subsets: ['latin'],
    weight: '500'
});

export default function Home() {
    return (
        <div>
            <div>
                <GiTicTacToe className={'text-[14rem] text-blue-800'}/>
                <h1 className={`${dynaPuffFont.className} text-5xl text-blue-600 
                tracking-wider`}>Tic Tac Toe</h1>
                <div className={'flex flex-wrap justify-center p-2 gap-2'}>
                    <ButtonWithIcon icon={<CgBoy/>} text="play with human"/>
                    <ButtonWithIcon
                        icon={<HiMiniComputerDesktop/>}
                        text="play with computer"/>
                </div>
            </div>
        </div>
    );
}
