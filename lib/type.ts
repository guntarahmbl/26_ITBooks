export interface Book {
    idBuku:number;
    emailPenjual: string | null;
    title: string;
    price: number;
    condition: string;
    author: string;
    edition: string;
    isbn: string;
    volume: string;
    description: string;
    notes: string | null;
    file?: File;
    imageUrl:string;
}