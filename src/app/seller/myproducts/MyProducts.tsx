"use client";
import List from "@/app/components/List";
import Link from "next/dist/client/link";
import { Book } from "../../../../lib/type";
import { signOut } from "next-auth/react";
// Define the props type
interface SearchProps {
    books: Book[];
  }
  
export default function MyProducts({books}: SearchProps){
    return(
        <div className="flex flex-col items-center w-full h-full bg-deepBurgundy">
            <div id="header" className="w-[90%] h-24 flex justify-between items-center">
                <h1 className="text-white text-[2.5rem] font-bold">Produk Saya</h1>
                <div className="flex flex-row gap-x-7">
                    <Link href="myproducts/addproducts" className="text-white hover:text-opacity-80">Add Product</Link>
                    <button onClick={()=>signOut({ callbackUrl: '/' })} className="text-white hover:text-opacity-80">Sign Out</button>
                    <Link href="../buyer/catalog" className="text-white hover:text-opacity-80">Buyer Mode</Link>
                    
                </div>
            </div>

            <div id="container" className="w-[95%] min-h-screen rounded-3xl bg-gradient-to-bl from-cream p-6">
                <div id="label" className="flex h-10">
                    <h2 className="w-[35%]">Produk</h2>
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