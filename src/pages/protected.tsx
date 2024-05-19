// src/pages/protected.tsx
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signing').then();
        }
    }, [status, router]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session) {
        return (
            <div>
                <h1>You are not signed in</h1>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome, {session.user?.name}</p>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    );
}
