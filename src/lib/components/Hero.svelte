<!-- <script>
  import logo from '$lib/assets/logo-only-inverted.png';
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  /**
   * @type {gsap.TweenTarget}
   */
  let line1;
  /**
   * @type {gsap.TweenTarget}
   */
  let line2;
  /**
   * @type {gsap.TweenTarget}
   */
  let line3;
  /**
   * @type {gsap.TweenTarget}
   */
  let final;

  onMount(() => {
    const tl = gsap.timeline();

    tl.fromTo(line1, { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(line1, { opacity: 0, duration: 1 }, '+=1')

      .fromTo(line2, { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(line2, { opacity: 0, duration: 1 }, '+=1')

      .fromTo(line3, { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(line3, { opacity: 0, duration: 1 }, '+=1')

      .fromTo(
        final,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.5 },
      );
  });
</script>

<section class="hero">
  <video autoplay muted loop playsinline class="hero-video">
    <source src="/video/hero.mp4" type="video/mp4" />
  </video>

  <div class="overlay">
    <h1 bind:this={line1} class="hero-text">Engineering Strength</h1>

    <h1 bind:this={line2} class="hero-text">Designing Resilience</h1>

    <h1 bind:this={line3} class="hero-text">Empowering Strategy</h1>

    <div bind:this={final} class="final">
      <img src={logo} alt="logo" style=" height: 50%; margin-bottom: 1rem;" />

      <h1 class="brand">TESTUDO TECHNOLOGIES</h1>

      <p class="tagline">Engineered to Withstand</p>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .hero-video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(0, 0, 0, 0.4);
    color: white;
    text-align: center;
  }

  .hero-text {
    position: absolute;
    font-size: 3rem;
    opacity: 0;
  }

  .final {
    opacity: 0;
  }

  .brand {
    letter-spacing: 4px;
    font-size: 3rem;
  }

  .tagline {
    color: var(--bs-secondary);
    font-size: 2rem;
  }
</style> -->

<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import logo from '$lib/assets/logo-only-inverted.png';

  let v;

  let line1;
  let line2;
  let line3;
  let final;

  let missileVideo;
  let swarmVideo;
  let warroomVideo;

  function flash(video) {
    video.currentTime = 0;
    video.play();

    gsap.fromTo(
      video,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, yoyo: true, repeat: 1 },
    );
  }

  onMount(() => {
    const tl = gsap.timeline();

    tl.fromTo(line1, { opacity: 0 }, { opacity: 1, duration: 2 })
      .call(() => flash(missileVideo))
      .to(line1, { opacity: 0, duration: 1 }, '+=1')
      .set(line1, { display: 'none' })

      .fromTo(line2, { opacity: 0 }, { opacity: 1, duration: 2 })
      .call(() => flash(swarmVideo))
      .to(line2, { opacity: 0, duration: 1 }, '+=1')
      .set(line2, { display: 'none' })

      .fromTo(line3, { opacity: 0 }, { opacity: 1, duration: 2 })
      .call(() => flash(warroomVideo))
      .to(line3, { opacity: 0, duration: 1 }, '+=1')
      .set(line3, { display: 'none' })

      .fromTo(
        final,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.5 },
      );
  });
</script>

<section class="hero">
  <!-- HERO VIDEO ALWAYS PLAYING -->
  <!-- <video autoplay muted loop playsinline class="hero-video">
    <source src="/video/hero.mp4" type="video/mp4" />
  </video> -->

  <video
    autoplay
    muted
    loop
    playsinline
    class="hero-video"
    bind:this={v}
    on:loadedmetadata={() => (v.playbackRate = 0.45)}
  >
    <source src="/video/hero.mp4" type="video/mp4" />
  </video>

  <!-- FLASH VIDEOS -->
  <video bind:this={missileVideo} muted playsinline class="flash-video">
    <source src="/video/missiles.mp4" type="video/mp4" />
  </video>

  <video bind:this={swarmVideo} muted playsinline class="flash-video">
    <source src="/video/swarm.mp4" type="video/mp4" />
  </video>

  <video bind:this={warroomVideo} muted playsinline class="flash-video">
    <source src="/video/warroom.mp4" type="video/mp4" />
  </video>

  <div class="hero-text">
    <h1 bind:this={line1}>Engineering Strength</h1>

    <h1 bind:this={line2}>Designing Resilience</h1>

    <h1 bind:this={line3}>Empowering Strategy</h1>

    <div bind:this={final} class="final">
      <img src={logo} alt="logo" style="height:50%; margin-bottom:1rem;" />

      <h1 class="brand">TESTUDO TECHNOLOGIES</h1>

      <p class="tagline">Engineered to Withstand</p>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .flash-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
  }

  .hero-text {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
  }

  .hero-text > h1 {
    position: absolute;
    top: 40%;
    left: 0;
    width: 100%;
    font-size: 3rem;
    opacity: 0;
  }

  .final {
    opacity: 0;
    text-align: center;
    position: relative;
    margin-top: 0;
  }

  .brand {
    letter-spacing: 4px;
    font-size: 3rem;
  }

  .tagline {
    color: var(--bs-secondary);
    font-size: 2rem;
  }
</style>
