import { db } from "../../../../lib/prisma";
import MyProducts from "./MyProducts";

async function getBooksOnCatalogue() {
    const books = await db.catalogue.findMany()
    return books;
}

export default async function Home() {
    const books = await getBooksOnCatalogue();
    return(
        <MyProducts books = {books}/>
    )  
}
