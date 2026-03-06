<script>
	import "bootstrap/dist/css/bootstrap.min.css";
	import "$lib/styles/theme.css";

	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />