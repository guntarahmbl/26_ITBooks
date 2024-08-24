'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Searchbar from './Searchbar';

export default function Navbar() {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const toggleSearch = () => {
        setIsSearchActive(prev => !prev);
    };

    const closeSearch = () => {
        setIsSearchActive(false);
    };

    return (
        <div className="sticky top-0 bg-deepBurgundy z-30 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <div className="flex items-center justify-between gap-4 md:gap-8 mx-auto xl:px-6 md:px-4 px-2">
                    <Link href="/buyer/catalog">
                        <Image
                            src="/Logo.png"
                            alt="ITBooks Logo"
                            width={50}
                            height={50}
                            priority
                        />
                    </Link>

                    <div className="flex-grow flex items-center justify-center relative">
                        <div className="hidden sm:block w-full max-w-[800px]">
                            <Searchbar />
                        </div>
                    </div>

                    <div className="flex items-center gap-6 md:gap-8">
                        <div>Bookmark</div>
                        <div>User</div>
                        <button
                            className="block sm:hidden"
                            onClick={toggleSearch}
                        >
                            <Image
                                src="/SearchBlack.png"
                                alt="Search Icon"
                                width={25}
                                height={25}
                                priority
                            />
                        </button>
                    </div>
                </div>
            </div>

            {isSearchActive && (
                <div className="absolute inset-0 bg-deepBurgundy z-40 flex items-center px-4 py-2">
                    <div className="w-full max-w-[800px] mx-auto">
                        <Searchbar onSearchSubmit={closeSearch} />
                    </div>
                    <button
                        className="ml-4"
                        onClick={toggleSearch}
                    >
                        <Image
                            src="/Clear.png"
                            alt="Close Icon"
                            width={25}
                            height={25}
                            priority
                        />
                    </button>
                </div>
            )}
        </div>
    );
}
