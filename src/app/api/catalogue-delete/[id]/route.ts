// app/api/books/[id]/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../../../../lib/prisma';
export async function DELETE(request: Request) {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // Extract ID from URL
    if (!id || isNaN(Number(id))) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

    try {
        await db.catalogue.delete({
            where: { idBuku: Number(id) },
        });
        return NextResponse.json({ message: 'Book deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete book' }, { status: 500 });
    }
}
