"use client"
import Image from "next/image";
import { useState } from "react";

export default function List({ idBuku, name, price }: { idBuku: number, name: string, price: number }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/books/${idBuku}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // Handle successful deletion (e.g., notify user, update UI)
                console.log('Book deleted successfully');
                // Optionally, you could trigger a parent component update or use context to refresh the list
            } else {
                console.error('Failed to delete book');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-row items-center border border-black rounded-xl p-2 bg-cream my-3">
            <div id="title" className="w-[35%] flex flex-row items-center">
                <input type="checkbox" name="" id="" className="h-5 w-5" />
                <Image src="/books2.svg" width={50} height={50} alt="" />
                <h2>{name}</h2>
            </div>
            <p className="flex w-[15%]">1</p>
            <p className="w-[23%]">{price}</p>
            <p className="w-[23%]">{price}</p>
            <button
                type="button"
                className="w-[2%]"
                onClick={handleDelete}
                disabled={isLoading}
            >
                <Image src="/trash.svg" width={25} height={25} alt="" className="w-full" />
            </button>
        </div>
    );
}
