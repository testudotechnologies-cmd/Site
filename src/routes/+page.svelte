<script>
  import Hero from '$lib/components/Hero.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<!-- HERO -->
<Hero />
<!-- ABOUT -->
<Section bg="bg-dark text-light">
  <div class="row justify-content-center text-center">
    <div class="col-lg-7">
      <h2 class="fw-bold mb-4">Resilience by Design</h2>

      <blockquote class="blockquote">
        <p>“The strength of the legion lies in discipline and formation.”</p>

        <footer class="blockquote-footer text-light">
          Inspired by Caesar’s <cite>De Bello Gallico</cite>
        </footer>
      </blockquote>

      <p class="mt-4">
        Like the Roman testudo formation that inspired our name, our systems are
        engineered to withstand pressure and protect those behind them.
      </p>
    </div>
  </div>
</Section>

<!-- capabilities -->
<Section>
  <div class="text-center mb-5">
    <h2 class="fw-bold">Capabilities</h2>
  </div>

  <div class="row g-4">
    <div class="col-md-4">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <h5>Autonomous Defense Systems</h5>
          <p>
            AI-assisted turret platforms designed for rapid detection and
            response against aerial threats.
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <h5>Counter-Drone Technology</h5>
          <p>
            Advanced sensing, tracking, and interception technologies for modern
            aerial threats.
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <h5>AI Defense Systems</h5>
          <p>
            Machine learning systems that enhance situational awareness and
            defensive response.
          </p>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- CALL TO ACTION -->
<Section bg="bg-dark text-light" padding="py-5">
  <div class="text-center">
    <h2 class="fw-bold mb-3">Ready to Build Something Resilient?</h2>

    <p class="mb-4">
      Partner with Testudo Technologies to engineer solutions that endure.
    </p>

    <a href="/contact" class="btn btn-secondary btn-lg"> Get Started </a>
  </div>
</Section>
