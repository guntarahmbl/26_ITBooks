'use client'

import React from 'react';
import Image from 'next/image';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import queryString from 'query-string';

interface SearchbarProps {
    onSearchSubmit?: () => void;
}

export default function Searchbar({ onSearchSubmit }: SearchbarProps) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            searchTerm: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (data.searchTerm) {
            const url = queryString.stringifyUrl({
                url: '/catalog',
                query: {
                    searchTerm: data.searchTerm
                }
            }, { skipNull: true });
    
            router.push(url);
            reset();
    
            if (onSearchSubmit) {
                onSearchSubmit();
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center bg-lightBurgundy border border-deepBurgundy rounded-full px-4 py-2 w-full"
        >
            <input
                {...register('searchTerm')}
                autoComplete="off"
                type="text"
                placeholder="Cari Judul Buku, Pengarang, Penerbit"
                className="bg-transparent flex-grow focus:outline-none text-deepBurgundy placeholder-deepBurgundy pr-3 truncate"
            />
            <button
                type="submit"
                className="rounded-full w-5 h-5 flex items-center justify-center"
            >
                <Image
                    src="/Search.png"
                    alt="Search Button"
                    width={20}
                    height={20}
                    priority
                />
            </button>
        </form>
    );
}
