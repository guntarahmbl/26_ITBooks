export interface Book {
    idBuku:number;
    emailPenjual: string;
    title: string;
    price: number;
    condition: string;
    author: string;
    edition: string;
    isbn: string;
    volume: string;
    description: string;
    notes?: string | null;
    contact: string,
    file?: File;
    imageUrl:string;
    norek?: string | null,
    bank?: string | null
}