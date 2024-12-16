import {DynaPuff} from 'next/font/google';

const dynaPuffFont = DynaPuff({
    subsets: ['latin'],
    weight: '500'
});

export default function Home() {
    return (
        <div className={dynaPuffFont.className}>Home Page</div>
    );
}
