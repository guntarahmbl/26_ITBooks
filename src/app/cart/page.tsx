"use client";

import { useState } from "react";
import Image from "next/image";

import { cart } from "@utils/cart";
import { books } from "@utils/example";

type QuantityChipTypes = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onChange: (newQuantity: number) => void;
};

const QuantityChip = ({ quantity, onIncrease, onDecrease, onChange }: QuantityChipTypes) => {
  return (
    <div className="flex w-fit items-center justify-center border rounded-sm text-[#872D37] bg-white border-black">
      <button onClick={onDecrease} className="text-lg font-bold px-2">
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => onChange(Math.max(1, parseInt(e.target.value)))}
        className="border-l border-r border-black px-2 text-center w-12"
      />
      <button onClick={onIncrease} className="text-lg font-bold px-2">
        +
      </button>
    </div>
  );
};

type CartListTypes = {
  id: string;
  quantity: number;
};

const Cart = () => {
  const [cartList, setCartList] = useState<CartListTypes[]>(cart);

  const getBookDetails = (id: string) => {
    const book = books.find((book) => book.id === id);
    if (book) {
      const price = parseInt(book.price.replace(/,/g, ""));
      return { ...book, price };
    }
    return null;
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartList((oldList) =>
      oldList.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartList((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const formatCurrency = (price: number) => {
    return Number.isNaN(price) ? 0 : Intl.NumberFormat("id-ID").format(price);
  };

  return (
    <div className="text-[#872D37]">
      {cartList.length === 0 ? (
        <p className="text-center">Keranjangmu masih kosong nih!</p>
      ) : (
        <table className="w-screen table-auto">

          <thead>
            <tr className="text-center font-bold bg-[#D4B3B7]">
              <th className="max-sm:pl-2 sm:pl-8 py-2">Produk</th>
              <th className="w-[10%] py-2">Kuantitas</th>
              <th className="py-2 max-sm:hidden">Subtotal</th>
              <th className="max-sm:pr-2 sm:pr-8 w-[5%] py-2"></th>
            </tr>
          </thead>

          <tbody className="text-center">
            {cartList.map((item) => {
              const book = getBookDetails(item.id);
              if (!book) return null;
              return (
                <tr key={item.id}>

                  <td className="text-left max-sm:pl-2 sm:pl-8 py-2">
                    <div className="flex flex-row">
                      <Image
                        src={book.image}
                        alt={book.name}
                        width={50}
                        height={50}
                        className="w-[50px] h-[50px]"
                      />
                      <div className="pl-2">
                        <div className="font-bold">{book.name}</div>
                        <div className="text-sm">
                          Rp {formatCurrency(book.price)}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-2 py-2">
                    <div className="flex justify-center">
                      <QuantityChip
                        quantity={item.quantity}
                        onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                        onDecrease={() => updateQuantity(
                            item.id,
                            item.quantity > 1 ? item.quantity - 1 : 1
                          )}
                        onChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
                      />
                    </div>
                    <div className="sm:hidden">
                      Rp {formatCurrency(book.price * item.quantity)}
                    </div>
                  </td>

                  <td className="py-2 max-sm:hidden">
                    Rp {formatCurrency(book.price * item.quantity)}
                  </td>

                  <td className="max-sm:px-2 sm:pr-8  py-2">
                    <button onClick={() => removeItem(item.id)}>
                      <Image
                        src="/Remove.svg"
                        alt="Remove"
                        width={25}
                        height={25}
                        className="min-w-[25px] min-h-[25px]"
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
