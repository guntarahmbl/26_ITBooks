"use client";
import React from "react";
import {useSession} from "next-auth/react";
import { useRouter } from "next/navigation";
import ChooseRole from "../components/ChooseRole";
import "./globals.css";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/');
    return null;
  }
  
  return ( 
    <main className="flex h-screen flex-col items-center w-[80%]">
        <ChooseRole />
    </main>
  );
}
