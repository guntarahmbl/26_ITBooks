"use client";
import React from "react";
import {useSession, signOut} from "next-auth/react";
import Signup from "../../components/signin";
import {redirect} from "next/navigation"
export default function Home() {
  const { data:session } = useSession();
  console.log(session)
  return (
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
