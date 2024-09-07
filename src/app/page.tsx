"use client";
import React from "react";
import {useSession} from "next-auth/react";
import ChooseRole from "./components/ChooseRole";
import "./globals.css";
import SignIn from "./components/signin";
export default function Home() {
  const { data:session } = useSession();

  return ( 
    <main className="flex h-screen flex-col items-center w-[80%]">

      {session ? (
        <ChooseRole />
      ):(
        <SignIn/>
      )}

    </main>
    
  );
}
