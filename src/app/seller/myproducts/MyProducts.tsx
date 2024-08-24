import List from "@/app/components/List";
interface Book {
    id: string;
    name: string;
    description: string;
    author: string;
    publisher: string;
    price: number;
    image: string;
  }

// Define the props type
interface SearchProps {
    books: Book[];
  }
  
export default function MyProducts({books}: SearchProps){
    return(
        <div className="flex flex-col items-center w-full h-full bg-deepBurgundy">
            <div id="header" className="w-[90%] h-24 flex justify-between items-center">
                <h1 className="text-white text-[2.5rem] font-bold">Keranjang</h1>
                <h3>mode</h3>
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
                                <List key={book.name} name={book.name} price={book.price} />
                            )
                        })
                    }
                </div>
            </div>
            
        </div>

    )
}