"use client";
import Link from "next/link";
import React from "react";
import {useSession, signOut} from "next-auth/react";
import "../globals.css";

export default function Home() {
  const { data:session } = useSession();

  return ( 
    <main className="flex h-screen flex-col items-center w-[80%]">
    </main>
  );
}
