import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import { JetBrains_Mono } from 'next/font/google';

export const metadata: Metadata = {
    title: "Tic Tac Toe game",
    description: "developed by Amirhossein Emadi"
};

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: '600'
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={jetBrainsMono.className}>
            <body>
                {children}
            </body>
        </html>
    );
}
