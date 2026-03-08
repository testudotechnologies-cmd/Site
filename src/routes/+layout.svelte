<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '$lib/styles/theme.css';
  import { onMount } from 'svelte';

  onMount(async () => {
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });

  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CursorRadar from '$lib/components/cursorRadar.svelte';
</script>

<Navbar />

<main>
  <CursorRadar />
  <slot />
</main>

<Footer />
