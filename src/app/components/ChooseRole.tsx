"use client";
import Image from "next/image";
import Link from "next/link";
export default function ChooseRole() {

  return ( 
    <div className="w-full h-full flex items-center justify-between my-auto">
        
        <div className="flex flex-col w-[70%] h-full justify-center gap-y-10">
            <div id="text" className="flex flex-col -mt-28">
                <h2 className="text-white text-3xl flex flex-row">Halo, <p className="text-white text-3xl font-medium italic">Piips!</p></h2>
                <h1 className="text-white font-bold text-[2.5rem] -mb-5">Selamat datang di</h1>
                <h1 className="text-white font-bold text-[2.5rem]">ITBooks !!!</h1>
            </div>
            <div id="white-box" className="w-[70%] h-[40%] bg-cream rounded-xl flex flex-col justify-center items-center gap-y-5">
                <div className="flex flex-row gap-x-5">
                    <Link href="/seller/myproducts" id="penjual" className="from-deepBurgundy bg-gradient-to-b to-black flex flex-col items-center w-36 rounded-xl hover:scale-105 duration-200">
                        <Image src="/penjual.svg" alt="Books" width={80} height={80} className="" />
                        <h2 className="text-white">Penjual</h2>
                    </Link>

                    <Link href="/buyer/catalog" id="pembeli" className="from-deepBurgundy bg-gradient-to-b to-black flex flex-col items-center w-36 rounded-xl hover:scale-105 duration-200">
                        <Image src="/pembeli.svg" alt="Books" width={80} height={80} className="" />
                        <h2 className="text-white">Pembeli</h2>
                    </Link>
                </div>
                <p className="text-deepBurgundy font-normal">Kamu mau login sebagai apanih?</p>
            </div>
        </div>

        <div id="book-image">
            <Image src="/books2.svg" alt="Books" width={500} height={500} className="" />
        </div>
        
    </div>
  );
}
