"use client";
import React from "react";
import {useSession} from "next-auth/react";
import ChooseRole from "./components/ChooseRole";
import "./globals.css";
import SignInForm from "./components/SignInForm";
import VerificationAlert from "./components/VerificationAlert";

export default function Home() {
  const { data:session } = useSession();

  return ( 
    <main className="flex h-screen flex-col items-center w-[80%]">

      {session ? (
        <ChooseRole />
      ):(
        <>
          <VerificationAlert />
          <SignInForm />
        </>
      )}

    </main>
    
  );
}
