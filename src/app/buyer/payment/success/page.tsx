import React from 'react'
import Image from 'next/image'

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col h-screen bg-deepBurgundy p-8">
        <div className="flex-none mb-4">
            <div className="text-white text-2xl lg:text-5xl pb-2 p-4">
                Hai 
                <span className="italic"> Ucok</span>
                ,
            </div>
            <div className="text-white text-2xl lg:text-5xl pt-2 p-4 font-bold">
                Pesananmu berhasil dibuat!
            </div>
        </div>

        <div className="flex flex-1 flex-col lg:flex-row gap-4">
            <div className="flex-1 p-4 flex flex-col items-center justify-start">
                <div className="relative w-full max-w-sm h-64 mb-4">
                    <Image
                        src="/success.png"
                        alt="Success"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>
                <div className="text-white text-2xl text-center">
                    <div>Mohon menunggu hingga penjual mengonfirmasi <span className="font-semibold">pembayaranmu</span>.</div>
                    <div>Kami akan memberitahumu jika pembayaranmu telah <span className="font-semibold">tervalidasi</span>.</div>
                </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 pr-1 p-4">
                <div className="relative w-full aspect-w-1 aspect-h-1">
                    <Image
                        src="/books.png"
                        alt="Books"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
