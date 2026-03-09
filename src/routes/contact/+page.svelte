<script>
  const CLOUD_NAME = 'YOUR_CLOUD_NAME';

  let name = '';
  let company = '';
  let email = '';
  let subject = '';
  let message = '';

  /**
   * @type {File | null}
   */
  let file = null;

  async function submitContact() {
    if (file && file.size > 10 * 1024 * 1024) {
      alert('PDF must be under 10MB');
      return;
    }

    let pdfUrl = null;

    // upload PDF to Cloudinary
    if (file) {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('upload_preset', 'portfolio_upload');

      const upload = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
        {
          method: 'POST',
          body: fd,
        },
      );

      const cloud = await upload.json();
      pdfUrl = cloud.secure_url;
    }

    const payload = {
      name,
      company,
      email,
      subject,
      message,
      portfolioUrl: pdfUrl,
    };

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    alert('Inquiry sent');

    // reset form
    name = '';
    company = '';
    email = '';
    subject = '';
    message = '';
    file = null;
  }
</script>

<section class="bg-dark text-light py-5">
  <div class="container mt-4">
    <div class="row justify-content-start">
      <div class="col-lg-8 text-start">
        <h1 class="display-4 fw-bold mb-4 text-white">Contact</h1>
        <p class="lead text-secondary">
          For inquiries regarding partnerships, research collaborations, or
          defense applications, please contact our team.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-dark text-light py-5">
  <div class="container mx-auto">
    <div class="row">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <h3 class="fw-bold mb-4 text-white">Send an Inquiry</h3>

        <form on:submit|preventDefault={submitContact}>
          <div class="mb-3">
            <label for="name" class="form-label fw-semibold">Name</label>
            <input
              id="name"
              type="text"
              class="form-control"
              placeholder="Your name"
              bind:value={name}
            />
          </div>

          <div class="mb-3">
            <label for="org" class="form-label fw-semibold">Organization</label>
            <input
              id="org"
              type="text"
              class="form-control"
              placeholder="Company or organization"
              bind:value={company}
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label fw-semibold">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="your@email.com"
              bind:value={email}
            />
          </div>

          <div class="mb-3">
            <label for="subject" class="form-label fw-semibold">Subject</label>
            <select
              id="subject"
              class="form-select form-control"
              bind:value={subject}
            >
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
              bind:value={message}
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="upload" class="form-label fw-semibold"
              >Secure Document Upload (Optional)</label
            >
            <input
              id="upload"
              type="file"
              class="form-control"
              accept=".pdf"
              on:change={(e) => (file = e.currentTarget.files?.[0] || null)}
            />
          </div>

          <button class="btn btn-outline-light px-4 py-2 mt-2"
            >Submit Inquiry</button
          >
        </form>
      </div>

      <div class="col-lg-5 offset-lg-1">
        <h3 class="fw-bold mb-4 text-white">Contact Information</h3>

        <p class="fs-5 fw-bold mb-1 text-white">Testudo Technologies</p>
        <p class="text-secondary mb-4">
          Defense technology research and development focused on autonomous
          systems and AI-driven operational software.
        </p>

        <hr class="mb-4 border-secondary" />

        <div class="mb-3">
          <strong class="d-block text-white">Email</strong>
          <a
            href="mailto:contact@testudotech.com"
            class="text-decoration-none text-secondary"
            >contact@testudotech.com</a
          >
        </div>

        <div class="mb-3">
          <strong class="d-block text-white">Partnerships</strong>
          <a
            href="mailto:partners@testudotech.com"
            class="text-decoration-none text-secondary"
            >partners@testudotech.com</a
          >
        </div>

        <div class="mb-3">
          <strong class="d-block text-white">Location</strong>
          <span class="text-secondary">European Union</span>
        </div>

        <div class="mb-3">
          <strong class="d-block text-white">Response Time</strong>
          <span class="text-secondary">Typically within 48 hours</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Applied dark styling to both inputs and the select dropdown */
  .form-control,
  .form-select {
    background-color: #212529; /* Dark gray background */
    color: #ffffff; /* White text */
    border: 1px solid #495057; /* Subtle gray border */
    border-radius: 0.375rem;
  }

  .form-control::placeholder {
    color: #adb5bd; /* Lighter gray for placeholder text so it's readable */
  }

  /* Adds a subtle bright focus ring when the user clicks a box */
  .form-control:focus,
  .form-select:focus {
    background-color: #2b3035; /* Slightly lighter gray when typing */
    color: #ffffff;
    border-color: #86b7fe; /* Bootstrap default blue focus border */
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
</style>
