import {DynaPuff} from 'next/font/google';
import {GiTicTacToe} from "react-icons/gi";

const dynaPuffFont = DynaPuff({
    subsets: ['latin'],
    weight: '500'
});

export default function Home() {
    return (
        <div className={dynaPuffFont.className}>
            <div>
                <GiTicTacToe className={'text-9xl text-blue-800'}/>
            </div>
        </div>
    );
}
