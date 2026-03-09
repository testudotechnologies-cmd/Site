<!-- 
<script>
  import { onMount } from 'svelte';

  let scrollPercents = [0, 0, 0];

  onMount(() => {
    const handleScroll = () => {
      // It looks specifically for 'service-section'. 
      // Ensure your <section> tags have this class!
      const sections = document.querySelectorAll('.service-section');
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        // Calculate progress
        const progress = ((viewHeight - rect.top) / viewHeight) * 100;
        
        if (scrollPercents[index] !== undefined) {
          scrollPercents[index] = Math.min(Math.max(progress, 0), 100);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once immediately
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section class="bg-dark text-light py-5 pt-5 mt-5">
  <div class="container mt-4">
    <div class="row justify-content-start">
      <div class="col-lg-8 text-start">
        <h1 class="display-4 fw-bold mb-4 text-white">Services</h1>
        <p class="lead text-secondary">
          Autonomous defense systems, reconnaissance platforms, and battlefield
          coordination software.
        </p>
      </div>
    </div>
  </div>
</section>
<div class="bg-dark py-4">
  <div class="container">
    <div class="download-bar-container">
      <div class="download-line" style="width: {scrollPercents[0]}% !important;"></div>
    </div>
  </div>
</div>
<section class="bg-dark text-light py-5">
  <div class="container row align-items-center justify-content-center mx-auto">
    <div class="col-lg-5 text-center mb-4 mb-lg-0">
      <img
        src="/ugv-turret.png"
        class="img-fluid rounded shadow-lg"
        alt="Counter aerial defense"
        style="max-height:420px;"
      />
    </div>

    <div class="col-lg-6 text-center text-lg-start">
      <h2 class="fw-bold mb-4 text-white">Counter-Aerial Defense Module</h2>
      <p class="lead">
        A modular AI-assisted turret system designed to detect and track small
        aerial threats such as reconnaissance drones and loitering munitions.
      </p>
      <p>
        The core defense unit can be deployed as a fixed installation or
        integrated on compatible vehicle platforms. Autonomous tracking and
        targeting logic assists operators in rapidly responding to low-altitude
        aerial threats.
      </p>
      <p>
        The turret module can optionally be mounted on an unmanned ground
        vehicle (UGV) platform for mobile defensive operations.
      </p>

      <h4 class="mt-4 fw-bold text-white">Estimated System Cost</h4>
      <p class="lead">$25,000 – $120,000</p>
      <ul class="text-start d-inline-block d-lg-block mb-0">
        <li>Core turret module included</li>
        <li>Optional UGV mobility platform</li>
        <li>Optional sensor packages</li>
      </ul>
      <br />
      <a href="/contact" class="btn btn-outline-light mt-3">
        Request System Configuration
      </a>
    </div>
  </div>
</section>
<div class="bg-dark py-4">
  <div class="container">
    <div class="download-bar-container">
      <div class="download-line" style="width: {scrollPercents[1]}% !important;"></div>
    </div>
  </div>
</div>
<section class="bg-dark text-light py-5">
  <div class="container row align-items-center justify-content-center flex-lg-row-reverse mx-auto">
    <div class="col-lg-5 text-center mb-4 mb-lg-0">
      <img
        src="/scan.png"
        class="img-fluid rounded shadow-lg"
        alt="Reconnaissance drones"
        style="max-height:420px;"
      />
    </div>

    <div class="col-lg-6 text-center text-lg-start">
      <h2 class="fw-bold mb-4 text-white">Autonomous Reconnaissance Drones</h2>
      <p class="lead">
        AI-enabled reconnaissance drones designed for rapid area scanning and
        real-time situational awareness.
      </p>
      <p>
        The system supports autonomous navigation, coordinated drone operations,
        and automated identification of objects of interest.
      </p>
      <p>
        Multiple drones can operate together to provide persistent aerial
        monitoring across large operational areas.
      </p>

      <h4 class="mt-4 fw-bold text-white">Estimated Deployment Cost</h4>
      <p class="lead">$8,000 – $40,000 depending on fleet size</p>
      <ul class="text-start d-inline-block d-lg-block mb-0">
        <li>Single drone configuration</li>
        <li>Multi-drone swarm configuration</li>
        <li>Optional AI autonomy modules</li>
      </ul>
      <br />
      <a href="/contact" class="btn btn-outline-light mt-3">
        Request Operational Demo
      </a>
    </div>
  </div>
</section>
<div class="bg-dark py-4">
  <div class="container">
    <div class="download-bar-container">
      <div class="download-line" style="width: {scrollPercents[2]}% !important;"></div>
    </div>
  </div>
</div>
<section class="bg-dark text-light py-5">
  <div class="container row align-items-center justify-content-center mx-auto">
    <div class="col-lg-5 text-center mb-4 mb-lg-0">
      <img
        src="/command-comm.png"
        class="img-fluid rounded shadow-lg"
        alt="Command software"
        style="max-height:420px;"
      />
    </div>

    <div class="col-lg-6 text-center text-lg-start">
      <h2 class="fw-bold mb-4 text-white">Command & Control Software</h2>
      <p class="lead">
        A modular software platform designed to improve coordination between
        field units, reconnaissance systems, and command sections.
      </p>
      <p>
        The system aggregates sensor feeds, drone telemetry, and operational
        data into a unified command interface.
      </p>
      <p>
        Optional modules include data auditing, identification tools, and
        integration with autonomous platforms.
      </p>

      <h4 class="mt-4 fw-bold text-white">Platform Licensing</h4>
      <p class="lead">$5,000 – $25,000 per deployment</p>
      <ul class="text-start d-inline-block d-lg-block mb-0">
        <li>Core command software</li>
        <li>Optional analytics modules</li>
        <li>Optional drone integration</li>
      </ul>
      <br />
      <a href="/contact" class="btn btn-outline-light mt-3">
        Request Platform Access
      </a>
    </div>
  </div>
</section>

<style>
  /* The track (faint gray) */
  :global(.download-bar-container) {
    width: 100%;
    height: 2px; /* Thicker makes it easier to see */
    background-color: rgba(255, 255, 255, 0.1) !important;
    overflow: hidden;
  }

  /* The actual charging line */
  :global(.download-line) {
    height: 100%;
    background-color: #750613 !important; /* Force Burgundy */
    box-shadow: 0 0 15px rgba(117, 6, 19, 0.8);
    transition: width 0.1s linear; /* Liquid feel */
    display: block;
  }
</style> -->

<script>
  import { onMount } from 'svelte';

  // We store the scroll percentages for each of the 3 lines
  let scrollPercents = [0, 0, 0];
  let sections = [];

  onMount(() => {
    // We grab the sections that the lines are "downloading" into
    sections = document.querySelectorAll('.download-zone');

    const handleScroll = () => {
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section has passed the center of the screen
        // This creates that "downloading" fill effect
        const visibleBottom = windowHeight - rect.top;
        const totalHeight = rect.height + windowHeight;
        let progress = (visibleBottom / totalHeight) * 100;

        // Clamp between 0 and 100
        scrollPercents[index] = Math.min(Math.max(progress, 0), 100);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section class="bg-dark text-light py-5">
  <div class="container mt-4">
    <div class="row justify-content-start">
      <div class="col-lg-8 text-start">
        <h1 class="display-4 fw-bold mb-4 text-white">Services</h1>
        <p class="lead text-secondary">
          Autonomous defense systems, reconnaissance platforms, and battlefield
          coordination software.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-dark text-light py-5 download-zone">
  <div class="container">
    <div class="download-bar-container mb-5">
      <div class="download-line" style="width: {scrollPercents[0]}%"></div>
    </div>

    <div class="row align-items-center justify-content-center mx-auto">
      <div class="col-lg-5 text-center mb-4 mb-lg-0">
        <img src="/ugv-turret.png" class="img-fluid rounded shadow-lg" alt="Defense" style="max-height:420px;" />
      </div>
      <div class="col-lg-6 text-center text-lg-start">
        <h2 class="fw-bold mb-4 text-white">Counter-Aerial Defense Module</h2>
        <p class="lead">
        A modular AI-assisted turret system designed to detect and track small
        aerial threats such as reconnaissance drones and loitering munitions.
      </p>
      <p>
        The core defense unit can be deployed as a fixed installation or
        integrated on compatible vehicle platforms. Autonomous tracking and
        targeting logic assists operators in rapidly responding to low-altitude
        aerial threats.
      </p>
      <p>
        The turret module can optionally be mounted on an unmanned ground
        vehicle (UGV) platform for mobile defensive operations.
      </p>

      <h4 class="mt-4 fw-bold text-white">Estimated System Cost</h4>
      <p class="lead">$25,000 – $120,000</p>
      <ul class="text-start d-inline-block d-lg-block mb-0">
        <li>Core turret module included</li>
        <li>Optional UGV mobility platform</li>
        <li>Optional sensor packages</li>
      </ul>
      <br />
        <a href="/contact" class="btn btn-outline-light mt-3">Request Configuration</a>
      </div>
    </div>
  </div>
</section>

<section class="bg-dark text-light py-5 download-zone">
  <div class="container">
    <div class="download-bar-container mb-5">
      <div class="download-line" style="width: {scrollPercents[1]}%"></div>
    </div>

    <div class="row align-items-center justify-content-center flex-lg-row-reverse mx-auto">
      <div class="col-lg-5 text-center mb-4 mb-lg-0">
        <img src="/scan.png" class="img-fluid rounded shadow-lg" alt="Drones" style="max-height:420px;" />
      </div>
      <div class="col-lg-6 text-center text-lg-start">
        <h2 class="fw-bold mb-4 text-white">Autonomous Reconnaissance Drones</h2>
        <p class="lead">
        AI-enabled reconnaissance drones designed for rapid area scanning and
        real-time situational awareness.
      </p>
      <p>
        The system supports autonomous navigation, coordinated drone operations,
        and automated identification of objects of interest.
      </p>
      <p>
        Multiple drones can operate together to provide persistent aerial
        monitoring across large operational areas.
      </p>

      <h4 class="mt-4 fw-bold text-white">Estimated Deployment Cost</h4>
      <p class="lead">$8,000 – $40,000 depending on fleet size</p>
      <ul class="text-start d-inline-block d-lg-block mb-0">
        <li>Single drone configuration</li>
        <li>Multi-drone swarm configuration</li>
        <li>Optional AI autonomy modules</li>
      </ul>
      <br />
        <a href="/contact" class="btn btn-outline-light mt-3">Request Demo</a>
      </div>
    </div>
  </div>
</section>

<section class="bg-dark text-light py-5 download-zone">
  <div class="container">
    <div class="download-bar-container mb-5">
      <div class="download-line" style="width: {scrollPercents[2]}%"></div>
    </div>

    <div class="row align-items-center justify-content-center mx-auto">
      <div class="col-lg-5 text-center mb-4 mb-lg-0">
        <img src="/command-comm.png" class="img-fluid rounded shadow-lg" alt="Software" style="max-height:420px;" />
      </div>
      <div class="col-lg-6 text-center text-lg-start">
        <h2 class="fw-bold mb-4 text-white">Command & Control Software</h2>
        <p class="lead">
        A modular software platform designed to improve coordination between
        field units, reconnaissance systems, and command sections.
      </p>
      <p>
        The system aggregates sensor feeds, drone telemetry, and operational
        data into a unified command interface.
      </p>
      <p>
        Optional modules include data auditing, identification tools, and
        integration with autonomous platforms.
      </p>

      <h4 class="mt-4 fw-bold text-white">Platform Licensing</h4>
      <p class="lead">$5,000 – $25,000 per deployment</p>
      <ul class="text-start d-inline-block d-lg-block mb-0">
        <li>Core command software</li>
        <li>Optional analytics modules</li>
        <li>Optional drone integration</li>
      </ul>
      <br />
        <a href="/contact" class="btn btn-outline-light mt-3">Request Access</a>
      </div>
    </div>
  </div>
</section>

<style>
  /* This ensures the 'track' of the download line is visible but dark */
  .download-bar-container {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1); /* The empty part of the bar */
    overflow: hidden;
  }

  .download-line {
    height: 100%;
    background-color: var(--brand-burgundy, #750613);
    box-shadow: 0 0 15px var(--brand-gold, #c9a24a);
    /* Very short transition for a 'live' feel without being jittery */
    transition: width 0.1s linear; 
  }
</style>