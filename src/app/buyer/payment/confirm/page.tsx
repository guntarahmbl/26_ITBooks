'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { books } from '../../../../../utils/example';

export default function PaymentConfirm() {
    const router = useRouter();
    const [fileUploaded, setFileUploaded] = useState(false);
    const [fileName, setFileName] = useState('');

    const totalPrice = books.reduce((total, book) => total + parseFloat(book.price), 0);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            setFileUploaded(true);
            setFileName(file.name);
        } else {
            setFileUploaded(false);
            setFileName('');
            alert('Tolong upload image yak');
        }
    };

    const handleSubmit = () => {
        if (fileUploaded) {
            router.push('./success');
        }
    };

    return (
        <div className="flex flex-col h-screen bg-deepBurgundy p-8">
            <div className="flex flex-col lg:flex-row flex-1 gap-8">
                <div className="flex flex-col lg:flex-1 lg:w-3/5 p-4">
                    <div className="text-2xl lg:text-5xl text-white mb-4 tracking-tight">
                        <div>Selesaikan,</div>
                        <div className="font-bold mt-2">Pembayaranmu!</div>
                    </div>

                    <div className="flex flex-col space-y-4 lg:space-y-6 text-palePink text-lg md:text-xl lg:text-2xl">
                        <div className="flex justify-between font-semibold">
                            <span>Total Pembayaran</span>
                            <span className="text-right">Rp {totalPrice}</span>
                        </div>
                        <div className="mt-6 lg:pl-8 py-2 space-y-4 lg:space-y-6 text-palePink text-base md:text-lg lg:text-xl">
                            <div className="font-semibold">Bank Mandiri</div>
                            <div>
                                <div className="font-semibold">No. Rekening</div>
                                <div className="flex items-center justify-between">
                                    <div>1234567891011231</div>
                                    <button 
                                        onClick={() => navigator.clipboard.writeText("1234567891011231")} 
                                        className="font-semibold"
                                    >
                                        SALIN
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold">Atas Nama</div>
                                <div>Raja Singgasana Purba</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="py-4 lg:mt-auto flex flex-col space-y-[0.1] text-palePink">
                        <div className="flex items-center justify-between text-lg md:text-xl lg:text-2xl font-semibold">
                            Bayar dalam
                        </div>
                        <div className="flex items-center justify-between text-base md:text-lg lg:text-xl font-semibold">
                            23 Jam 59 Menit 59 Detik
                        </div>
                        <div className="flex items-center justify-between text-sm md:text-base lg:text-lg">
                            Jatuh tempo pada 24 Agustus 2024, 22.54
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 lg:flex-none lg:w-2/5 bg-white p-6 rounded-lg shadow-lg my-4 lg:my-6 lg:mx-8 min-h-[300px] lg:min-h-[400px]">
                    <div className="text-2xl text-darkRed text-center md:text-4xl font-bold mb-4">Bukti Pembayaran</div>
                    <div className="text-base text-darkRed text-center md:text-xl mb-4">
                        Unggah 
                        <span className="font-bold"> bukti pembayaran </span> 
                        kamu untuk divalidasi oleh
                        <span className="font-bold"> penjual</span>
                    </div>

                    <div className="border border-darkRed p-8 rounded-lg flex flex-col flex-grow items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-10">
                        <label 
                            htmlFor="fileUpload" 
                            className="bg-gradient-to-b from-deepBurgundy to-blackRed text-white text-center max-w-[160px] text-lg md:text-xl font-semibold py-4 w-full rounded-full mx-auto my-auto"
                        >
                            Browse
                        </label>
                        <input 
                            id="fileUpload" 
                            type="file" 
                            onChange={handleFileUpload} 
                            accept="image/*"
                            className="hidden" 
                        />
                        {fileUploaded && <p className="mt-2 text-darkRed">File: {fileName}</p>}
                    </div>
                    <button 
                        onClick={handleSubmit} 
                        className={`bg-gradient-to-b from-deepBurgundy to-blackRed text-white max-w-[240px] text-lg md:text-xl font-semibold py-4 w-full rounded-xl mx-auto mt-auto ${fileUploaded ? 'hover:scale-105' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!fileUploaded}
                    >
                        Buat Pesanan
                    </button>
                </div>
            </div>
        </div>
    );
}
