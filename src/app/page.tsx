"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {useSession, signOut} from "next-auth/react";
import Signup from "../../components/signin";
import {redirect} from "next/navigation"
export default function Home() {
  const { data:session } = useSession();
  console.log(session)
  return (
    // temporary solution before login page gets added
    <Link href="/catalog" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Catalog
    </Link>

    <main className="flex h-screen flex-col items-center w-[80%]">
      {session ? (
        <div>
          <h1>Welcome {JSON.stringify(session)}</h1>
          <button onClick={() => signOut()}>sign out</button>
        </div>
      ):(
        <Signup />
      )}
      
    </main>
  );
}
