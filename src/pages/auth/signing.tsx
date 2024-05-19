// src/pages/auth/signing.tsx
import { signIn } from 'next-auth/react';

export default function Signing() {
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={() => signIn('google', { callbackUrl: '/protected' })}>
                Sign in with Google
            </button>
        </div>
    );
}
