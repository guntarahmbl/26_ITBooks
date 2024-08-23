'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function CartNavbar() {

  return (
    <div className="sticky top-0 bg-deepBurgundy z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="flex items-center justify-between gap-4 md:gap-8 mx-auto xl:px-6 md:px-4 px-2">
          <div className="absolute flex flex-shrink-0 items-center gap-4">
            <Link href="/catalog">
              <Image
                src="/Home.svg"
                alt="Home"
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>
          <div className="text-3xl font-bold text-white flex flex-grow justify-center">
            Keranjang
          </div>
        </div>
      </div>
    </div>
  );
}
