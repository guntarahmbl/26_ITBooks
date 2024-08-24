export default function Home() {
    return(
        <div className="flex flex-col items-center w-full min-h-screen bg-deepBurgundy">
            <div id="header" className="w-[90%] h-20 flex justify-between">
                <h1 className="text-white text-3xl font-bold">Keranjang</h1>
                <h3>mode</h3>
            </div>

            <div id="container" className="w-[95%] min-h-screen rounded-3xl flex-col bg-beige p-5">
                <div id="label" className="flex justify-between">
                    <h2>Produk</h2>
                    <h2>Kuantitas</h2>
                    <h2>Harga</h2>
                    <h2>Total harga</h2>
                </div>
                
            </div>
            
        </div>

    )  
}
