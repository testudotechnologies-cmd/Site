<script>
	import { onMount } from "svelte";
	import { gsap } from "gsap";

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

		tl.fromTo(line1, {opacity:0}, {opacity:1, duration:1})
		  .to(line1, {opacity:0, duration:1}, "+=1")

		  .fromTo(line2, {opacity:0}, {opacity:1, duration:1})
		  .to(line2, {opacity:0, duration:1}, "+=1")

		  .fromTo(line3, {opacity:0}, {opacity:1, duration:1})
		  .to(line3, {opacity:0, duration:1}, "+=1")

		  .fromTo(final, {opacity:0, scale:0.9}, {opacity:1, scale:1, duration:1.5});

	});
</script>

<section class="hero">

	<video autoplay muted loop playsinline class="hero-video">
		<source src="/video/hero.mp4" type="video/mp4">
	</video>

	<div class="overlay">

		<h1 bind:this={line1} class="hero-text">Engineering Strength</h1>

		<h1 bind:this={line2} class="hero-text">Designing Resilience</h1>

		<h1 bind:this={line3} class="hero-text">Empowering Strategy</h1>

		<div bind:this={final} class="final">
			<img src="../assets/logo-only-inverted.png" class="logo" alt="logo">

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
	top:0;
	left:0;
	width:100%;
	height:100%;

	display:flex;
	align-items:center;
	justify-content:center;
	flex-direction:column;

	background: rgba(0,0,0,0.4);
	color:white;
	text-align:center;
}

.hero-text {
	position:absolute;
	font-size:3rem;
	opacity:0;
}

.final {
	opacity:0;
}

.logo {
	width:120px;
	margin-bottom:1rem;
}

.brand {
	letter-spacing:4px;
	font-size:3rem;
}

.tagline {
	color: var(--bs-secondary);
	font-size:1.2rem;
}

</style>