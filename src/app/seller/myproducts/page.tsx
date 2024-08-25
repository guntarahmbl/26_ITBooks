import { db } from "../../../../lib/prisma";
import MyProducts from "./MyProducts";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../lib/authOptions";

async function getBooksOnMyProducts() {
    const session = await getServerSession(authOptions);
    const books = await db.catalogue.findMany({
        where : {
            emailPenjual: session.user.email,
        },
    });
    return books;
}

export default async function Home() {
    const books = await getBooksOnMyProducts();
    return(
        <MyProducts books = {books}/>
    )  
}
