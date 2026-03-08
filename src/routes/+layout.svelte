<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '$lib/styles/theme.css';
  import { onMount } from 'svelte';

  let music;
  let started = false;

  onMount(async () => {
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // music trigger
    const startMusic = () => {
      if (music) {
        music.volume = 0.4;
        music.play().catch(() => {});
      }
    };

    // interaction events that browsers accept
    window.addEventListener('scroll', startMusic, { once: true });
    window.addEventListener('click', startMusic, { once: true });
  });

  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import CursorRadar from '$lib/components/cursorRadar.svelte';
</script>

<Navbar />

<main>
  <CursorRadar />
  <audio bind:this={music} loop>
    <source src="/schubert.mp3" type="audio/mpeg" />
  </audio>
  <slot />
</main>

<Footer />
