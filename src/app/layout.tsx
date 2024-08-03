import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./css/globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "ITMD 504 – Final Project",
    description: "Final project for ITMD 504 Programming and Application Foundations",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
