import { db } from '../../../../lib/prisma';
import Search from './search';

async function getBooks() {
    const books = await db.catalogue.findMany()
    return books;
}

export default async function Home() {
    const books = await getBooks();
    return(
        <Search books = {books}/>
    )
    
}
