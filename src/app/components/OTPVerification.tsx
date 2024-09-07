"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface Props {
  email: string
}

export default function OTPVerification({ email }: Props) {
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formattedEmail = encodeURIComponent(email.toLowerCase().trim())
    const formattedCode = encodeURIComponent(code)
    const formattedCallback = encodeURIComponent('/chooserole')
    const otpRequestURL = `/api/auth/callback/email?email=${formattedEmail}&token=${formattedCode}&callbackUrl=${formattedCallback}`
    
    try {
      const response = await fetch(otpRequestURL)

      if (response.ok) {
        // OTP verification successful
        const result = await signIn("email", {
          email: email,
          redirect: false,
        });

        if (result?.error) {
          console.error("Sign in error:", result.error);
          router.replace(`/?error=SignIn`);
        } else {
          // Sign in successful, redirect to choose role page
          router.push('/chooserole');
        }
      } else {
        // OTP verification failed
        router.replace(`/?error=Verification`);
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      router.replace(`/?error=VerificationFailed`);
    }

    setIsSubmitting(false)
  };

  return (
    <div className="w-full h-full flex items-center justify-between my-auto">
      <div id="white-box" className="w-[50%] h-[80%] bg-cream rounded-xl flex flex-col justify-center items-center gap-y-5">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-y-4 w-full">
          <h1 className="text-black h-8 text-3xl font-bold mb-8">Masukkan Kode Verifikasi Anda</h1>
          <div className="w-[75%] mx-auto text-black flex flex-col justify-center m-0">
            <p className="text-sm px-1 text-black m-0 font-medium">Email</p>
            <div className="flex flex-row gap-x-2 border border-black rounded-2xl py-2 px-4">
              <Image src="/email.svg" alt="Email icon" width={25} height={25} />
              <input
                id="code"
                name="code"
                type="number"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full bg-cream focus:outline-none"
                placeholder="Enter your code"
              />
            </div>
          </div>

          <div id="button" className="w-[25%] h-10 rounded-lg mx-auto hover:scale-105 text-white from-deepBurgundy to-black bg-gradient-to-b flex justify-center mt-8">
            <button 
                type="submit" 
                className="w-full h-full mx-auto my-auto font-medium"
                disabled={isSubmitting || !code || code.length !== 6}>
              {isSubmitting ? 'Verifying...' : 'Verify'}
            </button>
          </div>
        </form>
      </div>

      <div id="book-image">
        <h1 className="text-[2.5rem] font-bold text-white">Hi, <br /> Piips!</h1>
        <Image src="/books.png" alt="Books" width={500} height={500} className="w-auto h-auto relative -left-10" />
      </div>
    </div>
  );
}