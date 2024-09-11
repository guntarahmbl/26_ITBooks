import Details from "./Details";
import { db } from "../../../../../../lib/prisma";
import { Book } from "../../../../../../lib/type";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../../lib/authOptions";

async function getBooks(idBuku: number) {
  const book = await db.catalogue.findUnique({
    where: {
      idBuku: idBuku,
    },
  });
  return book;
}

export default async function Home({ params }: { params: { id: string } }) {
  const idBuku = Number(params.id);
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return <div>Unauthorized</div>;
  }

  const book = await getBooks(idBuku);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="bg-white">
      <Details book={book} />
    </div>
  );
}
