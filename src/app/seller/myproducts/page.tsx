export default function Home() {
    return(
        <div id="container" className="flex flex-col justify-center w-full">
            <div id="header" className="w-full h-20 flex flex-row justify-center items-center bg-deepBurgundy">
                <h1 className="text-[2.5rem] text-white font-bold">Keranjang</h1>
            </div>
            <div id="lable" className="flex flex-row gap-x-32    justify-center bg-lightBurgundy">
                <h3>Produk</h3>
                <h3>Qty</h3>
                <h3>Subtotal</h3>
            </div>
            <div id="products" className="flex flex-col bg-cream min-h-screen">

            </div>
        </div>
    )  
}