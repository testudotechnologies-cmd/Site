<script>
  import { onMount } from 'svelte';

  onMount(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
</script>

<section id="top" class="container py-5">
  <h1>Services</h1>
  <p>Autonomous defense and battlefield coordination systems.</p>
</section>

<section id="defense" class="service-section">
  <h2>Counter-Aerial Defense</h2>
</section>

<section id="recon" class="service-section">
  <h2>Autonomous Reconnaissance</h2>
</section>

<section id="command" class="service-section">
  <h2>Command & Control Software</h2>
</section>

<!-- capabilities -->

<style>
  .service-section {
    scroll-margin-top: 100px;
    padding: 120px 0;
    min-height: 100vh;
  }

  .service-section {
    scroll-snap-align: start;
  }
</style>
