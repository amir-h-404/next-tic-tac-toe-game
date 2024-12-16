import {DynaPuff} from 'next/font/google';
import {GiTicTacToe} from "react-icons/gi";

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
            </div>
        </div>
    );
}
