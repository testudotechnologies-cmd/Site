<script>
  import { onMount } from 'svelte';

  let x = 0;
  let y = 0;

  onMount(() => {
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    window.addEventListener('mousemove', move);

    return () => window.removeEventListener('mousemove', move);
  });
</script>

<div class="radar-cursor" style="left:{x}px; top:{y}px"></div>

<style>
  :global(body) {
    cursor: none;
  }

  /* professional targeting reticle */

  .radar-cursor {
    position: fixed;

    width: 18px;
    height: 18px;

    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;

    border: 2px solid var(--bs-primary);
  }

  /* horizontal line */

  .radar-cursor::before {
    content: '';
    position: absolute;

    width: 28px;
    height: 2px;

    background: var(--bs-primary);

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  /* vertical line */

  .radar-cursor::after {
    content: '';
    position: absolute;

    height: 28px;
    width: 2px;

    background: var(--bs-primary);

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  /* subtle HUD glow */

  .radar-cursor {
    box-shadow:
      0 0 6px var(--bs-primary),
      0 0 12px rgba(139, 10, 26, 0.3);
  }
</style>
