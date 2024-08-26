'use client'

import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { books } from '../../../../../utils/example';

interface FormValues {
    paymentMethod: string;
    phoneNumber: string;
}

export default function PaymentDetail() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        defaultValues: {
            paymentMethod: '',
            phoneNumber: ''
        }
    });

    const totalPrice = books.reduce((total, book) => total + parseFloat(book.price), 0);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        router.push('./confirm');
    };


    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    return (
        <div className="flex flex-col h-screen bg-deepBurgundy p-8">
            <div className="flex flex-col lg:flex-row flex-1 gap-8">
                <div className="flex flex-col md:flex-1 lg:w-3/5 p-4">
                    <div className="text-2xl lg:text-5xl text-white font-bold mb-4 tracking-tight">
                        Pesananmu,
                    </div>

                    <div className="flex-1">
                        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center text-palePink text-base md:text-lg lg:text-xl 
                            lg:max-h-[calc(100vh-240px)] lg:overflow-y-auto scrollbar-hidden">
                            {books.map((book, index) => (
                                <React.Fragment key={index}>
                                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                                        <img
                                            src={book.image}
                                            alt={book.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="truncate pl-2">{book.name}</div>
                                    <div className="flex items-center justify-center">Rp</div>
                                    <div className="text-right truncate pr-2">{book.price}</div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="py-6 lg:mt-auto flex justify-between items-center border-t border-gray-500">
                        <div className="text-palePink text-lg md:text-xl lg:text-2xl font-semibold">Total</div>
                        <div className="text-palePink text-lg md:text-xl text-right">Rp {totalPrice}</div>
                    </div>
                </div>
                

                <div className="flex flex-col flex-1 lg:flex-none lg:w-2/5 bg-white p-6 rounded-lg shadow-lg my-4 lg:my-6 lg:mx-8">
                    <div className="text-2xl text-darkRed text-center md:text-4xl font-bold mb-4">Pembayaran</div>
                    <div className="text-xl text-darkRed md:text-2xl font-bold mb-4">Transfer Bank</div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center text-base text-darkRed md:text-lg">
                            <input
                                type="radio"
                                id="BCA"
                                value="BCA"
                                {...register("paymentMethod", { required: "Metode pembayaran diperlukan" })}
                                className="mr-2"
                            />
                            <label htmlFor="BCA">BCA</label>
                        </div>
                        <div className="flex items-center text-base text-darkRed md:text-lg">
                            <input
                                type="radio"
                                id="Mandiri"
                                value="Mandiri"
                                {...register("paymentMethod", { required: "Metode pembayaran diperlukan" })}
                                className="mr-2"
                            />
                            <label htmlFor="Mandiri">Mandiri</label>
                        </div>
                    </div>
                    <div className="text-xl text-darkRed md:text-2xl font-bold mt-4 mb-4">Metode Lainnya</div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center text-base text-darkRed md:text-lg">
                            <input
                                type="radio"
                                id="COD"
                                value="COD"
                                {...register("paymentMethod", { required: "Tolong cantumkan metode pembayaran" })}
                                className="mr-2"
                            />
                            <label htmlFor="COD">COD</label>
                        </div>
                    </div>
                    {errors.paymentMethod && (
                        <div className="bg-red-100 text-red-600 border border-red-300 p-2 text-xs md:text-sm rounded mb-4">
                            {errors.paymentMethod.message}
                        </div>
                    )}
                    
                    <div className="text-xl text-darkRed md:text-2xl font-bold mt-4 mb-4">
                        Nomor Handphone
                    </div>
                    <form className="flex flex-col space-y-2 flex-1" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col flex-grow">
                            <input
                                type="text"
                                placeholder="Masukkan nomor yang dapat dihubungi"
                                className="bg-transparent border border-black rounded-full px-4 py-2 w-full focus:outline-none text-deepBurgundy placeholder-deepBurgundy"
                                {...register("phoneNumber", { required: "Tolong cantumkan nomor handphone" })}
                                onKeyDown={handleKeyDown}
                            />
                            {errors.phoneNumber && (
                                <div className="bg-red-100 text-red-600 border border-red-300 p-2 text-xs md:text-sm rounded mt-1">
                                    {errors.phoneNumber.message}
                                </div>
                            )}
                        </div>
                        <button type="submit" className="bg-gradient-to-b from-deepBurgundy to-blackRed text-white max-w-[240px] text-lg md:text-xl font-semibold py-4 w-full rounded-xl hover:scale-105 mx-auto mt-auto">
                            Buat Pesanan
                        </button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}
