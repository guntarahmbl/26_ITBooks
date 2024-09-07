"use client";
import React from "react";
import dynamic from 'next/dynamic';
import "./globals.css";
import SignInForm from "./components/SignInForm";

// Dynamically import VerificationAlert with SSR disabled
const VerificationAlert = dynamic(() => import('./components/VerificationAlert'), {
  ssr: false,
});

export default function Home() {
  return ( 
    <main className="flex h-screen flex-col items-center w-[80%]">
      <>
        <VerificationAlert />
        <SignInForm />
      </>
    </main>
  );
}
