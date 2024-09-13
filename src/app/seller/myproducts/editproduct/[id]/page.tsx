import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../../../lib/authOptions";
import { redirect } from "next/navigation";
import { db } from "../../../../../../lib/prisma";
import { Book } from "../../../../../../lib/type";
import EditProductForm from "./EditProductForm";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/');
    return null; 
  }

  const idBuku = Number(params.id);

  // Fetch book data
  const book: Book | null  = await db.catalogue.findUnique({
    where: { idBuku },
  });

  if (!book) {
    return <div>Book not found</div>;
  }


  const initialData = {
    emailPenjual: book.emailPenjual,
    title: book.title,
    price: book.price,
    condition: book.condition,
    author: book.author,
    edition: book.edition,
    isbn: book.isbn,
    volume: book.volume,
    description: book.description,
    notes: book.notes ?? "",
    file: null, 
    imageUrl: book.imageUrl,
    contact: book.contact,
    norek: book.norek ?? "",
    bank: book.bank ?? ""
  };

  return <EditProductForm initialData={initialData} idBuku={idBuku} />;
}
