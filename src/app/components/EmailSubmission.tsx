"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";

interface Props {
    onSubmit: (email: string) => void
}

export default function EmailSubmission({ onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true)

    const response = await signIn('email', { email, redirect: false })
    if (response?.error) {
      if (response?.url) {
        router.push(response.url)
      } else {
        router.replace(`/?error=${encodeURIComponent(response.error)}`)
      }
    } else {
      onSubmit(email)
    }

    setIsSubmitting(false)

  };

  return (
    <div className="w-full h-full flex items-center sm:justify-between justify-center my-auto flex-col-reverse gap-y-9 sm:flex-row">
      <div id="white-box" className="sm:w-[50%] sm:h-[80%] w-[70%] h-[40%] bg-cream rounded-xl flex flex-col justify-center items-center gap-y-5">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-y-4 w-full">
          <h1 className="text-black h-8 text-[2.5rem] font-bold mb-8">Masuk</h1>
          <div className="w-[75%] mx-auto text-black flex flex-col justify-center m-0">
            <p className="text-sm px-1 text-black m-0 font-medium">Email ITB</p>
            <div className="flex flex-row gap-x-2 border border-black rounded-2xl py-2 px-4">
              <Image src="/email.svg" alt="Email icon" width={25} height={25} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full truncate bg-cream focus:outline-none"
                placeholder="example@mahasiswa.itb.ac.id"
              />
            </div>
          </div>

          <div id="button" className="sm:w-[30%] w-[50%] h-10 rounded-lg mx-auto hover:scale-105 text-white from-deepBurgundy to-black bg-gradient-to-b flex justify-center mt-8">
            <button 
                type="submit" 
                className="w-full h-full mx-auto my-auto font-medium "
                disabled={isSubmitting || !email}>
              {isSubmitting ? 'Sending email...' : 'SIGN IN'}
            </button>
          </div>
        </form>

      </div>

      <div id="book-image" className="sm:w-96 w-[80%] flex flex-col">
        <h1 className="sm:text-[2.5rem] text-2xl font-bold text-white w-full sm:h-20 h-10">
          <Typewriter
          words={['Hi, Pips!', 'Hi, Bung!', 'Hi, Nona!', 'Selamat datang di ITBooks!', 'Mau beli buku apa hari ini?']}
          delaySpeed={500}
          loop = {0}
          cursor
          cursorBlinking
          />
        </h1>
        <Image src="/books.png" alt="Books" width={500} height={500} className="w-auto h-auto hidden sm:block" />
      </div>
    </div>
  );
}
