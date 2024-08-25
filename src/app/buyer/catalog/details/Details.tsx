import Image from "next/image";
import Link from "next/link";

export default function Details() {
  return ( 
    <div id="container" className="text-deepBurgundy px-16 py-10 relative">
        <Link href="/buyer/catalog"  className="absolute right-32">
            <Image src="/home.svg" width={50} height={50} alt=""/>
        </Link>
        

        <div id="header" className="flex flex-row gap-x-5">
            <Image src="/books.png" width={200} height={200} alt=""/>
            <div id="right-header" className="flex flex-col gap-y-3">
                <h3 className="font-semibold flex items-end">BUKU KALKULUS PURCELL EDISI 9 JILID 1 DAN JILID 2 ORIGINAL 100% PENERBIT ERLANGGA </h3>

                <h1 className="font-semibold text-[2.5rem]">RP250.000</h1>
                <div id="penjual" className="flex flex-row">
                    <p className="w-32">Penjual</p>
                    <p>RIzki Hartanto</p>
                </div>
                <div id="pengambilan" className="w-32 flex flex-row gap-x-7" >
                    <p className="w-32">Pengambilan</p>
                    <select name="pengambilan" id="">
                        <option value="ITB Ganesha">ITB Ganesha</option>
                        <option value="ITB Jatinangor">ITB Jatinangor</option>
                        <option value="COD">COD</option>
                    </select>
                </div>
                <div id="buttons" className="flex gap-x-5">
                    <button className="bg-deepBurgundy text-white p-3 rounded-lg w-60">Masukkan Keranjang</button>
                    <button className="bg-deepBurgundy text-white p-3 rounded-lg w-60">Beli sekarang</button>
                </div>

            </div>
        </div>

        <div id="body" className="flex flex-col gap-y-3 mt-5">
            <h1 className="font-bold text-2xl">Spesifikasi Produk</h1>
            <div id="Penulis">
                <p className="font-bold">Penulis:</p>
                <p>Leonard S. Bobrow (Diadaptasi dari karya asli Edward M. Purcell)</p>
            </div>
            <div id="Edisi">
                <p className="font-bold">Edisi:</p>
                <p>Edisi Kesembilan</p>
            </div>
            <div id="Jilid">
                <p className="font-bold">Jilid:</p>
                <p>Jilid 1</p>
            </div>
            <div id="ISBN">
                <p className="font-bold">ISBN:</p>
                <p>13567890</p>
            </div>
            <div id="Kondisi Buku">
                <p className="font-bold">Kondisi Buku:</p>
                <p>Buku Bekas, namun masih dalam keadaan baik, terdapat juga catatan - catatan penting yang sengaja saya selipkan untuk membantumu belajar</p>
            </div>
            <div id="Deskripsi Buku">
                <p className="font-bold">Deskripsi Buku:</p>
                <p>Buku "Purcell: Electrical Engineering Fundamentals" adalah salah satu buku teks utama yang digunakan dalam studi dasar teknik elektro. Edisi kesembilan ini telah diperbarui dengan contoh-contoh terkini dan soal-soal latihan yang relevan dengan perkembangan terbaru dalam bidang teknik elektro. Buku ini berfokus pada prinsip-prinsip dasar teknik elektro dan memberikan pemahaman mendalam yang esensial bagi mahasiswa teknik.</p>
            </div>
            <div id="Harga">
                <p className="font-bold">Harga:</p>
                <p>Rp25.000</p>
            </div>
            <div id="Metode Pengambilan">
                <p className="font-bold">Metode Pengambilan:</p>
                <p>ITB Kampus Ganesha</p>
            </div>
            <div id="Catatan Tambahan">
                <p className="font-bold">Catatan Tambahan:</p>
                <p>Buku ini banyak digunakan untuk mahasiswa Tahap Persiapan Bersama</p>
            </div>
        </div>
    </div>
  );
}
