
import { useSearchParams } from 'next/navigation';
import { books } from "../../../../utils/example"; // Data buku sementara
import Card from '../../../../components/Books/Card';
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
