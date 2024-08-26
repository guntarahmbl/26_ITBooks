"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
// Define types for form data
interface FormData {
  title: string;
  emailPenjual: string;
  price: number;
  condition: string;
  author: string;
  edition: string;
  isbn: string;
  volume: string;
  description: string;
  notes: string;
  file: File | null;
}

export default function Home() {
  const { data: session } = useSession();
  
  const [formData, setFormData] = useState<FormData>({
    title: "",
    emailPenjual: "",
    price: 0,
    condition: "",
    author: "",
    edition: "",
    isbn: "",
    volume: "",
    description: "",
    notes: "",
    file: null,
  });


  
  // Handle text input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      // Check the MIME type of the file
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert('Hanya file gambar yang diizinkan.');
        // Clear the file input if invalid
        e.target.value = '';
      } else {
        setFormData({
          ...formData,
          file: file,
        });
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    if (formData.file) {
      data.append("file", formData.file);
    }
    data.append("upload_preset", "ml_default");

    try {
      // Upload image to Cloudinary
      const res = await fetch(`https://api.cloudinary.com/v1_1/dwxvrynly/image/upload`, {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      const imageUrl = result.secure_url;
      const formDataWithEmail = {
            ...formData,  
            emailPenjual: session?.user?.email || "", // Ensure emailPenjual is set from session
            imageUrl,
      };
      
      console.log(formDataWithEmail)
      const saveRes = await fetch("/api/catalogue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formDataWithEmail,
          imageUrl,
        }),
      });

      if (!saveRes.ok) throw new Error("Failed to save data");

      alert("Data berhasil disimpan!");
      setFormData({
        title: "",
        emailPenjual: session?.user?.email,
        price: 0,
        condition: "",
        author: "",
        edition: "",
        isbn: "",
        volume: "",
        description: "",
        notes: "",
        file: null,
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengunggah.");
    }
  };


  return (
    <div className="flex flex-col w-full items-center">
      <div id="header" className="flex flex-row items-center justify-between h-20 w-[90%]">
        <h1 className=" font-bold text-[2.5rem] text-white">Tambahkan Produk</h1>
        <Link href="/seller/myproducts" className="w-50 h-50 bg-white">
          <Image src="/home.svg" width={70} height={70} alt="" className="bg-white"/>
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 items-center w-[90%] rounded-3xl min-h-screen bg-white text-deepBurgundy p-10 mx-auto"
      >
        <h1 className="font-bold text-xl">Spesifikasi Produk</h1>
        <p className="text-lg -mt-3">Masukkan detail produk yang ingin anda unggah di sini.</p>
        <p className="text-lg -mt-5">Isi sesuai dengan data yang sebenar-benarnya.</p>

        <div className="flex flex-row w-full justify-between">
          <div className="w-[40%]">
            <p>Judul Buku</p>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-black rounded-xl w-full px-5 py-2"
              placeholder="Masukkan judul buku yang ingin anda jual"
            />
          </div>
          <div className="w-[40%]">
            <p>Harga Buku</p>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-black rounded-xl w-full px-5 py-2"
              placeholder="Masukkan harga buku dalam rupiah"
            />
          </div>
        </div>

        <div className="w-full">
          <p>Kondisi Buku*</p>
          <input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            className="border border-black rounded-xl w-full px-5 py-2"
            placeholder="Jelaskan kondisi buku yang ingin anda jual"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-[20%] gap-y-5 w-full">
          <div className="w-full">
            <p>Penulis Buku*</p>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="border border-black rounded-xl w-full px-5 py-2"
              placeholder="Masukkan nama penulis buku"
            />
          </div>
          <div className="w-full">
            <p>Edisi Buku*</p>
            <input
              type="text"
              name="edition"
              value={formData.edition}
              onChange={handleChange}
              className="border border-black rounded-xl w-full px-5 py-2"
              placeholder="Masukkan Edisi buku yang ingin anda jual"
            />
          </div>
          <div className="w-full">
            <p>ISBN Buku*</p>
            <input
              type="text"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              className="border border-black rounded-xl w-full px-5 py-2"
              placeholder="Masukkan ISBN buku yang ingin anda jual"
            />
          </div>
          <div className="w-full">
            <p>Jilid Buku*</p>
            <input
              type="text"
              name="volume"
              value={formData.volume}
              onChange={handleChange}
              className="border border-black rounded-xl w-full px-5 py-2"
              placeholder="Masukkan Jilid buku yang ingin anda jual"
            />
          </div>
        </div>

        <div className="w-full">
          <p>Deskripsi Buku*</p>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-black rounded-xl w-full px-5 py-2"
            placeholder="Jelaskan informasi buku yang ingin anda jual"
          />
        </div>

        <div className="w-full">
          <p>Catatan Tambahan</p>
          <input
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="border border-black rounded-xl w-full px-5 py-2"
            placeholder="Jelaskan informasi tambahan buku yang ingin anda jual"
          />
        </div>

        <div>
          <h1>Unggah produk</h1>
          <input type="file" name="file" onChange={handleFileChange} />
        </div>

        <button type="submit" className="mt-5 px-4 py-2 bg-deepBurgundy hover:bg-opacity-90 text-white rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
}
