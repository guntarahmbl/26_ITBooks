"use client";
import List from "@/app/components/List";
import Link from "next/dist/client/link";
import { Book } from "../../../lib/type";
import { signOut } from "next-auth/react";
import Image from "next/image";
// Define the props type
interface SearchProps {
    books: Book[];
  }
  
export default function MyProducts({books}: SearchProps){
    return(
        <div className="relative flex flex-col items-center w-full h-full bg-deepBurgundy">
            <Link href="myproducts/addproducts" className="text-white hover:scale-105 duration-300 transition-all fixed bottom-10 right-10">
                <Image src="/add.svg" alt="" width={50} height={50} />
            </Link>

            <div id="header" className="w-[90%] h-24 flex justify-between items-center">
                <h1 className="text-white text-[2.5rem] font-bold">Produk Saya</h1>
                <div className="flex flex-row gap-x-7">
                    <Link href="../buyer/catalog" className="text-white hover:scale-105 duration-300 transition-all">Mode Pembeli</Link>
                    <button onClick={()=>signOut({ callbackUrl: '/' })} className="text-white hover:scale-105 duration-300 transition-all">Sign Out</button>  
                </div>
            </div>

            <div id="container" className="w-[95%] min-h-screen rounded-3xl bg-gradient-to-bl from-cream p-6">
                <div id="label" className="flex h-10">
                    <h2 className="w-[35%] flex justify-center relative right-28">Produk</h2>
                    <h2 className="w-[15%]">Kuantitas</h2>
                    <h2 className="w-[23%]">Harga</h2>
                    <h2 className="w-[23%]">Total harga</h2>
                </div>
                <div>
                    {
                        books.map((book) => {
                            return(
                                <List idBuku={book.idBuku} key={book.title} name={book.title} price={book.price} type="catalogue"/>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>

    )
}