import { db } from "../../../../lib/prisma";
import MyProducts from "@/app/components/MyProducts"; 
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../lib/authOptions";
import { Book } from "../../../../lib/type";
import { redirect } from "next/navigation";
async function getBooksOnMyProducts() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.email) {
        redirect('/');
      }
    const books = await db.catalogue.findMany({
        where : {
            emailPenjual: session.user.email as string,
        },
    });
    return books;
}

export default async function Home() {
    const books: Book[] = await getBooksOnMyProducts();
    return(
        <MyProducts books = {books}/>
    )  
}
