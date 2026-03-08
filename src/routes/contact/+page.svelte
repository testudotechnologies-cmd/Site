<section class="bg-light text-dark py-5 pt-5 mt-5">
  <div class="container mt-4">
    <div class="row justify-content-start">
      <div class="col-lg-8 text-start">
        <h1 class="display-4 fw-bold mb-4">Contact</h1>
        <p class="lead text-muted">
          For inquiries regarding partnerships, research collaborations, or defense
          applications, please contact our team.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="py-5">
  <div class="container mx-auto">
    <div class="row">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <h3 class="fw-bold mb-4">Send an Inquiry</h3>

        <form>
          <div class="mb-3">
            <label for="name" class="form-label fw-semibold">Name</label>
            <input
              id="name"
              type="text"
              class="form-control"
              placeholder="Your name"
            />
          </div>

          <div class="mb-3">
            <label for="org" class="form-label fw-semibold">Organization</label>
            <input
              id="org"
              type="text"
              class="form-control"
              placeholder="Company or organization"
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label fw-semibold">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="your@email.com"
            />
          </div>

          <div class="mb-3">
            <label for="subject" class="form-label fw-semibold">Subject</label>
            <select id="subject" class="form-select form-control">
              <option value="">Choose a subject</option>
              <option value="general">General Inquiry</option>
              <option value="partnership">Partnership</option>
              <option value="work">Work With Us</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label fw-semibold">Message</label>
            <textarea
              id="message"
              class="form-control"
              rows="5"
              placeholder="Describe your request"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="upload" class="form-label fw-semibold">Secure Document Upload (Optional)</label>
            <input id="upload" type="file" class="form-control" accept=".pdf" />
          </div>

          <button class="btn btn-dark px-4 py-2 mt-2">Submit Inquiry</button>
        </form>
      </div>

      <div class="col-lg-5 offset-lg-1">
        <h3 class="fw-bold mb-4">Contact Information</h3>

        <p class="fs-5 fw-bold mb-1">Testudo Technologies</p>
        <p class="text-muted mb-4">
          Defense technology research and development focused on autonomous
          systems and AI-driven operational software.
        </p>

        <hr class="mb-4" />

        <div class="mb-3">
          <strong class="d-block text-dark">Email</strong>
          <a href="mailto:contact@testudotech.com" class="text-decoration-none text-muted">contact@testudotech.com</a>
        </div>

        <div class="mb-3">
          <strong class="d-block text-dark">Partnerships</strong>
          <a href="mailto:partners@testudotech.com" class="text-decoration-none text-muted">partners@testudotech.com</a>
        </div>

        <div class="mb-3">
          <strong class="d-block text-dark">Location</strong>
          <span class="text-muted">European Union</span>
        </div>

        <div class="mb-3">
          <strong class="d-block text-dark">Response Time</strong>
          <span class="text-muted">Typically within 48 hours</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .form-control {
    background-color: #ffffff;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 0.375rem; /* Matches Bootstrap default rounding */
  }

  .form-control::placeholder {
    color: #666;
  }
  
  /* Adds a subtle focus ring when the user clicks a box */
  .form-control:focus {
    border-color: #333;
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.1);
  }
</style>