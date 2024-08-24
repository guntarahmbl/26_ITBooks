
import { useSearchParams } from 'next/navigation';
import { books } from "../../../../utils/example"; // Data buku sementara
import { db } from '../../../../lib/prisma';
import Search from './search';
import Navbar from '@/app/components/NavBar/Navbar';
async function getBooks() {
    const books = await db.catalogue.findMany()
    return books;
}

export default async function Home() {
    const books = await getBooks();
    return(
        <>
            <Navbar />
            <Search books = {books}/>
        </>
    )
    
}
