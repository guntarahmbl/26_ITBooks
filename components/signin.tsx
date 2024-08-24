"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("email", { email });
  };

  return (
    <div className="w-full h-full flex items-center justify-between my-auto">
      <div id="white-box" className="w-[50%] h-[80%] bg-cream rounded-xl flex flex-col justify-center items-center gap-y-5">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-y-4 w-full">
          <h1 className="text-black h-8 text-[2.5rem] font-bold mb-8">Create Account</h1>
          <div className="w-[75%] mx-auto text-black flex flex-col justify-center m-0">
            <p className="text-sm px-1 text-black m-0 font-medium">Email</p>
            <div className="flex flex-row gap-x-2 border border-black rounded-2xl py-2 px-4">
              <Image src="/email.svg" alt="Email icon" width={25} height={25} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#EDDFD6] focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div id="button" className="w-[25%] h-10 rounded-lg mx-auto text-white bg-[#872D37] flex justify-center mt-8">
            <button type="submit" className="mx-auto my-auto font-medium">
              SIGN UP
            </button>
          </div>
        </form>

        <div id="haveacc" className="flex flex-row items-center text-sm gap-x-1">
          <p className="text-black">Already have an account?</p>
          <a href="/login" className="text-black font-bold">Login</a>
        </div>
      </div>

      <div id="book-image">
        <h1 className="text-[4rem] font-bold">Hi, <br /> Piips!</h1>
        <Image src="/books.png" alt="Books" width={500} height={500} className="w-auto h-auto relative -left-10" />
      </div>
    </div>
  );
}
