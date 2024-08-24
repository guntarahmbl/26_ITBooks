'use client';

import { useSearchParams } from 'next/navigation';
import Card from '@/app/components/Books/Card';

interface Book {
    id: string;
    name: string;
    description: string;
    author: string;
    publisher: string;
    price: number;
    image: string;
  }

// Define the props type
interface SearchProps {
    books: Book[];
  }
  
export default function Search({books}: SearchProps) {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm') || '';
    const filteredBooks = books.filter((book: any) => {
        const lowerTerm = searchTerm.toLowerCase();
        return (
            book.name.toLowerCase().includes(lowerTerm) ||
            book.description.toLowerCase().includes(lowerTerm) ||
            book.publisher.toLowerCase().includes(lowerTerm) ||
            book.author.toLowerCase().includes(lowerTerm)
        );
    });

    return (
        <div className="p-8">
            <div className="flex flex-col items-center gap-4 md:gap-8 mx-auto xl:px-6 md:px-4 px-2">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book: any) => (
                            <Card
                                key={book.id}
                                data={book}
                            />
                        ))
                    ) : (
                        <p className="text-deepBurgundy">Maaf gak ketemu :(</p>
                    )}
                </div>
            </div>
        </div>
    );
}
