'use client'

import Image from 'next/image';

interface CardProps {
    data: any
}

const Card:React.FC<CardProps> = ({data}) => {
    return (
        <div className="cursor-pointer text-center border border-deepBurgundy p-2 rounded-lg bg-lightBurgundy transition hover:scale-105">
            <div className = "flex flex-col w-full gap-0.5">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image
                        src={data.imageUrl}
                        alt={data.name}
                        fill
                        className = "w-full h-full object-contain"
                    />
                </div>
                <div className = "font-bold text-lg text-left text-deepBurgundy truncate">
                    {data.name}
                </div>
                <div className = "text-left text-sm text-deepBurgundy">
                    oleh {data.author}
                </div>
                <div className = "text-left text-sm text-white">
                    Rp. {data.price}
                </div>
            </div>
        </div>
    );
}

export default Card;
