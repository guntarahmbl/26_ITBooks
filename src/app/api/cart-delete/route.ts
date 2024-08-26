// app/api/books/[id]/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../../../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/authOptions';

export async function DELETE(request: Request) {
    try {
        const body = await request.json();
        const { idBuku } = body;

        if (!idBuku) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        // Retrieve session
        const session = await getServerSession(authOptions);
        if (!session || !session.user?.email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const emailPembeli = session.user.email;

        // Perform delete operation
        await db.cart.delete({
            where: {
                idBuku_emailPembeli: {
                    idBuku: Number(idBuku),
                    emailPembeli: emailPembeli,
                }
            },
        });

        return NextResponse.json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error('Error deleting book:', error);
        return NextResponse.json({ error: 'Failed to delete book' }, { status: 500 });
    }
}