import Image from "next/image";

export default function Dashboard(){
  return (
    <div className="flex flex-col w-full h-full justify-between items-center">
        <div id="head" className="w-full flex flex-row gap-x-5 h-15 p-5 justify-center items-center">
            <div>Logo</div>
            <div id="search-bar" className="flex flex-row w-[36rem] h-12 px-5 bg-[#EDDFD6] rounded-3xl justify-between items-center">
                <input type="search" className="bg-transparent w-3/4 focus:outline-none" placeholder="Cari judul buku, pengarang, penerbit"/>
                <Image src="/search.svg" alt="" width={"25"} height={"50"}/>
            </div>
            <div id="cart">cart</div>
            <div id="mode">mode</div>
        </div>
    </div>
  );
}
