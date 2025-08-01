// JavaScript functionality - script.js

// Loader functionality
window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 500);
  }, 2000); // 2 second delay
});

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
    }
  }
});

// Add hover effects to buttons
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".popup-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.05)";
    });

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
});

// Modal event listeners
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("shown.bs.modal", function () {
      // Pause any videos when modal opens
      const videos = this.querySelectorAll("video");
      videos.forEach((video) => {
        video.currentTime = 0;
      });
    });

    modal.addEventListener("hidden.bs.modal", function () {
      // Pause any videos when modal closes
      const videos = this.querySelectorAll("video");
      videos.forEach((video) => {
        video.pause();
      });
    });
  });
});

// Particle effect function
function addParticleEffect(element) {
  const particle = document.createElement("div");
  particle.style.position = "absolute";
  particle.style.width = "4px";
  particle.style.height = "4px";
  particle.style.background = "#fff";
  particle.style.borderRadius = "50%";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "1000";

  const rect = element.getBoundingClientRect();
  particle.style.left = rect.left + Math.random() * rect.width + "px";
  particle.style.top = rect.top + Math.random() * rect.height + "px";

  document.body.appendChild(particle);

  particle.animate(
    [
      { transform: "translateY(0px)", opacity: 1 },
      { transform: "translateY(-50px)", opacity: 0 },
    ],
    {
      duration: 1000,
      easing: "ease-out",
    }
  ).onfinish = () => particle.remove();
}

// Add particle effect on button hover
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".popup-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => addParticleEffect(this), i * 100);
      }
    });
  });
});

// Button click analytics (optional)
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".popup-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      console.log("Button clicked:", this.textContent.trim());
    });
  });
});

// Initialize tooltips if Bootstrap tooltips are used
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  document.querySelectorAll(".section-title, .footer").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });
});

// Mobile menu enhancements
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.style.animation = "slideOut 0.3s ease";
      } else {
        navbarCollapse.style.animation = "slideIn 0.3s ease";
      }
    });
  }
});

// Video error handling
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("error", function () {
      console.log("Video failed to load:", this.src);
      // You can add fallback content here
    });
  });
});

// Performance monitoring
window.addEventListener("load", function () {
  // Log performance metrics
  setTimeout(function () {
    if (window.performance) {
      const loadTime =
        window.performance.timing.loadEventEnd -
        window.performance.timing.navigationStart;
      console.log("Page load time:", loadTime + "ms");
    }
  }, 0);
});

console.log(
  "🎉 Website loaded successfully! All animations and interactions are ready."
);
