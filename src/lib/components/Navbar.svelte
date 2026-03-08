<script>
  import logo from '$lib/assets/logo-inverted.png';
  import { page } from '$app/stores';
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
          <a
            class="nav-link {$page.url.pathname === '/' ? 'active' : ''}"
            href="/"
          >
            Home
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link {$page.url.pathname === '/about' ? 'active' : ''}"
            href="/about"
          >
            About
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link {$page.url.pathname === '/services'
              ? 'active'
              : ''}"
            href="/services"
          >
            Services
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link {$page.url.pathname === '/contact' ? 'active' : ''}"
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .nav-link.active {
    color: white !important;
    font-weight: 600;
    border-bottom: 2px solid white;
  }
</style>
