import { getServerSession } from 'next-auth';
import { db } from '../../../../lib/prisma';
import Search from './search';
import Navbar from '@/app/components/NavBar/Navbar';
import { authOptions } from '../../../../lib/authOptions';
import { redirect } from 'next/navigation';
import { Book } from '../../../../lib/type';
async function getBooks() {
    const books = await db.catalogue.findMany()
    return books;
}

export default async function Home() {
    const books:Book[] = await getBooks();
    const session = await getServerSession(authOptions);
    console.log(session)
    if (!session){
        redirect('/')
    }
    return(
        <>
            <Navbar />
            <Search books = {books}/>   
        </>
    )
}
