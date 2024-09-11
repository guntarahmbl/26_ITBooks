'use client'

import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    data: any
}

const Card:React.FC<CardProps> = ({data}) => {
    return (
        <Link href={`catalog/details/${data.idBuku}`}>
            <div className="cursor-pointer text-center border border-deepBurgundy p-2 rounded-lg bg-lightBurgundy transition hover:scale-105">
                <div className = "flex flex-col w-full gap-0.5">
                    <div className="aspect-square overflow-clip relative w-full">
                        <Image
                            src={data.imageUrl}
                            alt={data.title}
                            fill
                            className = "aspect-square object-fill"
                        />
                    </div>
                    <div className = "font-bold text-lg text-left text-deepBurgundy truncate">
                        {data.title}
                    </div>
                    <div className = "text-left text-sm text-deepBurgundy">
                        oleh {data.author}
                    </div>
                    <div className = "text-left text-sm text-white">
                        Rp. {data.price}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
