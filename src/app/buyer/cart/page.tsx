import Cart from "./Cart";
import { db } from "../../../../lib/prisma";

async function getBooksOnCatalogue() {
    const books = await db.catalogue.findMany({})
    return books;
}

export default async function Home() {
    const books = await getBooksOnCatalogue();
    return(
        <Cart books = {books}/>
    )  
}
