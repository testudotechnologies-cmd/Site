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

<div class="crosshair" style="left:{x}px; top:{y}px"></div>

<style>
  :global(body) {
    cursor: none;
  }

  /* crosshair container */

  .crosshair {
    position: fixed;
    width: 16px;
    height: 16px;

    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;

    border: 2px solid var(--bs-primary);
  }

  /* horizontal line */

  .crosshair::before {
    content: '';
    position: absolute;

    width: 22px;
    height: 2px;

    background: var(--bs-primary);

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }

  /* vertical line */

  .crosshair::after {
    content: '';
    position: absolute;

    width: 2px;
    height: 22px;

    background: var(--bs-primary);

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }
</style>
