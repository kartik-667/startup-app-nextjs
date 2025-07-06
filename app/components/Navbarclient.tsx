// "use client";

import { signIn, signOut } from "@/auth";
import Link from 'next/link';

export default function NavbarClient({ session }) {
    return (
        <div className='flex text-black items-center gap-5 p-1 '>
            {session && session.user ? (
                <>
                    <Link href="/startup/create">
                        <span>Create</span>
                    </Link>
                    <form action={async ()=>{
                        "use server"

                        await signOut({redirectTo:"/"})
                    }}>
                        <button className="cursor-pointer">
                            <span>Sign Out</span>
                        </button>


                    </form>
                    <Link href={`/user/${session.user.id}`}>
                        <span>{session.user.name}</span>
                    </Link>
                </>
            ) : (
                <form action={async ()=>{
                    "use server"

                    await signIn("github")
                }}>
                <button className="cursor-pointer" type="submit">
                    <span>Sign In</span>
                </button>

                </form>
            )}
        </div>
    );
}
