<script>
  import Hero from '$lib/components/Hero.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<!-- HERO -->
<Hero />
<!-- ABOUT -->
<Section bg="bg-dark text-light">
  <div class="row align-items-center justify-content-center">
    <!-- TEXT -->
    <div class="col-lg-6 text-center text-lg-start">
      <h2 class="fw-bold mb-4">Resilience by Design</h2>

      <blockquote class="blockquote">
        <p>“The strength of the legion lies in discipline and formation.”</p>

        <footer class="blockquote-footer text-light">
          Inspired by Caesar’s <cite>De Bello Gallico</cite>
        </footer>
      </blockquote>

      <p class="mt-4 lead">
        Inspired by the early rigor of the best defense startups, we engineer 
        <strong>AI-powered</strong> systems capable of true <strong>autonomy</strong>. 
        Like the Roman <em>Testudo</em>, our technology forms an impenetrable shield—delivering absolute <strong>protection</strong> to secure mission-critical 
        operations and, most importantly, <strong>saving lives</strong> when failure 
        is not an option.
      </p>
    </div>

    <!-- IMAGE -->
    <div class="col-lg-5 text-center">
      <img
        src="/caesar.png"
        alt="Julius Caesar writing De Bello Gallico"
        class="img-fluid rounded shadow-lg"
        style="max-height:420px;"
      />
    </div>
  </div>
</Section>

<!-- services -->
<Section>
  <div class="text-center mb-5">
    <a class="nav-link" href="/services">
      <h2 class="fw-bold">Services</h2>
    </a>
  </div>

  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100 bg-dark text-light border-secondary">
        <!-- <img
          src="/ugv-turret.png"
          class="card-img-top"
          alt="Autonomous turret system"
        /> -->
        <div class="card-body">
          <h3 class="card-title">Autonomous Counter-Aerial Systems</h3>
          <p class="card-text">
            Modular AI-powered turret and UGV turret systems built to detect,
            track, and engage aerial threats with fast-response targeting and
            adaptive defense logic.
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 bg-dark text-light border-secondary">
        <!-- <img
          src="/scan.png"
          class="card-img-top"
          alt="Autonomous turret system"
        /> -->
        <div class="card-body">
          <h3 class="card-title">Autonomous Reconnaissance & Swarm Scanning</h3>
          <p class="card-text">
            Drone-based area scanning powered by AI autonomy, swarm
            coordination, and friend-or-foe identification to expand situational
            awareness across contested environments.
          </p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card h-100 bg-dark text-light border-secondary">
        <!-- <img
          src="/command-comm.png"
          class="card-img-top"
          alt="Autonomous turret system"
        /> -->
        <div class="card-body">
          <h3 class="card-title">
            Battlefield Communication & Fusion Software
          </h3>
          <p class="card-text">
            Software systems designed to improve coordination between ground
            detachments and command centers through auditable ledgers, sensor
            fusion, and trusted identification workflows.
          </p>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- CALL TO ACTION -->
<Section bg="bg-dark text-light" padding="py-5">
  <div class="text-center">
    <h2 class="fw-bold mb-3">Ready to Build Strength?</h2>

    <p class="mb-4">
      Partner with Testudo Technologies to engineer solutions that endure.
    </p>

    <a href="/contact" class="btn btn-secondary btn-lg"> Get Started </a>
  </div>
</Section>
