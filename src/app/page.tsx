"use client";
import React from "react";
import "./globals.css";
import SignInForm from "./components/SignInForm";
import VerificationAlert from "./components/VerificationAlert";

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
