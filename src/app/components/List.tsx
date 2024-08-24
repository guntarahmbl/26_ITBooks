import Image from "next/image"
export default function List({name, price}:{name:string, price:number}) {
    return(
        <div className="flex flex-row items-center border border-black rounded-xl p-2 bg-cream my-3">
            <div id="title" className="w-[35%] flex flex-row items-center">
                <input type="checkbox" name="" id="" className="h-5 w-5" />
                <Image src="/books2.svg" width={50} height={50} alt=""/>
                <h2>{name}</h2>
            </div>
            <p className="flex w-[15%]">1</p>
            <p className="w-[23%]">{price}</p>
            <p className="w-[23%]">{price}</p>
            <button type="button" className="w-[2%]">
                <Image src="/trash.svg" width={25} height={25} alt="" className="w-full"/>
            </button>
            
        </div>
    )  
}
