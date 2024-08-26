import List from "@/app/components/List";
import Link from "next/dist/client/link";
interface Book {
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

// Define the props type
interface SearchProps {
    books: Book[];
  }
  
export default function MyProducts({books}: SearchProps){
    return(
        <div className="flex flex-col items-center w-full h-full bg-deepBurgundy">
            <div id="header" className="w-[90%] h-24 flex justify-between items-center">
                <h1 className="text-white text-[2.5rem] font-bold">Produk Saya</h1>
                <Link href="seller/myproducts/addproducts" className="text-white hover:text-opacity-80">Add Product</Link>
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
                                <List idBuku={book.idBuku} key={book.title} name={book.title} price={book.price} />
                            )
                        })
                    }
                </div>
            </div>
            
        </div>

    )
}