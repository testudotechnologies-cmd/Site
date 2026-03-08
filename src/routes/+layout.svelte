<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '$lib/styles/theme.css';
  import { onMount } from 'svelte';

  onMount(async () => {
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });

  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main>
  <slot />
</main>

<Footer />
