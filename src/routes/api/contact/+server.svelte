<script>
  import { db } from '$lib/server/firebase';
  import { json } from '@sveltejs/kit';
  /**
   * @param {{ request: Request }} param0
   */
  export async function POST({ request }) {
    try {
      const data = await request.json();

      await db.collection('contacts').add({
        ...data,
        createdAt: new Date(),
      });

      return json({ success: true });
    } catch (err) {
      console.error(err);
      return json({ error: 'Server error' }, { status: 500 });
    }
  }
</script>
