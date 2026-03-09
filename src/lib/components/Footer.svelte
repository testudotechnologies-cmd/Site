<footer class="footer-video">
  <!-- VIDEO BACKGROUND -->
  <video autoplay muted loop playsinline class="footer-bg">
    <source src="/video/footer.mp4" type="video/mp4" />
  </video>

  <!-- CONTENT -->
  <div class="footer-overlay">
    <div class="container py-5 text-light">
      <div class="row">
        <div class="col-md-4">
          <h5 class="fw-bold">TESTUDO TECHNOLOGIES</h5>
          <p class="text-secondary">Engineered to Withstand</p>
        </div>

        <div class="col-md-4">
          <h6>Company</h6>
          <ul class="list-unstyled">
            <li><a href="/about" class="footer-link">About</a></li>
            <li><a href="/services" class="footer-link">Services</a></li>
            <li><a href="/contact" class="footer-link">Contact</a></li>
          </ul>
        </div>

        <div class="col-md-4">
          <h6>Contact</h6>
          <p class="text-secondary">info@testudotech.com</p>
        </div>
      </div>

      <hr class="border-secondary" />

      <div class="text-center text-secondary small">
        © 2026 Testudo Technologies
      </div>
    </div>
  </div>
</footer>

<style>
  .footer-video {
    position: relative;
    min-height: 350px;
    overflow: hidden;
  }

  /* VIDEO */

  .footer-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  /* OVERLAY */

  .footer-overlay {
    position: relative;
    z-index: 2;
    background: rgba(0, 0, 0, 0.75);
    min-height: 350px;
  }

  /* LINKS */

  .footer-link {
    color: #bbb;
    text-decoration: none;
  }

  .footer-link:hover {
    color: white;
  }
</style>
