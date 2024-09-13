import { NextResponse } from 'next/server';
import { db } from '../../../../../lib/prisma';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const body = await req.json();
    const {
      title,
      price,
      condition,
      author,
      edition,
      isbn,
      volume,
      description,
      notes,
      imageUrl,
      contact,
      norek,
      bank
    } = body;

    // Check if the catalogue item exists
    const existingCatalogue = await db.catalogue.findUnique({
      where: { idBuku: id },
    });

    if (!existingCatalogue) {
      return NextResponse.json({ error: 'Catalogue item not found' }, { status: 404 });
    }

    // Update the catalogue item
    const updatedCatalogue = await db.catalogue.update({
      where: { idBuku: id },
      data: {
        title,
        price: parseFloat(price),
        condition,
        author,
        edition,
        isbn,
        volume,
        description,
        notes,
        contact,
        norek,
        bank,
        ...(imageUrl && { imageUrl }), // Only update imageUrl if it's provided
      },
    });

    return NextResponse.json(updatedCatalogue);
  } catch (error) {
    console.error('Error updating data:', error);
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}

// Optionally, you can also implement a GET method to fetch a single product
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const catalogue = await db.catalogue.findUnique({
      where: { idBuku: id },
    });

    if (!catalogue) {
      return NextResponse.json({ error: 'Catalogue item not found' }, { status: 404 });
    }

    return NextResponse.json(catalogue);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}