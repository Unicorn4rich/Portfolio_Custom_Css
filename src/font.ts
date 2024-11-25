import { Caveat, Inter } from 'next/font/google';


export const caveatFont = Caveat({
    subsets: ['latin'], // Choose the subsets you want to use
    weight: '400', // Choose font weights you want
    variable: '--font-caveat', // Define the CSS variable name
});


export const interFont = Inter({
    subsets: ['latin'], 
    weight: '400', 
    variable: '--font-inter',
});


