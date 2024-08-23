import React from 'react'

export default function Home() {
  return (
    <div className="bg-primary min-h-screen flex flex-col lg:flex-row justify-center items-center text-white pt-8 pb-1 pr-8 pl-8">
      <div className="w-full lg:max-w-[50vw] space-y-8 lg:space-y-16 px-4 lg:px-16 text-center lg:text-left sm: py-4 ">
        <div className="mb-4 lg:mb-8">
          <p className="text-4xl lg:text-5xl font-medium mb-4">Halo, <em>Ucok!</em></p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-4">Selamat datang di ITBooks!!!</h1>
        </div>
        <div className="bg-secondary rounded-3xl shadow-lg flex flex-col items-center p-4 lg:p-16 overflow-hidden">
          <h1 className="text-2xl lg:text-3xl text-black mb-8 font-bold">Kamu mau login sebagai apa?</h1>
          <div className="flex flex-col lg:flex-row justify-center space-y-4 space-x-2 lg:space-y-0 lg:space-x-8">
            <button className="bg-transparent rounded-lg relative w-full lg:w-auto min-w-[300px] h-[219px] lg:h-[219px]">
             <img src={'/ButtonPembeli.png'} alt="Pembeli" className='w-full h-full object-cover rounded-lg text-black text-2xl font-bold' />
            </button>

            <button className="bg-transparent rounded-lg relative w-full lg:w-auto min-w-[300px] h-[219px] lg:h-[219px]">
              <img src={'/ButtonPenjual.png'} alt="Penjual" className='w-full h-full object-cover rounded-lg text-black text-2xl font-bold' />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto mt-8 lg:mt-0 flex justify-center lg:justify-start">
        <img src={'/MaskotGaneBox2.png'} alt="Maskot GaneBox 2" className="w-[100%] h-auto" />
      </div>
    </div>
  );
}