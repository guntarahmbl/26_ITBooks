import { NextResponse } from 'next/server';
import { db } from '../../../../lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      title,
      emailPenjual,
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

    const newCatalogue = await db.catalogue.create({
      data: {
        title,
        emailPenjual,
        price: parseFloat(price),
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
      },
    });

    return NextResponse.json(newCatalogue);
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
