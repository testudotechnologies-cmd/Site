<script>
  import logo from '$lib/assets/logo-inverted.png';
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <!-- Logo / Brand -->
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src={logo} alt="logo" height="100" class="me-2" />
    </a>

    <!-- Mobile Toggle -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar Links -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/services">Services</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
