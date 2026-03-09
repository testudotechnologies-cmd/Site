<script>
	export let fluid = false;
	export let bg = "";
	export let padding = "py-5";
	export let className = "";
</script>

<section class={`${bg} ${padding} ${className}`}>
	<div class={fluid ? "container-fluid" : "container"}>
		<slot />
	</div>
</section>