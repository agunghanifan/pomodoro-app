// src/pages/auth/signing.tsx
import {signIn, useSession} from 'next-auth/react';
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Signing() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push('/protected').then();
        }
    }, [session, router]);

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={() => signIn('google', { callbackUrl: '/protected' })}>
                Sign in with Google
            </button>
        </div>
    );
}
