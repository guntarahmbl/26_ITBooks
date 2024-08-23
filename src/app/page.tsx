import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // temporary solution before login page gets added
    <Link href="/catalog" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Catalog
    </Link>
  );
}
