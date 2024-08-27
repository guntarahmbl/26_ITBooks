import Cart from "./Cart";
import { db } from "../../../../lib/prisma";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../../lib/authOptions";
import { redirect } from "next/navigation";

async function getBooksOnCart() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.email) {
      redirect('/');
    }
    const cartItems = await db.cart.findMany({
      where: {
          emailPembeli: session.user.email,
      },
      select: {
          idBuku: true,
          emailPembeli: true,
      },
  });
  
    const bookIds = cartItems.map((item) => item.idBuku);
    const books = await db.catalogue.findMany({
        where: {
          idBuku: {
            in: bookIds,
          },
        },
      });
    return books;
}

export default async function Home() {
    const books = await getBooksOnCart();
    return(
        <Cart books = {books}/>
    )  
}
