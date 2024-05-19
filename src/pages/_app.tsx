// src/pages/_app.tsx
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '../app/globals.css'; // Adjust the path to your global CSS file if necessary

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <div className={inter.className}>
                <Component {...pageProps} />
            </div>
        </SessionProvider>
    );
}

export default MyApp;
