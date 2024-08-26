"use client";
import React from "react";
import {useSession} from "next-auth/react";
import Signup from "./components/signin";
import ChooseRole from "./components/ChooseRole";
import "./globals.css";

export default function Home() {
  const { data:session } = useSession();

  return ( 
    <main className="flex h-screen flex-col items-center w-[80%]">

      {session ? (
        <ChooseRole />
      ):(
        <Signup />
      )}

    </main>
    
  );
}
