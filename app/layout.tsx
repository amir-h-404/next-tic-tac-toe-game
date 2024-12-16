import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {JetBrains_Mono} from 'next/font/google';

export const metadata: Metadata = {
    title: "Tic Tac Toe game",
    description: "developed by Amirhossein Emadi"
};

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: '600'
});

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
    return (
        <html lang="en" className={jetBrainsMono.className}>
            <body>
                {children}
            </body>
        </html>
    );
}
export default RootLayout;
