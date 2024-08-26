import Details from "./Details"; // Adjust the import path as necessary
import { db } from "../../../../../../lib/prisma";
import { Book } from "../../../../../../lib/type";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../lib/authOptions";

async function getBooks(idBuku: number, emailPenjual: string | undefined) {
  const book = await db.catalogue.findUnique({
    where: {
      idBuku: idBuku,
      emailPenjual: emailPenjual
    },
  });
  return book;
}

export default async function Home({ params }: { params: { id: string } }) {
  const idBuku = Number(params.id);
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    // Handle the case where the session or email is not available
    return <div>Unauthorized</div>;
  }

  const book = await getBooks(idBuku, session.user.email);

  // Handle the case where the book might not be found
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <Details book={book} />
    </div>
  );
}
