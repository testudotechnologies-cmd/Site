import { db } from '$lib/server/firebase';
// import { json } from '@sveltejs/kit';
/**
 * @param {{ request: Request }} param0
 */
export async function POST({ request }) {
  try {
    console.log('CONTACT API HIT');

    const data = await request.json();
    console.log('DATA:', data);

    const doc = await db.collection('contacts').add({
      ...data,
      createdAt: new Date(),
    });

    console.log('DOC CREATED:', doc.id);

    return new Response(JSON.stringify({ success: true }));
  } catch (err) {
    console.error('ERROR:', err);

    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
    });
  }
}
