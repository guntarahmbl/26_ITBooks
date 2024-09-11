"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { MouseEvent } from "react";
import { Book } from "../../../../../../lib/type";
import { redirect } from "next/navigation";

interface DetailsProps {
  book: Book;
}

export default function Details({ book }: DetailsProps) {
  const { data: session } = useSession();
  if (!session){
    redirect('/')
  }


  return (
    <div id="container" className="text-deepBurgundy px-16 py-10 relative">
      <Link href="../" className="absolute right-32 hover:scale-105 duration-200">
        <Image src="/home.svg" width={50} height={50} alt="" />
      </Link>

      <div id="header" className="flex flex-row gap-x-5">
        <div className="w-52 h-52 overflow-clip">
          <Image src={book.imageUrl} width={200} height={200} alt="" className="h-full" />
        </div>
        <div id="right-header" className="flex flex-col gap-y-3">
          <h3 className="font-semibold flex items-end text-3xl">{book.title}</h3>
          <h1 className="font-semibold text-[2.5rem]">Rp{book.price}</h1>
          <div id="penjual" className="flex flex-row">
            <p className="w-32">Penjual</p>
            <p>{book.emailPenjual}</p>
          </div>
          <div id="pengambilan" className="w-32 flex flex-row gap-x-7">
            <p className="w-32">Pengambilan</p>
            <select name="pengambilan" id="">
              <option value="ITB Ganesha">ITB Ganesha</option>
              <option value="ITB Jatinangor">ITB Jatinangor</option>
              <option value="COD">COD</option>
            </select>
          </div>
        </div>
      </div>

      <div id="body" className="flex flex-col gap-y-3 mt-5">
        <h1 className="font-bold text-2xl">Spesifikasi Produk</h1>
        <div id="Penulis">
          <p className="font-bold">Penulis:</p>
          <p>{book.author}</p>
        </div>
        <div id="Edisi">
          <p className="font-bold">Edisi:</p>
          <p>{book.edition}</p>
        </div>
        <div id="Jilid">
          <p className="font-bold">Jilid:</p>
          <p>{book.volume}</p>
        </div>
        <div id="ISBN">
          <p className="font-bold">ISBN:</p>
          <p>{book.isbn}</p>
        </div>
        <div id="Kondisi Buku">
          <p className="font-bold">Kondisi Buku:</p>
          <p>{book.condition}</p>
        </div>
        <div id="Deskripsi Buku">
          <p className="font-bold">Deskripsi Buku:</p>
          <p>{book.description}</p>
        </div>
        <div id="Harga">
          <p className="font-bold">Harga:</p>
          <p>{book.price}</p>
        </div>
        <div id="Metode Pengambilan">
          <p className="font-bold">Metode Pengambilan:</p>
          <p>ITB Kampus Ganesha</p>
        </div>
        <div id="Catatan Tambahan">
          <p className="font-bold">Catatan Tambahan:</p>
          <p>{book.notes}</p>
        </div>
      </div>
    </div>
  );
}
